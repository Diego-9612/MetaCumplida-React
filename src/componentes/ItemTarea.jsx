import { BiCheck } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

function ItemTarea(props) {
    return (
        <>
            <li className="flex items-center justify-between gap-10 px-4 py-2 m-2 text-lg text-center text-blue-900 rounded-lg bg-slate-50 font-knewave ">
                <span onClick={props.onEstado} className={`p-2 flex items-center text-lg font-bold text-center  bg-blue-200 rounded-full hover:text-white hover:bg-green-500 ${props.estado ? "bg-green-300 text-white hover:bg-green-300" : ""}`}>
                    <BiCheck className="text-2xl" strokeWidth={1} />
                </span>
                <p className={`${props.estado ? "line-through" : ""}`}>{props.text}</p>
                <span onClick={props.onEliminar} className="flex items-center p-2 m-2 text-lg font-bold bg-blue-200 rounded-full hover:text-white hover:bg-red-500">
                    <IoClose className="text-2xl" strokeWidth={1} />
                </span>
            </li>
        </>
    );
}

export { ItemTarea };