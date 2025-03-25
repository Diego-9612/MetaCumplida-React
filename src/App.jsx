import "./App.css";
import { ContadorTareas } from "./componentes/ContadorTareas";
import { InputTareas } from "./componentes/BuscadorTareas";
import { ListaTareas } from "./componentes/ListaTareas";
import { ItemTarea } from "./componentes/ItemTarea";
import { BotonCrearTarea } from "./componentes/BotonCrearTarea";
import { Tareas } from "./data";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen gap-6 bg-blue-50">
        <header className="flex flex-col items-center justify-center w-full">
          <ContadorTareas completas={5} totales={17} />
          <InputTareas />
        </header>

        <main className="flex flex-col items-center justify-center w-full">
          <ListaTareas>
            {Tareas?.map((tarea) => (
              <ItemTarea key={tarea.text} text={tarea.text} estado={tarea.estado} />
            ))}
          </ListaTareas>
        </main>
        <section className="flex flex-col items-center justify-center w-full mb-20 space-y-6 text-center">
        <InputTareas/>
        <BotonCrearTarea />
        </section>
        
      </div>

    </>
  );
}

export default App;
