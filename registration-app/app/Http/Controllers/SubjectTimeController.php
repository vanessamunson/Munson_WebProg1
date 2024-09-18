<?php

namespace App\Http\Controllers;

use App\Models\SubjectTime;
use App\Http\Requests\StoreSubjectTimeRequest;
use App\Http\Requests\UpdateSubjectTimeRequest;

class SubjectTimeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $subjecttimes = SubjectTime::paginate(10);
        return inertia('SubjectTime', ['subjecttimes' => $subjecttimes]);
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
    public function store(StoreSubjectTimeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(SubjectTime $subjectTime)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SubjectTime $subjectTime)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSubjectTimeRequest $request, SubjectTime $subjectTime)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SubjectTime $subjectTime)
    {
        //
    }
}
