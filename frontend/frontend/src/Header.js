import React from 'react';



export default function Header({children}) {   // Desestruturação
  return (
    <header>
      <h1>{children}</h1>
    </header>
  );
}



/*

Em Header, a mesma coisa poderia ser obtida assim: 

export default function Header(props) {
  return (
    <header>
      <h1>{props.children}</h1>    // children é uma prop criada 
    </header>                     // automaticamente e retorna todo
  );                             // conteúdo da tag
}

E lá no App:

function App() {
  return (
    <Header>
      Semana Omnistack
    <Header/>

  );
}



*/