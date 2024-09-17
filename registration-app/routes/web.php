<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SubjectController;
use Inertia\Inertia;

Route::get('/', [StudentController::class, 'index']);
Route::resource('students', StudentController::class)->except('index');

Route::get('/subjects', [SubjectController::class, 'index']);
Route::resource('subjects', SubjectController::class)->except('index');

// Route::inertia('/', 'Home');
