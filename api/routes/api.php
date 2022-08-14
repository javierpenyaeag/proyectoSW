<?php

use App\Http\Controllers\Api\PeliculaController;
use App\Http\Controllers\Api\PersonajeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//aqui la de registro

Route::controller(PeliculaController::class)->group(function () {
    Route::get('/Peliculas', 'index');
    Route::post('/Pelicula', 'store');
    Route::get('/Pelicula/{id}', 'show');
    Route::put('/Pelicula/{id}', 'update');
    Route::delete('/Pelicula/{id}', 'destroy');
});


Route::controller(PersonajeController::class)->group(function () {
    Route::get('/Personajes', 'index');
    Route::post('/Personaje', 'store');
    Route::get('/Personaje/{id}', 'show');
    Route::put('/Personaje/{id}', 'update');
    Route::delete('/Personaje/{id}', 'destroy');
});
