function ContadorTareas({ totales, completas }) {
    return (
        <>
            <h1 className="font-knewave text-6xl text-blue-900 text-center">
                MetaCumplida🏆
            </h1>
            <p className="font-knewave text-2xl text-blue-900">
                {" "}
                Has Completado {completas} de {totales} Tareas{" "}
            </p>
        </>
    );
}

export { ContadorTareas };
