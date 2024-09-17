<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'level_id',
        'department_id',
        'credits',
        'description',
        'obligatory',
        'facultative',
        'lecturer_id',
    ];

}
