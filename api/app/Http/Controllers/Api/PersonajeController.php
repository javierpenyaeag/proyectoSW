<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Personaje;
use App\Models\User;
use Illuminate\Http\Request;

class PersonajeController extends Controller
{

    public function getPerosnajes()
    {
        $result = User::with('Personajes')->where('id', '=', auth()->user()->id)
        ->first();

        if($result){
            $response = [
                'data' => $result->personajes,
                'message' => "tus personajes favoritos"
            ];

            return response($response, 200);
        }

        $response = [
            'data' => null,
            'message' => "no tienes ningun personaje en favoritos"
        ];

        return response($response, 200);
        //return $personajes;
    }


    public function store(Request $request)
    {
        $personaje = new Personaje();
        $personaje->idUsu = auth()->user()->id;
        $personaje->nombre = $request->nombre;
        $personaje->peso = $request->peso;
        $personaje->altura = $request->altura;
        $personaje->genero = $request->genero;
        $personaje->foto = $request->foto;
        // $personaje->seleccionado = $request->seleccionado;

       if($personaje->save()){
         $response = [
            'data' => $personaje,
            'message' => "se ha guadado el personaje exitosamente"
         ];

         return response($response, 201);
       }

       $response = [
        'data' => null,
        'message' => "error al guardar el personaje"
        ];

        return response($response, 500);       
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

        if($personaje){
            $response = [   
                'data' => $id,
                'message' => "el personaje fue eliminado de tu lista con exito"
            ];
        
                return response($response, 200);  
        }

        $response = [   
            'data' => null,
            'message' => "el personaje no fuen encontrado"
        ];
    
            return response($response, 404);  
    }
}
