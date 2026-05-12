<?php

namespace App\Http\Controllers;

use App\Http\Resources\CharacterResource;
use App\Http\Resources\WordResource;
use App\Models\Character;
use App\Models\Word;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    function characters()
    {
        $characters = Character::get();
        return CharacterResource::collection($characters);
    }

    function words()
    {
        $words = Word::get();
        return WordResource::collection($words);
    }

    function randomChoices()
    {
        $correctChoice = Character::inRandomOrder()->first();
        $otherChoices = Character::inRandomOrder()->limit(3)->whereNot('idcharacters', $correctChoice->idcharacters)->get();
        $mergeChoices = $otherChoices->push($correctChoice)->shuffle();
        return $mergeChoices;
    }

    function getQuiz(Request $request){
        
    }
}
