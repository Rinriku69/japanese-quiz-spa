<?php

namespace App\Http\Controllers;

use App\Http\Resources\CharacterResource;
use App\Models\Character;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    function index()
    {
        $characters = Character::get();
        return CharacterResource::collection($characters);
    }
}
