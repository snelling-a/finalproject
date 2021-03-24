<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entity extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'region',
        'photo',
        'description',
        'coordinates',
    ];

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

	public function favorites()
    {
        return $this->hasMany(Favorite::class);
    }

    public function users()
    {
        return $this->hasManyThrough(User::class, Comment::class, Favorite::class, 'user_id');
    }
}
