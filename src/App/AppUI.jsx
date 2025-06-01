import React from "react";
import { ContadorTareas } from "../Componentes/ContadorTareas";
import { InputTareas } from "../Componentes/InputTareas";
import { BotonCrearTarea } from "../Componentes/BotonCrearTarea";
import { ListaTareas } from "../Componentes/ListaTareas";
import { TareaContext } from "../Componentes/TareaContext"; 
import { ErrorTareas } from "../Componentes/ErrorTareas";
import { ItemTarea } from "../Componentes/ItemTarea";
import { TareasVacias } from "../Componentes/TareasVacias";
import { CargarTareas } from "../Componentes/CargarTareas";
import { Modal } from "../Componentes/Modal";
import { FormularioTarea } from "../Componentes/FormularioTarea";

function AppUI() {
    const {
        error,
        cargando,
        filtrarTareas,
        completarTarea,
        eliminarTarea,
        abrirVentana,
        setAbrirVentana,
    } = React.useContext(TareaContext);

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full min-h-screen gap-6 bg-blue-50">
                <header className="flex flex-col items-center justify-center w-full">
                    <ContadorTareas />
                    <InputTareas />
                </header>

                <main className="flex items-center justify-center w-full">
                    <ListaTareas>
                        {cargando && <CargarTareas />}
                        {error && <ErrorTareas />}
                        {!cargando && filtrarTareas.length === 0 && <TareasVacias />}
                        {filtrarTareas.map((tarea) => (
                            <ItemTarea
                                key={tarea.id}
                                text={tarea.text}
                                estado={tarea.estado}
                                onEstado={() => completarTarea(tarea.id)}
                                onEliminar={() => eliminarTarea(tarea.id)}
                            />
                        ))}
                    </ListaTareas>
                </main>

                <section className="flex flex-col items-center justify-center w-full mb-20 space-y-6 text-center">
                    <BotonCrearTarea setAbrirVentana={setAbrirVentana} />

                    {abrirVentana && <Modal> <FormularioTarea /></Modal>}
                </section>
            </div>
        </>
    );
}

export { AppUI };
