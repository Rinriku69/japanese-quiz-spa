<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class WordResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'hiragana'=>$this->word_hiragana,
            'kanji'=>$this->word_kanji,
            'romaji'=>$this->romaji,
            'meaning'=>$this->meaning
        ];
    }
}
