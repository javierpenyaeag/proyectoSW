import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import { BarraNavegacion } from "./components/BarraNavegacion";
import { Login } from "./components/Login";
import { PeliculasFavoritas } from "./components/PeliculasFavoritas";
import { PersonajesFavoritos } from "./components/PersonajesFavoritos";
import { Registro } from "./components/Registro";
import { VerPersonajes } from "./components/VerPersonajes";
import VisualComponent from "./components/VisualComponent";

function App() {
  return (
    <div className="App">
      {/* <UseProvider> */}
      <BrowserRouter>
        <BarraNavegacion/>
        <Routes>
          <Route path='/' element={<VisualComponent/>}/>
          <Route path="/verPersonajes/:pelicula" element={<VerPersonajes/>} />
          <Route path="/peliculasFavoritas" element={<PeliculasFavoritas/>} />
          <Route path="/personajesFavoritos" element={<PersonajesFavoritos/>} />
          <Route path="/registro" element={<Registro/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
      </BrowserRouter>
      {/* </UseProvider> */}
    </div>
  );
}

export default App;

