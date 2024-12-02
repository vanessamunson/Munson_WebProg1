<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\SubjectController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::resource('register', RegisteredUserController::class);
Route::resource('login', RegisteredUserController::class);

Route::middleware('auth', 'verified')->group(function () {
    Route::get('/subjects', [SubjectController::class, 'getSubjects'])->name('subjects');
    Route::get('/subjects/{id}',[SubjectController::class, 'getInfo'])->name('view-subject');
    Route::get('/previous-subjects', [SubjectController::class, 'getInactiveSubjects'])->name('inactivesubjects');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/activesubjects', [SubjectController::class, 'getActiveSubjects'])->name('activesubjects');
    Route::post('/activesubjects/{id}', [SubjectController::class, 'store'])->name('activesubjects.store');
    Route::delete('/activesubjects/{subject_time_id}', [SubjectController::class, 'destroy'])->name('activesubjects.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
