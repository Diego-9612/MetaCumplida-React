import React from "react";

function useLocalStorage(itemNombre, valorInicial) {

    const [item, setItem] = React.useState(valorInicial);

    const [cargando, setCargando] = React.useState(true);
    const [error, setError] = React.useState(false);


    React.useEffect(() => {

        setTimeout(() => {
            try {
                const localStorageItems = localStorage.getItem(itemNombre);
    
                let jsonItems;
    
                if (!localStorageItems) {
                    localStorage.setItem(itemNombre, JSON.stringify(valorInicial));
                    jsonItems = valorInicial;
                } else {
                    jsonItems = JSON.parse(localStorageItems);
                    setItem(jsonItems)
                }
    
                setCargando(false);
    
            } catch (error) {
                setCargando(true)
                setError(error);
            }
        }, 3000)
    });

    const guardarItems = (nuevoItem) => {
        localStorage.setItem(itemNombre, JSON.stringify(nuevoItem));
        setItem(nuevoItem);
    }

    return {
        item,
        guardarItems,
        cargando,
        error
    }
}

export { useLocalStorage };