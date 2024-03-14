import React, { useState } from 'react'
import "./FormExemple.css"

const FormExemple2 = ({user}) => {
    //gerenciamento de dados
    const [name, setName] = useState(user ? user.name: '')
    const [password, SetPassword]= useState(user ? user.password : '')


    {/*
        maneira mais robusta por estar enbutida na função por isso é mais poderosa 
        mas quando queremos apenas pegar o valor a forma inline serve
        const HandleName = (e) => {
        setName(e.target.value);
        }
    */}
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //limpar form
        setName(e.target.value.email)
        SetPassword(e.target.value.password)

        setName('aa')
        SetPassword('aa')
    }

    //controled inputs

    return (
    <>
        <form onSubmit = {handleSubmit}>
            <label>
                <span>E-mail</span>
                <input 
                    type="email" 
                    name = 'email' 
                    placeholder = 'digite seu e-mail'
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    />
            </label>
            <label>
                <span>Senha</span>
                <input 
                    type="password" 
                    name = 'password' 
                    placeholder = 'digite sua senha'
                    value = {password}
                />
            </label>
            <input type = "submit" placeholder = 'enviar'/>'
        </form>    
    </>
  )
}

export default FormExemple2