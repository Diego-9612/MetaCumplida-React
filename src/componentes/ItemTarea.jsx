function ItemTarea(props) {
    return (
        <>
            <li className="flex items-center justify-between gap-10 px-4 py-2 m-2 text-lg text-center text-blue-900 rounded-lg bg-slate-50 font-knewave ">
                <span className={`px-3 py-1 text-lg font-bold bg-blue-200 rounded-full hover:text-white hover:bg-green-500 ${props.estado ? "bg-green-300 text-white hover:bg-green-300" : ""}`}>V</span>

                <p className={`${props.estado ? "line-through" : ""}`}>{props.text}</p>
                <span className="px-3 py-1 m-2 text-lg font-bold bg-blue-200 rounded-full hover:text-white hover:bg-red-500">X</span>
            </li>
        </>
    );
}

export { ItemTarea };