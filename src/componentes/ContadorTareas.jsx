function ContadorTareas({ totales, completas }) {
    return (
        <>
            <h1 className="text-6xl text-center text-blue-900 font-knewave">
                MetaCumplida🏆
            </h1>
            {totales > 0 && completas === totales ? (
                <p className="text-2xl text-blue-900 font-knewave">
                    ¡Has completado todas tus tareas con éxito! 🎉
                </p>
            ) : (
                <p className="text-2xl text-blue-900 font-knewave">
                    Has Completado <span className="font-semibold">{completas}</span> de{" "}
                    <span className="font-semibold">{totales}</span> Tareas
                </p>
            )}
        </>
    );
}

export { ContadorTareas };
