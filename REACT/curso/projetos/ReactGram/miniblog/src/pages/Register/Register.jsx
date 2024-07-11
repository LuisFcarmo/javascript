import React from 'react'
import { useState, useEffect } from 'react'
import styles from "../Register/Register.module.css"

//components
import Error from '../../components/Error'
import { useAuthentication } from '../../hooks/useAuthentication'

const Register = () => {
  const [ displayName,  setDisplayName ] = useState("");
  const [ displayemail, setDisplayEmail ] = useState("");
  const [ displaypassword, setDisplayPassword ] = useState("");
  const [ displayconfirmPassword, setDisplayConfirmPassowrd ] = useState("");
  const [ errorMessage, setErrorMessage ] = useState("");
  const { createUser, error, loading } = useAuthentication();


  const validations = () => {
    if (displayconfirmPassword !== displaypassword) {
        setErrorMessage("As senhas não coincidem");
        return false;
    }
    if ( displayName.trim() === "" || displayName == null) {
        setErrorMessage("O campo nome está vazio");
        return false;
    }
    if ( displaypassword.trim() === "" || displaypassword == null) {
        setErrorMessage("O campo senha está vazio");
        return false;
    } 
    if ( displayemail.trim() === "" || displayemail == null) {
        setErrorMessage("O campo email está vazio");
        return false;
    } 
    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const user = {
        displayName: displayName,
        email: displayemail,
        password: displaypassword,
    }

    if (validations()) {
        setErrorMessage("")
        const resp =  await createUser(user);

    } else {
        console.log(errorMessage)
        return;
    }   
  }

  useEffect(() => {
    if(error) {
        setErrorMessage(error);
    }
  }, [error])

  return (
    <div className= {styles.register}>
        {errorMessage && <Error ErrorMessage = {errorMessage}/>}
        <h1>Cadastre-se para postar</h1>
        <p>Crie seus usuarios e compartilhe suas historias</p>
        <form onSubmit = {handleSubmit} className = {styles.FormsCad}>
            <label className = {styles.FormLabel}>
                <span>Nome:</span>
                <input 
                    type="text" 
                    name = "displayName" 
                    required placeholder='Nome do usuario' 
                    className = {styles.FormInput}
                    value = {displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                />
            </label>
            <label className = {styles.FormLabel}>
                <span>Email:</span>
                <input 
                    type="email" 
                    name = "displayEmail" 
                    required placeholder='Seu email'
                    className = {styles.FormInput}
                    value = {displayemail}
                    onChange= {(e) => setDisplayEmail(e.target.value)}
                />
            </label>
            <label className = {styles.FormLabel}>
                <span>Senha:</span>
                <input 
                    type="password" 
                    name = "displaySenha" 
                    required placeholder='Sua senha' 
                    className = {styles.FormInput}
                    value = {displaypassword}
                    onChange = {(e) => setDisplayPassword(e.target.value)}
                />
            </label>
            <label className = {styles.FormLabel}>
                <span>Confirmação da senha:</span>
                <input 
                    type="password" 
                    name = "displayConfirmSenha" 
                    required placeholder='Confirm sua senha' 
                    className = {styles.FormInput}
                    value = {displayconfirmPassword}
                    onChange={(e) => setDisplayConfirmPassowrd(e.target.value)}   
                />
            </label>
            {!loading && <button className= {styles.FormButton}>Cadastre-se</button>}
            {loading  && <button className= {styles.FormButton} disabled>Aguarde...</button>}
        </form>
    </div>
  )
}

export default Register