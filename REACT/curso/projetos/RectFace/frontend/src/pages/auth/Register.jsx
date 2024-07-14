import styles from "../auth/Auth.module.css"
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

//redux
import { register, reset } from "../../slices/authSlice";
import { useSelector, useDispatch } from "react-redux";

//components
import ErrorMessage from "../../component/ErrorMessage";


const Register = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  const dispath = useDispatch()

  const { loading, error } = useSelector((state) => state.auth)

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: nome,
      email: email,
      password: senha,
      confirmpassword: confirmSenha,
    }

    dispath(register(user))
  };

  //zerando os states de possiveis erros a todo momento que acorre uma nova requisição
  useEffect(() => {
    dispath(reset())
  }, [dispath])

  return (
    <div className={styles["form-container"]}>
    <h1>Face Face</h1>
    <p>faça login para ver o que há de novo</p>
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="nome"
            value={nome || ""}
            onChange={(event) => setNome(event.target.value)}
        />
        <input
            type="email"
            placeholder="email"
            value={email || ""}
            onChange={(event) => setEmail(event.target.value)}
        />
        <input
            type="password"
            placeholder="senha"
            value={senha || ""}
            onChange={(event) => setSenha(event.target.value)}
        />
        <input
            type="password"
            placeholder="confirmar a senha"
            value={confirmSenha || ""}
            onChange={(event) => setConfirmSenha(event.target.value)}
        />
        {!loading && <button type="submit">Cadastrar-se</button>}
        {loading && <button type="submit" disabled>aguarde</button>}
        {error && <ErrorMessage msg = {error} type = "error"/>}

    </form>
    <p>Já tem tem uma conta? <span><NavLink to = "/login">clique aqui</NavLink></span></p>
</div>
  )
}

export default Register