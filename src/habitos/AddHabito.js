import React, { useState } from "react";
import styled from "styled-components";
import AddHabitoDay from "./AddHabitoDay.js";

export default function AddHabito(props) {
  const [ sun, setSun] = useState(false);
  const [ mon, setMon] = useState(false);
  const [ tue, setTue] = useState(false);
  const [ wed, setWed] = useState(false);
  const [ thu, setThu] = useState(false);
  const [ fri, setFri] = useState(false);
  const [ sat, setSat] = useState(false);
  const dayName =["D", "S", "T", "Q", "Q", "S", "S"];
  const week = [sun, mon, tue, wed, thu, fri, sat];
  const setWeek = [setMon, setTue, setWed, setThu, setFri, setSat];
  
  return (
    <>
      <NovoHabito>
        <input type="text" placeholder="nome do hábito"></input>
        <DiaHabito>
        {week.map((day, index) => (
          <AddHabitoDay day={week} setDay={setWeek[index]} dayName={dayName[index]}>
          </AddHabitoDay>
        ))}
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
  `;