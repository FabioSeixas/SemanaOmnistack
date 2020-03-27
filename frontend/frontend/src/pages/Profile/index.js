import React, { useState, useEffect } from "react";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import logoImg from "../../assets/logo.svg";

import api from "../../services/api";

import "./style.css";


export default function Profile () {

  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  // useEffect leva dois argumentos:
  //  1) O que será executado (função)
  //  2) Quando será executado (array). Toda vez que um elemento do array mudar,
  // a função definida em 1 será executada novamente. Um array vazio fará com
  // que a função em 1 seja executada apenas uma vez.   
  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setIncidents(response.data)
    })
  }, // Fim do primeiro argumento.
            [ongId]);

  async function deleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));

    } catch(err) {
      alert("Erro ao deletar o Caso.")
    }

  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return(
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero"/>
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button
          onClick={() => handleLogout()} 
          type="button">
          <FiPower size={18} color="#e02041"/>
        </button>
      </header>

      <h1>Casos Cadastrados</h1>

      <ul>

        {incidents.map(incident => (    
          <li key={incident.id}>

            <strong>Caso</strong>
            <p>{incident.title}</p>

            <strong>Descrição</strong>
            <p>{incident.description}</p>

            <strong>Valor</strong>
            <p>{Intl.NumberFormat('pt-br',
                                  {style: "currency", 
                                  currency: "BRL"})
                                  .format(incident.value)}</p>
            
            <button onClick={() => deleteIncident(incident.id)} 
                    type="button">
              <FiTrash2 size={20} color="#a8a8b3"/>
            </button>
          </li>
          ))}        
      </ul>
    </div>
  
  );
}

// No React, quando fazemos uma interação, o primeiro
// item que vem na função deve vir com uma propriedade "key"
// para ajudar o React a saber qual item é qual quando for 
// necessário deletar, modificar ou trocar de posição um item.
// No caso aqui usamos o "incident.id", porque é um valor único por
// incident.


// ATENÇÃO: No último item da interação (button), no atributo "onClick" foi
// passada uma arrow function, uma função. Se ao contrário, passassemos a
// própria função "deleteIncident(incident.id)", a mesma seria executada no
// momento da interação, apagando os incidents imediatamente na renderização.
// Portanto, a forma como está é a forma correta.