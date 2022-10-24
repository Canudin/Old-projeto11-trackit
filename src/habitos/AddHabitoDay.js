import React, { useState } from "react";
import styled from "styled-components";

export default function AddHabitoDay(props) {
  return (
    <>
      <WeekDay onClick={() => props.setDay(!props.day)}>
        <span>{props.dayName}</span>
      </WeekDay>
    </>
  );
}

const WeekDay = styled.div`
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
`;
