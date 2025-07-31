import React from "react";
import vovoRosaLogo from "./assets/images/VovóRosaLogoFTransparente_semTelefone.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <img src={vovoRosaLogo} className="logo" alt="Vovó Rosa logo" />
      </div>
      <h1>Estou Aqui</h1>
    </>
  );
}

export default App;
