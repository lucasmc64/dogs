import React from "react";

import { Link } from "react-router-dom";

import { UserContext } from "../../../Contexts/UserContext";

import useForm from "../../../Hooks/useForm";

import Input from "../../Form/Input/Input";
import Button from "../../Form/Button/Button";
import Error from "../../Helper/Error";

import styles from "./LoginForm.module.css";
import stylesButton from "../../Form/Button/Button.module.css";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" {...username} />
        <Input label="Senha" type="password" {...password} />

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        <Error error={error} />
      </form>

      <Link to="/login/perdeu" className={styles.perdeu}>
        Perdeu a senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>

        <Link to="/login/criar" className={stylesButton.button}>
          Criar
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
