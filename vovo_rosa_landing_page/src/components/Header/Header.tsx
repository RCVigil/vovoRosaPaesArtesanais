import React from "react";
import "./Header.scss";
import vovoRosaLogo from "../../assets/images/VovóRosaLogoFTransparente_semTelefone.svg";

const Header = () => {
  return (
    <div id="Header">
      <div className="headerLeft">
        <div className="headerLeft_sweetBreads">
          <a href="#sweetBreads">Pães Doces</a>
        </div>
        <div className="headerLeft_cokies">
          <a href="#cokies">Bolachas</a>
        </div>
        <div className="headerLeft_cokies">
          <a href="#naturalFermentation">Pães de Fermentação Natural</a>
        </div>
      </div>
      <div className="headerMeddle">
        <img
          src={vovoRosaLogo}
          alt="Imagem do Logo da Vovó Rosa Pães Artesanais"
          id="imgTopHeader"
          width="150"
          height="150"
        />
      </div>
      <div className="headerRight">
        <a href="#Experiency">Experiências</a>
        <a href="#demanded">Faça seu Pedido</a>
      </div>
    </div>
  );
};

export default Header;
