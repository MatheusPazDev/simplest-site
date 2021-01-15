import { useState } from "react";

function Home() {
  return (
    <div>
      home
      <div>
        <Contador />
      </div>
    </div>
  );
}

function Contador() {
  const [contador, setContador] = useState(1);

  function addContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <div>{contador}</div>
      <button onClick={addContador}>Adicionar</button>
      <button
        onClick={() => {
          setContador(0);
        }}
      >
        Resetar
      </button>
      <button
        onClick={() => {
          setContador(contador - 1);
        }}
      >
        Subtrair
      </button>
    </div>
  );
}

export default Home;
