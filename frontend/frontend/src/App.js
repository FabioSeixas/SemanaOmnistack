import React, {useState} from 'react';

import Header from "./Header";


// JSX -> JavaScript XML (HTML integrado ao JS)
// Componente -> Função que retorna HTML (Pode ter funcionalidade JS, CSS ...)

function App() {
  let [counter, setCounter] = useState(0);

  //  "useState" permite o uso do conceito de Estado
  //  Quando Componentes precisam armazenar uma informação dentro dele, não se
  // usa variáveis comuns, mas sim um Estado, permitindo atualizar a informação.
  
  //  "useState" retorna um array com dois elementos:
  //  1) Valor da variável (counter)
  //  2) função de atualização do valor (setCounter)

  function increment() {
    setCounter(counter + 1);

  }


  return (
    <div>
      <Header>
        Contador: {counter}
      </Header>
      <button onClick={increment}>Increment</button>
    </div>
  );
}



export default App;
