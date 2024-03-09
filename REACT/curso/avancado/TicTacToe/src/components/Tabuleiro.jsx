import React, { useState } from 'react'
import './Tabuleiro.css'


const tabuleiro = () => {
    const [Simbulo, setSimbulo] = useState("X");
    const [Ganhador, setGanhador] = useState("");

    let [matriz, setContent] = useState([
        ["","",""],
        ["","",""],
        ["","",""]
    ])

    function win_linha() {
        for (let linha = 0; linha < 3; linha++) {
            let cont = 0;
            for (let coluna = 0; coluna < 3; coluna++) {
                if ( matriz[linha][0] !== "" && matriz[linha][0] === matriz[linha][coluna]) {
                    cont++;
                }
            }
            if(cont == 3) {
                setGanhador(matriz[linha][0]);
            }
        }
    }

    function win() {
        win_linha()
        win_coluna()
        //win_diagonal_pr()
        //win_diagonal_sec()
    }

    function marcar (linha,coluna) {
        const novamatriz = [...matriz]
        if(novamatriz[linha][coluna] === "") {
            novamatriz[linha][coluna] = Simbulo;
            if (Simbulo == "X") {
                setSimbulo("O")
            } else {
                setSimbulo("X")
            }
        }
        win()
        setContent(novamatriz)
    }

    return (
    <div>
    <h1>{Ganhador}</h1>
    <table className = 'minha-tabela'> 
            <tbody>
                <tr>
                    <td onClick = {() => marcar(0,0)}>
                        {matriz[0][0]}
                    </td>
                    <td onClick = {() => marcar(0, 1)}>
                        {matriz[0][1]}
                    </td>
                    <td onClick = {() => marcar(0, 2)}>
                        {matriz[0][2]}
                    </td>
                </tr>
                <tr>
                    <td onClick = {() => marcar(1, 0)}>
                        {matriz[1][0]}
                    </td>
                    <td onClick = {() => marcar(1, 1)}>
                        {matriz[1][1]}
                    </td>
                    <td onClick = {() => marcar(1, 2)}>
                        {matriz[1][2]}
                    </td>
                </tr>
                <tr>
                    <td onClick = {() => marcar(2, 0)}>
                        {matriz[2][0]}
                    </td>
                    <td onClick = {() => marcar(2, 1)}>
                        {matriz[2][1]}
                    </td>
                    <td onClick = {() => marcar(2, 2)}>
                        {matriz[2][2]}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default tabuleiro