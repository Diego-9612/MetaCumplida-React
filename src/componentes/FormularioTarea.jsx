import { TareaContext } from "../Componentes/TareaContext";
import React from "react";

function FormularioTarea() {


    const {agregarTarea, setAbrirVentana} = React.useContext(TareaContext);
    const [nuevaTareaValor, setNuevaTareaValor] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        agregarTarea(nuevaTareaValor)
        setAbrirVentana(false)
    }

    const onCancelar = () => {
        setAbrirVentana(false)
    }

    const onChange = (event) => {
        setNuevaTareaValor(event.target.value)
    }




    return (
        <form onSubmit={onSubmit} className="z-10 flex flex-col items-center justify-center w-1/3 h-auto p-10 px-20 space-y-4 text-center text-blue-900 rounded-lg shadow-lg bg-blue-50">
            <label htmlFor="tarea" className="p-2 m-5 text-2xl font-bold font-knewave">Escribe una nueva tarea</label>
            <textarea name="agregar tarea" id="tarea" className="w-full py-6 border-2 border-blue-900 rounded-xl placeholder:text-center placeholder:text-blue-900 placeholder:font-knewave" placeholder="Ingresa una nueva tarea" value={nuevaTareaValor} onChange={onChange} required></textarea>
            <div className="flex w-full h-auto gap-6 ">
                <button type="button" onClick={onCancelar} className="w-full h-auto p-4 my-5 text-sm duration-300 bg-blue-900 border-blue-900 rounded-lg shadow-sm font-knewave text-blue-50 shadow-blue-900 hover:border-blue-300 hover:bg-blue-300 hover:text-blue-900" id="button-cancel">Cancelar</button>
                <button type="submit" id="button-agregar" className="w-full h-auto p-4 my-5 text-sm duration-300 bg-blue-900 border-blue-900 rounded-lg shadow-sm font-knewave text-blue-50 shadow-blue-900 hover:border-blue-300 hover:bg-blue-300 hover:text-blue-900">Añadir</button>
            </div>
        </form>
    );
}

export { FormularioTarea };