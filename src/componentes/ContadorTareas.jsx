import React from "react";
import { TareaContext } from "./TareaContext";

function ContadorTareas() {

    const { tareasCompletas, tareasTotales,} = React.useContext(TareaContext);
    return (
        <>
            <h1 className="text-6xl text-center text-blue-900 font-knewave">
                MetaCumplida🏆
            </h1>
            {tareasTotales > 0 && tareasCompletas === tareasTotales ? (
                <p className="text-2xl text-blue-900 font-knewave">
                    ¡Has completado todas tus tareas con éxito! 🎉
                </p>
            ) : (
                <p className="text-2xl text-blue-900 font-knewave">
                    Has Completado <span className="font-semibold">{tareasCompletas}</span> de{" "}
                    <span className="font-semibold">{tareasTotales}</span> Tareas
                </p>
            )}
        </>
    );
}

export { ContadorTareas };
