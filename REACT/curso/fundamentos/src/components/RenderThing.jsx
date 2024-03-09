/*
    podemos executar arquivos jsx fora do return
*/
const RenderThing = () => {
    const rederizacaologica = (x) => {
        if (x == 1) {
            return <h1>aii papai!</h1>
        } else {
            return <h1>eita maria!</h1>
        }
    }
    return (
        <div>
            {rederizacaologica(2)}
        </div>
    )
}

export default RenderThing