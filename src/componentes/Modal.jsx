import React from "react";
import ReactDOM from "react-dom"
function Modal({ children }) {

    return ReactDOM.createPortal(
        <div id="Modal" className="fixed inset-0 top-0 bottom-0 left-0 right-0 flex items-center justify-center text-white bg-black opacity-90">
            {children}
        </div>,
        document.getElementById('modal')
    );
};

export { Modal };