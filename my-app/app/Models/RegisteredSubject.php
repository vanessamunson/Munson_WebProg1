<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RegisteredSubject extends Model
{
    public function subjectTime()
    {
        return $this->belongsTo(SubjectTime::class);
    }
    
    // A registered subject belongs to a user
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    protected $fillable = [
        'subject_time_id',
        'user_id',
        'status'
    ];
}
