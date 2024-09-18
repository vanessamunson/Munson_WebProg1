<?php

namespace App\Http\Controllers;

use App\Models\SubjectPrerequisite;
use App\Http\Requests\StoreSubjectPrerequisiteRequest;
use App\Http\Requests\UpdateSubjectPrerequisiteRequest;

class SubjectPrerequisiteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $subjectprerequisite = SubjectPrerequisite::all();
        return inertia('SubjectPrerequisite', ['subjectprerequisite' => $subjectprerequisite]);
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
    public function store(StoreSubjectPrerequisiteRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(SubjectPrerequisite $subjectPrerequisite)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SubjectPrerequisite $subjectPrerequisite)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSubjectPrerequisiteRequest $request, SubjectPrerequisite $subjectPrerequisite)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SubjectPrerequisite $subjectPrerequisite)
    {
        //
    }
}
