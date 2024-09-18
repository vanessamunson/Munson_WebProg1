<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisteredSubject extends Model
{
    use HasFactory;

    protected $fillable = [
        'subjecttime_id',
        'student_id',
        'timesregistered',
    ];

}
