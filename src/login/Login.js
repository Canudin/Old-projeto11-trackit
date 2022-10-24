import styled from "styled-components";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import imgLogo from "../assets/TrackIt.png";

export default function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const { token, setToken } = useContext(AuthContext);
  const { image, setImage } = useContext(AuthContext);

  function handleForm(event) {
    event.preventDefault();
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  }

  function postLogin() {
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      login
    );
    promise.then((answer) => {
      setToken(answer.data.token);
      setImage(answer.data.image);
      navigate("/habitos");
    });
    promise.catch(() => alert("Login inválido!"));
  }

  return (
    <>
      <Logo>
        <img src={imgLogo} alt="" />
      </Logo>
      <Info>
        <form onSubmit={handleForm}>
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={handleForm}
            value={login.email}
            required
          />
          <input
            type="password"
            placeholder="senha"
            name="password"
            onChange={handleForm}
            value={login.password}
            required
          />
          <LoginButton onClick={postLogin}>Entrar</LoginButton>
        </form>
        <p onClick={() => navigate("/cadastro")}>Não tem uma conta? Cadastre-se!</p>
      </Info>
    </>
  );
}

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 180px;
    height: 180px;
    margin-top: 68px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  form input {
    box-sizing: border-box;
    width: 300px;
    height: 45px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    margin: 6px auto 0 auto;
    font-size: 20px;
    color: #000000;
    padding: 10px;
  }
  form input::placeholder {
    margin: 6px auto 0 auto;
    font-size: 20px;
    color: #d4d4d4;
  }
  p {
    color: #52b6ff;
    text-decoration: underline;
    margin: 25px auto 0 auto;
  }
`;

const LoginButton = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 45px;
  background-color: #52b6ff;
  border: 1px solid #52b6ff;
  border-radius: 5px;
  margin: 6px auto 0 auto;
  font-size: 21px;
  color: white;
`;
