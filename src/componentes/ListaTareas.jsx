function ListaTareas(props) {
    return (
        <>
            <ul>
                {props.children}
            </ul>
        </>
    );
}

export {ListaTareas};