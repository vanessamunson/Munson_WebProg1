<?php

namespace App\Http\Controllers;

use App\Models\SubjectEmphasis;
use App\Http\Requests\StoreSubjectEmphasisRequest;
use App\Http\Requests\UpdateSubjectEmphasisRequest;

class SubjectEmphasisController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $subjectemphases = SubjectEmphasis::all();
        return inertia('SubjectEmphasis', ['subjectemphases' => $subjectemphases]);
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
    public function store(StoreSubjectEmphasisRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(SubjectEmphasis $subjectEmphasis)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SubjectEmphasis $subjectEmphasis)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSubjectEmphasisRequest $request, SubjectEmphasis $subjectEmphasis)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SubjectEmphasis $subjectEmphasis)
    {
        //
    }
}
