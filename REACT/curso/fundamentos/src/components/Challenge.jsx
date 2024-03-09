const Challenge = () => {
    const numero1 = 1;
    const numero2 = 10;
    var result = 0;
    const render1 = () => {
        return <h1>olha como sou experto eu tenho o valor {numero1} </h1>
    }
    const render2 = () => {
        return <h1>E tenho o valor {numero2}</h1>
    }
    const soma = () => {
        result = numero1 + numero2;
        console.log(result);
    }

    const divis = () => {
        result = numero1 / numero2;
        console.log(result); 
    }

    const mult = () => {
        result = numero1 * numero2;
        console.log(result);
    }

    const sub = () => {
        result = numero1 - numero2;
        console.log(result);
    }

    return (
        <div>
            {render1()}
            {render2()}
            <p>escolha a operação desejada</p>
            <button onClick ={soma}>soma</button>
            <button onClick ={sub}>sub</button>
            <button onClick ={divis}>div</button>
            <button onClick ={mult}>mult</button>
        </div>

    )
}

export default Challenge