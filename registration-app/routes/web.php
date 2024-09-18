<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\EmphasisController;
use App\Http\Controllers\GradeController;
use App\Http\Controllers\LecturerController;
use App\Http\Controllers\LevelController;
use App\Http\Controllers\PreviousSubjectController;
use App\Http\Controllers\RegisteredSubjectController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\SubjectEmphasisController;
use App\Http\Controllers\SubjectPrerequisiteController;
use App\Http\Controllers\SubjectTimeController;
use Inertia\Inertia;

Route::get('/attendance', [AttendanceController::class, 'index']);
Route::resource('attendance', AttendanceController::class)->except('index');

Route::get('/departments', [DepartmentController::class, 'index']);
Route::resource('departments', DepartmentController::class)->except('index');

Route::get('/emphases', [EmphasisController::class, 'index']);
Route::resource('emphases', EmphasisController::class)->except('index');

Route::get('/grades', [GradeController::class, 'index']);
Route::resource('grades', GradeContoller::class)->except('index');

Route::get('/lecturers', [LecturerController::class, 'index']);
Route::resource('lecturers', LecturerController::class)->except('index');

Route::get('/levels', [LevelController::class, 'index']);
Route::resource('levels', LevelController::class)->except('index');

Route::get('/previoussebject', [PreviousSubjectController::class, 'index']);
Route::resource('previoussebject', PreviousSubjectController::class)->except('index');

Route::get('/registeredsubject', [RegisteredSubjectController::class, 'index']);
Route::resource('registeredsubject', RegisteredSubjectController::class)->except('index');

Route::get('/students', [StudentController::class, 'index']);
Route::resource('students', StudentController::class)->except('index');

Route::get('/subjects', [SubjectController::class, 'index']);
Route::resource('subjects', SubjectController::class)->except('index');

Route::get('/subjectemphasis', [SubjectEmphasisController::class, 'index']);
Route::resource('subjectemphasis', SubjectEmphasisController::class)->except('index');

Route::get('/subjectprerequisite', [SubjectPrerequisiteController::class, 'index']);
Route::resource('subjectprerequisite', SubjectPrerequisiteController::class)->except('index');

Route::get('/subjecttime', [SubjectTimeController::class, 'index']);
Route::resource('subjecttime', SubjectTimeController::class)->except('index');

// Route::inertia('/', 'Home');
