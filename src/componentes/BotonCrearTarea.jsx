function BotonCrearTarea() {
    return (
        <>
            <button onClick={(Event) => {
                alert('Diste click al boton');
                console.log(Event);
                console.log(Event.target)
            } } className="w-1/6 px-6 py-3 text-sm text-white duration-200 bg-blue-900 rounded-lg shadow-sm shadow-blue-900 font-knewave hover:bg-blue-200 hover:border-blue-200 hover:text-blue-900 ">Crear Tarea</button>
        </>
    );
}

export { BotonCrearTarea };