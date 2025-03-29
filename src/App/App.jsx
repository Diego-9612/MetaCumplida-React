import "../App.css";
import React from "react";
import { AppUI } from "./AppUI";
import { TareaProvider } from "../../src/Componentes/TareaContext";



function App() {

  return (

    <TareaProvider>
      <AppUI />
    </TareaProvider>

  );
}

export default App;
