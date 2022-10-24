import React, { useState } from "react";
import styled from "styled-components";

export default function AddHabito(props) {
  const [ sun, setSun] = useState(false);
  const [ mon, setMon] = useState(false);
  const [ tue, setTue] = useState(false);
  const [ wed, setWed] = useState(false);
  const [ thu, setThu] = useState(false);
  const [ fri, setFri] = useState(false);
  const [ sat, setSat] = useState(false);
  
  return (
    <>
      <NovoHabito>
        <input type="text" placeholder="nome do hábito"></input>
        <DiaHabito>
        <div><span>S</span></div>
        <div><span>M</span></div>
        <div><span>T</span></div>
        <div><span>W</span></div>
        <div><span>T</span></div>
        <div><span>F</span></div>
        <div><span>S</span></div>
        </DiaHabito>
      </NovoHabito>

    </>
  );
}

const NovoHabito = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 340px;
  height: 180px;
  background-color: white;
  margin: 20px auto;

  input {
    box-sizing: border-box;
    width: 300px;
    height: 45px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    margin: 18px auto 0 auto;
    font-size: 20px;
    color: #000000;
  }

  input::placeholder {
    margin: 6px auto 0 auto;
    font-size: 20px;
    color: #d4d4d4;
  }


`;

const DiaHabito = styled.div`
  display: flex;
  width: 240px;
  margin-left: 18px;
  
  div{
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d4d4d4;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  background-color: white;
  border: 1px solid #d4d4d4;
    border-radius: 5px;
  margin: 8px 2px 0 2px;
  }
`;