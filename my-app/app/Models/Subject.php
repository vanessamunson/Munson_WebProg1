<?php

namespace App\Models;
use App\Models\Prerequisite;
use App\Models\SubjectTime;
use App\Models\Lecturer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Subject extends Model
{

    public function subjectTime()
    {
        return $this->hasMany(SubjectTime::class, 'subject_id');
    }

    public function lecturer()
    {
        return $this->belongsTo(Lecturer::class, 'lecturer_id');
    }

    public function prerequisite()
    {
        return $this->belongsToMany(Subject::class, 'prerequisites', 'subject_id', 'prerequisite_id');
    }

}
