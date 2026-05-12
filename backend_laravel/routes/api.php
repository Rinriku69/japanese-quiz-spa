<?php

use App\Http\Controllers\QuizController;
use Illuminate\Support\Facades\Route;

Route::get('/characters', [QuizController::class, 'characters']);
Route::get('/words', [QuizController::class, 'words']);
Route::get('/quizChoice', [QuizController::class, 'randomChoices']);
