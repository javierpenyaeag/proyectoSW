<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pelicula;
use Illuminate\Http\Request;


class PeliculaController extends Controller
{

    public function index()
    {
        $peliculas = Pelicula::all();
        return $peliculas;
    }

    
    public function store(Request $request)
    {
        $pelicula = new Pelicula();
        $pelicula->nombre = $request->nombre;
        $pelicula->foto = $request->foto;
        $pelicula->seleccionado = $request->seleccionado;

        $pelicula->save();

    }


    public function show($id)
    {
        $pelicula = Pelicula::find($id);

        return $pelicula;
    }


    public function update(Request $request, $id)
    {
        $pelicula = Pelicula::findOrFail($request->id);
        $pelicula->nombre = $request->nombre;
        $pelicula->foto = $request->foto;
        $pelicula->seleccionado = $request->seleccionado;

        $pelicula->save();

    }


    public function destroy($id)
    {
        $pelicula = Pelicula::destroy($id);

        return $pelicula;

    }
}
