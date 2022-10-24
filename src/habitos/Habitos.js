import React, { useState, useContext } from "react";
import styled from "styled-components";
import ContentHabitos from "./ContentHabitos";
import AuthContext from "../contexts/AuthContext";
import AddHabito from "./AddHabito";

export default function Habitos() {
  const { image, setImage } = useContext(AuthContext);
  const [ clicked, setClicked] = useState(false);
  return (
    <>
      <BackGround>
        <Header>
          <span>TrackIt</span>
          <img src={image} alt="" />
        </Header>
        <Content>
          <ContentHeader>
            <span>Meus Hábitos</span>
            <div onClick={() => setClicked(!clicked)}>+</div>
          </ContentHeader>
          <AddHabito show={clicked}/>
          <ContentHabitos />
        </Content>
        <Footer>
          <div></div>
          <div></div>
        </Footer>
      </BackGround>
    </>
  );
}

const BackGround = styled.div`
  background-color: #126ba5;
`;

const Header = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  span {
    font-family: "Playball", cursive;
    font-size: 39px;
    color: white;
  }
  img {
    height: 50px;
    width: 50px;
    background-color: white;
    border-radius: 50px;
  }
`;

const Content = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
`;

const ContentHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0 18px;

  div {
    width: 40px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #126ba5;
    color: white;
    font-size: 27px;
    border-radius: 5px;
  }
  span {
    color: #126ba5;
    font-size: 23px;
  }
`;

const Footer = styled.div`
  height: 70px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 36px;
  background-color: white;
`;
