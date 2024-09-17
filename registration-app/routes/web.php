<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use Inertia\Inertia;

Route::get('/', [StudentController::class, 'index']);

Route::resource('students', StudentController::class)->except('index');

// Route::inertia('/', 'Home');
