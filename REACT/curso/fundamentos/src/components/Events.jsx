const Events = () => {
    const HandleMyEvent = (event) => {
        console.log(event);
        console.log("ativou o evento irmão");
    };

    return (
        <div>
            <div>
                <button onClick = {HandleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("eita carai")}>Clique aqui inline</button>
            </div>
            <div>
                <button onClick={ 
                    () => {
                        console.log("isso aqui n deve ser feito")
                    }
                }
                    >
                    Clique aqui inline
                </button>
            </div>
        </div>
    )
}

export default Events