<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubjectPrerequisite extends Model
{
    use HasFactory;

    protected $fillable = [
        'subject_id',
        'prerequisite_id',
    ];

}
