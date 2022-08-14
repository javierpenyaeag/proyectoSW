import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import { BarraNavegacion } from "./components/BarraNavegacion";
import { PeliculasFavoritas } from "./components/PeliculasFavoritas";
import { PersonajesFavoritos } from "./components/PersonajesFavoritos";
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
          <Route path="/PersonajesFavoritos" element={<PersonajesFavoritos/>} />
          <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
      </BrowserRouter>
      {/* </UseProvider> */}
    </div>
  );
}

export default App;

