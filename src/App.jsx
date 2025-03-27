import "./App.css";
import { ContadorTareas } from "./componentes/ContadorTareas";
import { InputTareas } from "./componentes/BuscadorTareas";
import { ListaTareas } from "./componentes/ListaTareas";
import { ItemTarea } from "./componentes/ItemTarea";
import { BotonCrearTarea } from "./componentes/BotonCrearTarea";
import React from "react";

function useLocalStorage(itemNombre, valorInicial) {

  const localStorageItems = localStorage.getItem(itemNombre);

  let jsonItems;

  if (!localStorageItems) {
    localStorage.setItem(itemNombre, JSON.stringify(valorInicial));
    jsonItems = valorInicial;
  } else {
    jsonItems = JSON.parse(localStorageItems);
  }

  const [item, setItem] = React.useState(jsonItems);

  const guardarItems = (nuevoItem) => {
    localStorage.setItem(itemNombre, JSON.stringify(nuevoItem));
    setItem(nuevoItem);
  }

  return [item, guardarItems]

}

function App() {


  const [tareas, guardarItems] = useLocalStorage('TAREAS_V1', []);

  const tareasCompletas = tareas.filter(tarea => !!tarea.estado).length;
  const tareasTotales = tareas.length;

  const [buscarTareas, setBuscarTareas] = React.useState('');
  const filtrarTareas = tareas.filter((tarea) => {
    const tareaText = tarea.text.toLowerCase();
    const tareaBuscar = buscarTareas.toLowerCase();
    return tareaText.includes(tareaBuscar);
  });

  const completarTarea = (text) => {
    const nuevasTareas = [...tareas];
    const indexTarea = nuevasTareas.findIndex(tarea => tarea.text === text);
    nuevasTareas[indexTarea].estado = true;
    guardarItems(nuevasTareas)
  }

  const eliminarTarea = (text) => {
    const nuevasTareas = [...tareas];
    const indexTarea = nuevasTareas.findIndex(tarea => tarea.text === text);
    nuevasTareas.splice(indexTarea, 1);
    alert('Has Eliminado una Tarea de la Lista')
    guardarItems(nuevasTareas)
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen gap-6 bg-blue-50">
        <header className="flex flex-col items-center justify-center w-full">
          <ContadorTareas completas={tareasCompletas} totales={tareasTotales} />
          <InputTareas buscarTareas={
            buscarTareas} setBuscarTareas={setBuscarTareas} />
        </header>

        <main className="flex flex-col items-center justify-center w-full">
          <ListaTareas>
            {filtrarTareas.map((tarea) => (
              <ItemTarea
                key={tarea.text}
                text={tarea.text}
                estado={tarea.estado}
                onEstado={() => completarTarea(tarea.text)}
                onEliminar={() => eliminarTarea(tarea.text)} />
            ))}
          </ListaTareas>
        </main>
        <section className="flex flex-col items-center justify-center w-full mb-20 space-y-6 text-center">
          <InputTareas />
          <BotonCrearTarea />
        </section>

      </div>

    </>
  );
}

export default App;
