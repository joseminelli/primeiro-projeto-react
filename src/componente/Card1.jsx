import React, { useState } from "react";

function Card1(props) {
  const { min, max } = props;
  const [aleatorio, setAleatorio] = useState(
    parseInt(Math.random() * (max - min)) + min
  );

  function reroll() {
    const novoAleatorio = parseInt(Math.random() * (max - min)) + min;
    setAleatorio(novoAleatorio);
  }

  return (
    <div className="Card">
      <h1>Valor aleatório</h1>
      <div className="linha"></div>
      <div className="box">
        <p>
          <strong>Valor mínimo:</strong> {min}
        </p>
        <p>
          <strong>Valor máximo:</strong> {max}
        </p>
        <p>
          <strong>Valor gerado:</strong> {aleatorio}
        </p>
      </div>
      <button onClick={reroll} className="button" id="reroll">
        Gerar novamente
      </button>
    </div>
  );
}

export default Card1;
