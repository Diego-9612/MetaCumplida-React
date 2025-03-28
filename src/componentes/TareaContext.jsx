import React from "react";
import { useLocalStorage } from "../App/useLocalStorage";

const TareaContext = React.createContext();

function TareaProvider({ children }) {

    const { item: tareas, guardarItems, cargando, error } = useLocalStorage('TAREAS_V1', []);

    const tareasCompletas = tareas.filter(tarea => !!tarea.estado).length;
    const tareasTotales = tareas.length;

    const [buscarTareas, setBuscarTareas] = React.useState('');

    const [abrirVentana, setAbrirVentana] = React.useState(false);

    const filtrarTareas = tareas.filter((tarea) => {
        const tareaText = tarea.text.toLowerCase();
        const tareaBuscar = buscarTareas.toLowerCase();
        return tareaText.includes(tareaBuscar);
    });

    const agregarTarea = (text) => {

        const nuevasTareas = [...tareas];
        nuevasTareas.push({
            id: crypto.randomUUID(),
            text,
            estado: false
        });
        guardarItems(nuevasTareas);

    }

    const completarTarea = (id) => {
        const nuevasTareas = [...tareas];
        const indexTarea = nuevasTareas.findIndex(tarea => tarea.id === id);
        nuevasTareas[indexTarea].estado = true;
        guardarItems(nuevasTareas)
    }

    const eliminarTarea = (id) => {
        const nuevasTareas = [...tareas];
        const indexTarea = nuevasTareas.findIndex(tarea => tarea.id === id);
        nuevasTareas.splice(indexTarea, 1);
        alert('Has Eliminado una Tarea de la Lista')
        guardarItems(nuevasTareas)
    }

    return (
        <TareaContext.Provider value={{
            error,
            cargando,
            tareasCompletas,
            tareasTotales,
            buscarTareas,
            setBuscarTareas,
            filtrarTareas,
            completarTarea,
            eliminarTarea, 
            abrirVentana,
            setAbrirVentana,
            agregarTarea
        }}>

            {children}

        </TareaContext.Provider>
    );
}

export { TareaContext, TareaProvider };