<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class actualites extends Model
{
    protected $table = 'actualites';
    
    protected $primaryKey = 'id_actualites';
    
    public $timestamps = false;

    protected $fillable = ['date', 'Title', 'Content'];
}
