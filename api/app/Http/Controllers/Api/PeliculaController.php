<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pelicula;
use App\Models\User;
use Illuminate\Http\Request;


class PeliculaController extends Controller
{

    public function getPeliculas()
    {
        $result = User::with('peliculas')->where('id', '=', auth()->user()->id)
        ->first();

        if($result){
            $response = [
                'data' => $result->peliculas,
                'message' => "tu películas favoritas"
            ]; 
            return response($response, 200);//ok
        }


        $response = [
            'data' => null,
            'message' => "no tienes ningun peliculas en favoritos"
        ];

        return response($response, 200);
    }

    
    public function storePelicula(Request $request)
    {
        $pelicula = new Pelicula();
        $pelicula->idUsu = auth()->user()->id;
        $pelicula->nombre = $request->nombre;
        $pelicula->foto = $request->foto;
        $pelicula->seleccionado = $request->seleccionado;

        if($pelicula->save()){
            $response = [
                'data' => $pelicula,
                'message' => "se ha guadado la película exitosamente"
             ];

             return response($response, 201); 
        }
        
        $response = [
            'data' => null,
            'message' => "error al guardar la pelicula"
            ];
    
            return response($response, 500);

    }


    public function show($id)
    {
        $pelicula = Pelicula::find($id);

        return $pelicula;
    }


    public function update(Request $request, $id)
    {
        $pelicula = Pelicula::findOrFail($request->id);
        $pelicula->idUsu = $request->idUsu;
        $pelicula->nombre = $request->nombre;
        $pelicula->foto = $request->foto;
        $pelicula->seleccionado = $request->seleccionado;

        $pelicula->save();

    }


    public function destroyPelicula($id)
    {
        $pelicula = Pelicula::destroy($id);

        if($pelicula){
            $response= [
                'data' => $id,
                'message' => "la pelicula se ha borrado correctamente"
            ];
            return response($response, 200);
        }

        $response = [
            'data' => null,
            'message' => "la pelicula no fue encontrada"
        ];

        return response($response, 404);

    }
}
