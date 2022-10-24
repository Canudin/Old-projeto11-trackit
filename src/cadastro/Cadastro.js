import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import imgLogo from "../assets/TrackIt.png";

export default function Cadastro() {
  const navigate =  useNavigate();
  const [cadastro, setCadastro] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });

  function handleForm(event){
    event.preventDefault();
    setCadastro({
      ...cadastro,
      [event.target.name]: event.target.value,
    })
  }

  function postForm(){
    console.log(cadastro);
    const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", cadastro);
    promisse.then(() => navigate("/"));
    promisse.catch(() => alert("Dados inválidos!"));
  }

  return (
    <>
      <Logo>
        <img src={imgLogo} alt="" />
      </Logo>
      <Info>
        <form onSubmit={handleForm}>
          <input type="email" placeholder="email" name="email" onChange={handleForm} value={cadastro.email} required/>
          <input type="password" placeholder="senha" name="password" onChange={handleForm} value={cadastro.password} required/>
          <input type="text" placeholder="nome" name="name" onChange={handleForm} value={cadastro.name} required/>
          <input type="url" placeholder="foto" name="image" onChange={handleForm} value={cadastro.image} required/>
          <CadastroButton type="submit" onClick={postForm}>Cadastrar</CadastroButton>
        </form>
          <p onClick={()=>{navigate("/")}}>Já tem uma conta? Faça login!</p>
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

const CadastroButton = styled.div`
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
