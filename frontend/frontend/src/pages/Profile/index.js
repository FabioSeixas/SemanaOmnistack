import React from "react";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

import "./style.css";


export default function Register () {
  return(
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero"/>
        <span>Bem vinda, ONG XXXXX</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#e02041"/>
        </button>
      </header>

      <h1>Casos Cadastrados</h1>

      <ul>
        <li>
          <strong>CASO 1</strong>
          <p>Caso Teste</p>

          <strong>Descrição:</strong>
          <p>Descrição teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="a8a8b3"/>
          </button>
        </li>
        <li>
          <strong>CASO 1</strong>
          <p>Caso Teste</p>

          <strong>Descrição:</strong>
          <p>Descrição teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="a8a8b3"/>
          </button>
        </li>
        <li>
          <strong>CASO 1</strong>
          <p>Caso Teste</p>

          <strong>Descrição:</strong>
          <p>Descrição teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="a8a8b3"/>
          </button>
        </li>
        <li>
          <strong>CASO 1</strong>
          <p>Caso Teste</p>

          <strong>Descrição:</strong>
          <p>Descrição teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="a8a8b3"/>
          </button>
        </li>
      </ul>



    </div>
  
  );
}

// "style" é uma propriedade do react
// que permite utilizar código nesse
// lugar do HTML. No caso, estamos 
// usando um código CSS
  