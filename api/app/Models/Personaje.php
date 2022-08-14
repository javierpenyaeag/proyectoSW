<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Personaje extends Model
{
    use HasFactory;
    protected $fillable = ['idUsu', 'nombre', 'peso', 'masa', 'genero', 'foto', 'seleccionado'];
}
