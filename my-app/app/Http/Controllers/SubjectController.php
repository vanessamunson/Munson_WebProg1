<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use App\Models\SubjectTime;
use App\Models\User;
use App\Models\RegisteredSubject;
use App\Models\Lecturer;
use App\Http\Requests\StoreSubjectRequest;
use App\Http\Requests\UpdateSubjectRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;



class SubjectController extends Controller
{
    // make global variables? or combine??
    public function setFilters($filters) {
        
    }
    /**
     * Display a listing of the resource.
     */
    public function getSubjects(Request $request) 
    {
        $query = Subject::query(); 
        $userDeptId = Auth::user()->dept_id;
                
        // Apply level filter if provided
        if ($request->filled('level') && $request->input('level') !== '0') {
            $query->where('level_id', $request->input('level'));
        }
        
        // Apply credit sorting if provided
        if ($request->filled('creditSort') && $request->has('creditSort')) {
            if ($request->input('creditSort') == 'asc') {
                $query->orderBy('credits', 'ASC');
            } else {
                $query->orderBy('credits', 'DESC');
            }
        }
        
        // Apply obligatory filter if provided
        if ($request->filled('requirement') && $request->input('requirement') !== '0') {
            if ($request->input('requirement') == '1') {
                $query->where('dept_id', $userDeptId);
            }
            if ($request->input('requirement') == '2') {
                $query->where('obligatory', '1')->where('dept_id', $userDeptId);
            }
            if ($request->input('requirement') == '3') {
                $query->where('obligatory', '0')->where('dept_id', $userDeptId);
            }
            if ($request->input('requirement') == '4') {
                $query->where('facultative', '1')->where('dept_id', '!=', $userDeptId)->where('facultaive', '1');
            }
        }

        if (!($request->filled('level') && $request->filled('creditSort') && $request->filled('requirement'))) {
            $query->where('dept_id', $userDeptId)->orWhere('facultative', '1');
        }
        
        // Now paginate the result (either for inDept or facultative, depending on filters)
        $subjects = $query->paginate(10)->appends($request->query());
        
        // Return the results with filters and department info
        return inertia('Subject', [
            'subjects' => $subjects,
            'userDeptId' => $userDeptId,
            'filters' => $request->all(),
        ]);
    }

    public function getActiveSubjects()
    {
        $user = Auth::user();
        $subjects = Subject::query()
            ->join('subject_times', 'subject_times.subject_id', '=', 'subjects.id') // Join with subject_times table
            ->join('registered_subjects', 'registered_subjects.subject_time_id', '=', 'subject_times.id') // Join with registered_subjects table
            ->where('registered_subjects.user_id', $user->id) // Filter by user
            ->where('registered_subjects.status', 'Active') // Filter by status
            ->select('subjects.*', 'subject_times.id as subject_time_id') // Select subjects fields + subject_time.id as subject_time_id
            ->paginate(10);


        return inertia('ActiveSubject', [
            'subjects' => $subjects,
            'userDeptId' => $user->dept_id,
        ]);
    }

    public function getInactiveSubjects()
    {
        $user = Auth::user();
        $subjects = Subject::query()
            ->join('subject_times', 'subject_times.subject_id', '=', 'subjects.id') // Join with subject_times table
            ->join('registered_subjects', 'registered_subjects.subject_time_id', '=', 'subject_times.id') // Join with registered_subjects table
            ->where('registered_subjects.user_id', $user->id) // Filter by user
            ->where('registered_subjects.status', 'Inactive') // Filter by status
            ->select('subjects.*') // Select only the subjects
            ->paginate(10);


        return inertia('InactiveSubject', [
            'subjects' => $subjects,
            'userDeptId' => $user->dept_id,
        ]);
    }
    
    public function getInfo (Request $request) 
    {
        $subject_id = $request->id;
        $query = Subject::query(); 
        $userDeptId = Auth::user()->dept_id;
                
        // Apply level filter if provided
        if ($request->filled('level') && $request->input('level') !== '0') {
            $query->where('level_id', $request->input('level'));
        }
        
        // Apply credit sorting if provided
        if ($request->filled('creditSort') && $request->has('creditSort')) {
            if ($request->input('creditSort') == 'asc') {
                $query->orderBy('credits', 'ASC');
            } else {
                $query->orderBy('credits', 'DESC');
            }
        }
        
        // Apply obligatory filter if provided
        if ($request->filled('requirement') && $request->input('requirement') !== '0') {
            if ($request->input('requirement') == '1') {
                $query->where('dept_id', $userDeptId);
            }
            if ($request->input('requirement') == '2') {
                $query->where('obligatory', '1')->where('dept_id', $userDeptId);
            }
            if ($request->input('requirement') == '3') {
                $query->where('obligatory', '0')->where('dept_id', $userDeptId);
            }
            if ($request->input('requirement') == '4') {
                $query->where('facultative', '1')->where('dept_id', '!=', $userDeptId)->where('facultaive', '1');
            }
        }
        
        // Now paginate the result (either for inDept or facultative, depending on filters)
        $subjects = $query->paginate(10)->appends($request->query());

        // The request gives the id of the chosen subject
        $mSubject = Subject::with(['subjectTime', 'lecturer', 'prerequisite'])
            ->where('id', $subject_id)
            ->first();
        $subject_time = SubjectTime::query()->where('subject_times.subject_id', $subject_id)->get();
        // $mSubject = Lecturer::query()
        //     ->join('subjects', 'subjects.lecturer_id', '=', 'lecturers.id')->where('subjects.id', $id)->get();
        return inertia('Subject', [
            'id' => $subject_id,
            'mSubject' => $mSubject,
            'subjects' => $subjects,
            'userDeptId' => $userDeptId,
            'filters' => $request->all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSubjectRequest $request)
    {
        $request->validate([
            'subject_time_id' => 'unique:App\Models\RegisteredSubject,subject_time_id',
        ], [
            'subject_time_id.unique' => 'You are already registered for this subject time.',
        ]);
        // Request is the subject_time id
        $user = Auth::user();
        $registeredSubject = RegisteredSubject::create([
            'subject_time_id' => $request->input('subject_time_id'),
            'user_id' => $user->id,
            'status' => 'Active'
        ]);
        return null;
    }

    /**
     * Display the specified resource.
     */
    public function show(Subject $subject)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Subject $subject)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSubjectRequest $request, Subject $subject)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($subject_time_id)
    {
        $user = Auth::id(); // Gets the authenticated user’s ID

        // Create a query instance for RegisteredSubject and delete the record
        $regSub = RegisteredSubject::where('status', 'Active')
            ->where('user_id', $user)
            ->where('subject_time_id', $subject_time_id)
            ->delete();

        return null; // Return a 204 No Content response
    }
}
