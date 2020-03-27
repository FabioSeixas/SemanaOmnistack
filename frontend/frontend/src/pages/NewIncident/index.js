import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api.js";

import "./style.css";
import logoImg from "../../assets/logo.svg";


export default function NewIncident () {

  const history = useHistory();

  const ongId = localStorage.getItem("ongId");

  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {

      await api.post('incidents', data, {headers: {Authorization: ongId}});

      history.push("/profile");

    } catch (err) {
      alert("Erro ao cadastrar caso.")
    }
  }


  return(
    <div className="newincident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>
          
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
        
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041"/>
            Voltar para o perfil da ONG
          </Link>
        </section>
          
        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Título do Caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input 
            placeholder="Valor (R$)"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>

        </form>                                             
      </div>

    </div>

  );
}


// Observar que na tag "form", no atributo "onSubmit" não
// foi necessário usar arrow function. Ao que parece, o
// atributo já entende que a função só será chamada quando
// houver o "submit".