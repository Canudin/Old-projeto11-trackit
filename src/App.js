import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./cadastro/Cadastro";
import Habitos from "./habitos/Habitos";
import Login from "./login/Login";
import GlobalStyle from "./assets/globalStyle";
import AuthenticationStyle from "./assets/authenticationStyle";
import { useState } from "react";
import AuthContext from "./contexts/AuthContext";

export default function App() {
  const [ token, setToken ] = useState([]);
  const [ image, setImage ] = useState([]);

  return (
    <AuthContext.Provider value={{ token, setToken, image, setImage }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/habitos" element={<Habitos />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
