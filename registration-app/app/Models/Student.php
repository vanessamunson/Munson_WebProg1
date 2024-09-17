<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'race',
        'hall',
        'username',
        'password',
        'department_id',
        'emphasis_id'
    ];
    
}
