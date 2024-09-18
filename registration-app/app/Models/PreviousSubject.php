<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PreviousSubject extends Model
{
    use HasFactory;

    protected $fillable = [
        'subject_id',
        'student_id',
        'grade_id',
        'level_id',
    ];

}
