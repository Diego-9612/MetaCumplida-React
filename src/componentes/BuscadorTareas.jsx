import React from "react";

function InputTareas({buscarTareas, setBuscarTareas}) {

    return (

        <>
            <input type="text" value={buscarTareas} onChange={(event) => {
                setBuscarTareas(event.target.value);

            }} placeholder="Ingresa la tarea que quieres buscas" className="w-1/3 p-4 border-none rounded-lg shadow-sm shadow-blue-900 placeholder:text-center placeholder:text-blue-900 placeholder:select-none" />
        </>
    );
}

export { InputTareas };