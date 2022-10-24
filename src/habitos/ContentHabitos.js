import { React, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";
import HabitosLista from "./HabitosLista";
import HabitosVazio from "./HabitosVazio";

export default function MeusHabitos() {
  const [vazio, setVazio] = useState(true);
  const { token, setToken } = useContext(AuthContext);
  let userHabitos = "";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      config
    );
    promise.then((answer) => {
      if (answer.data.length !== 0) {
        setVazio(false);
        userHabitos = answer.data;
      }
    });
  });
  return (
    <ContentHabitos>
      {vazio ? <HabitosVazio /> : <HabitosLista value={userHabitos} />} 
    </ContentHabitos>
  );
}

const ContentHabitos = styled.div`
  margin: 28px 20px 110px 20px;

  p {
    font-size: 18px;
    color: #666666;
  }
`;
