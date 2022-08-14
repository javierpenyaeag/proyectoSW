<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Personaje;
use Illuminate\Http\Request;

class PersonajeController extends Controller
{

    public function index()
    {
        $personajes = Personaje::all();
        return $personajes;
    }


    public function store(Request $request)
    {
        $personaje = new Personaje();
        $personaje->nombre = $request->nombre;
        $personaje->peso = $request->peso;
        $personaje->altura = $request->altura;
        $personaje->genero = $request->genero;
        $personaje->foto = $request->foto;
        $personaje->seleccionado = $request->seleccionado;

        $personaje->save();
    }


    public function show($id)
    {
        $personaje = Personaje::find($id);
    }


    public function update(Request $request, $id)
    {
        $personaje = Personaje::findOrFail($request->id);
        $personaje->nombre = $request->nombre;
        $personaje->peso = $request->peso;
        $personaje->altura = $request->altura;
        $personaje->genero = $request->genero;
        $personaje->foto = $request->foto;
        $personaje->seleccionado = $request->seleccionado;

        $personaje->save();
    }


    public function destroy($id)
    {
        $personaje = Personaje::destroy($id);

        return $personaje;
    }
}
