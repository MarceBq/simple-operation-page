import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; 
import Opmult from "./components/Opmult";
import Opsum from "./components/Opsum";
import Opdiv from "./components/Opdiv";
import Oprest from "./components/Oprest";

import "./App.css";

function App() {
  return (
      <BrowserRouter>
        {/* Routes -> Este componente actúa como un contenedor para definir tus rutas en tu aplicación. Dentro de este componente, puedes definir todas tus rutas utilizando el elemento Route. */}
        <Routes>
          {/* Route ->  Este elemento se utiliza para definir una ruta en tu aplicación. Cada Route toma dos propiedades principales: path, que define la URL que activará el componente asociado, y element (o component en versiones anteriores de React Router), que especifica el componente que se renderizará cuando la URL coincida con el path.  */}
          <Route path="/" element={<Home />} />  
          <Route path="/mult" element={<Opmult />} />
          <Route path="/sum" element={<Opsum />} />
          <Route path="/div" element={<Opdiv />} />
          <Route path="/rest" element={<Oprest />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
