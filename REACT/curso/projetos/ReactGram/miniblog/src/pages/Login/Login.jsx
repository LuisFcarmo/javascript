import React, { useState, useEffect } from 'react';
import styles from '../Login/Login.module.css';
import { useAuthentication } from '../../hooks/useAuthentication';
import Error from '../../components/Error';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { login, error } = useAuthentication();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      email,
      password,
    };

    const resp = await login(user);
  };

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);

  return (
    <div className={styles.login}>
      {errorMessage && <Error ErrorMessage = {errorMessage}/>}  
      <form className={styles.FormsLog} onSubmit={handleSubmit}>    
        <label className={styles.FormLabel}>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className={styles.FormInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className={styles.FormLabel}>
          <span>Senha:</span>
          <input
            type="password"
            name="senha"
            required
            placeholder="Senha"
            className={styles.FormInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className={styles.FormButton}>Logar</button>
      </form>
    </div>
  );
};

export default Login;
