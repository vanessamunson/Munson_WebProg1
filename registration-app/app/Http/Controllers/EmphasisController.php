<?php

namespace App\Http\Controllers;

use App\Models\Emphasis;
use App\Http\Requests\StoreEmphasisRequest;
use App\Http\Requests\UpdateEmphasisRequest;

class EmphasisController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $emphases = Emphasis::paginate(10);
        return inertia('Emphasis', ['emphases' => $emphases]);
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
    public function store(StoreEmphasisRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Emphasis $emphasis)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Emphasis $emphasis)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEmphasisRequest $request, Emphasis $emphasis)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Emphasis $emphasis)
    {
        //
    }
}
