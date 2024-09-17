<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\EmphasisController;
use App\Http\Controllers\LecturerController;
use App\Http\Controllers\LevelController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SubjectController;
use Inertia\Inertia;

Route::get('/attendance', [AttendanceController::class, 'index']);
Route::resource('attendance', AttendanceController::class)->except('index');

Route::get('/departments', [DepartmentController::class, 'index']);
Route::resource('departments', DepartmentController::class)->except('index');

Route::get('/emphases', [EmphasisController::class, 'index']);
Route::resource('emphases', EmphasisController::class)->except('index');

Route::get('/lecturers', [LecturerController::class, 'index']);
Route::resource('lecturers', LecturerController::class)->except('index');

Route::get('/levels', [LevelController::class, 'index']);
Route::resource('levels', LevelController::class)->except('index');

Route::get('/', [StudentController::class, 'index']);
Route::resource('students', StudentController::class)->except('index');

Route::get('/subjects', [SubjectController::class, 'index']);
Route::resource('subjects', SubjectController::class)->except('index');

// Route::inertia('/', 'Home');
