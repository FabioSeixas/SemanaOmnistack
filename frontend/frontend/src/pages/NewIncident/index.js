import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./style.css";

import logoImg from "../../assets/logo.svg";

export default function Logon () {
  return(
    <div className="newincident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>
          
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
        
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041"/>
            Voltar para home
          </Link>
        </section>
          
        <form>
          <input placeholder="Título do Caso"/>
          <textarea placeholder="Descrição"/>
          <input placeholder="Valor (R$)"/>

          <button className="button" type="submit">
            Cadastrar
          </button>

        </form>                                             
      </div>

    </div>

  );
}
