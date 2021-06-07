import React from "react";

import { Link } from "react-router-dom";

import { UserContext } from "../../../Contexts/UserContext";

import useForm from "../../../Hooks/useForm";

import Input from "../../Form/Input/Input";
import Button from "../../Form/Button/Button";

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
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" {...username} />
        <Input label="Senha" type="password" {...password} />

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        {error && <p>{error}</p>}
      </form>
      <Link to="/login/criar">Criar</Link>
    </section>
  );
};

export default LoginForm;
