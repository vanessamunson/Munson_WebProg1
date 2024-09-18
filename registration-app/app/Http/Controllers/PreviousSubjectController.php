<?php

namespace App\Http\Controllers;

use App\Models\PreviousSubject;
use App\Http\Requests\StorePreviousSubjectRequest;
use App\Http\Requests\UpdatePreviousSubjectRequest;

class PreviousSubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $previoussubjects = PreviousSubject::all();
        return inertia('PreviousSubject', ['previoussubjects' => $previoussubjects]);
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
    public function store(StorePreviousSubjectRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(PreviousSubject $previousSubject)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PreviousSubject $previousSubject)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePreviousSubjectRequest $request, PreviousSubject $previousSubject)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PreviousSubject $previousSubject)
    {
        //
    }
}
