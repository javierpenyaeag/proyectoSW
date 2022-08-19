<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\PeliculaController;
use App\Http\Controllers\Api\PersonajeController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

//aqui la de registro

Route::group(["middleware" => ["auth:sanctum"]] , function () {
    Route::get('/peliculas',  [PeliculaController::class, 'getPeliculas']);
    //Route::post('/pelicula', 'store');
    Route::post('/pelicula', [PeliculaController::class, 'storePelicula']);
    // Route::get('/Pelicula/{id}', 'show');
    // Route::put('/Pelicula/{id}', 'update');
    //Route::delete('/pelicula/{id}', 'destroy');
    Route::delete('/pelicula/{id}', [PeliculaController::class, 'destroyPelicula']);
});


Route::group(["middleware" => ["auth:sanctum"]] , function () {
    Route::get('/personajes', [PersonajeController::class, 'getPerosnajes']);
    //[FriendsController::class, 'getFriends']
    Route::post('/personaje', [PersonajeController::class, 'store']);
    //Route::get('/Personaje/{id}', 'show');
    //Route::put('/Personaje/{id}', 'update');
    Route::delete('/personaje/{id}', [PersonajeController::class, 'destroy']);
});

//rutas del registro: -->

Route::group(["middleware" => ["auth:sanctum"]] , function () {
    Route::post('logout', 'App\Http\Controllers\AuthController@logout'); //puede ser get????
    Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
    Route::post('me', 'App\Http\Controllers\AuthController@me');
    //la que no está con la librería pero es para añadir usuarios:
});
Route::post('login', 'App\Http\Controllers\AuthController@login');
Route::post('register', 'App\Http\Controllers\AuthController@register');