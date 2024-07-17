import React, { useCallback, useEffect, useState } from "react";
import styles from "../auth/Auth.module.css";
import { NavLink } from "react-router-dom";

//hooks
import { useSelector, useDispatch } from "react-redux";

//redux
import { login, reset } from "../../slices/authSlice";

//components
import ErrorMessage from "../../component/ErrorMessage";

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const dispatch = useDispatch()
    const { loading , error} = useSelector((state) => state.auth)

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const user = {
            email: email,
            password: senha,
        }
        
        dispatch(login(user))
    };

    useEffect(() => {
        dispatch(reset())
    }, [dispatch])

    return (
        <div className={styles["form-container"]}>
            <h1>Face Face</h1>
            <p>faça login para ver o que há de novo</p>
            <form onSubmit={handleSubmit}>
                <label>email</label>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <label>senha</label>
                <input
                    type="password" /* Corrigido para type="password" */
                    placeholder="senha"
                    value={senha}
                    onChange={(event) => setSenha(event.target.value)}
                />
                <button type="submit">entrar</button>
            </form>
            <p>
                Não tem uma conta? <span> <NavLink to = "/register">clique aqui</NavLink></span>
            </p>
            {error && <ErrorMessage msg = {error} type = "error"/>}
            {}
        </div>
    );
};

export default Login;
