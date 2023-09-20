import React from "react";

function Card1(props) {
  const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (max - min)) + min;
  return (
    <div className="Card">
      <h1>Valor aleatório</h1>
      <div className="linha"></div>
      <div className="content">
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
    </div>
  );
}
export default Card1;
