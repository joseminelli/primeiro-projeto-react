import React, { useState } from "react";

function Modal(props) {
  const [modalVisible, setModalVisible] = useState(false);

  const abrirModal = () => {
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <div className="ButtonDiv">
        <button className="Button" onClick={abrirModal}>
          Fazer comentário
        </button>
      </div>

      {modalVisible && (
        <div id="modal" className="modal">
          <div className="modal-content">
            <div id="colseDiv"> 
            <span className="close" onClick={fecharModal}>
              &times;
            </span>
            </div>
            <p>Url da imagem</p>
            <input type="text" id="url" />
            <p>Nome do autor</p>
            <input type="text" id="nome" />
            <p>Comentário</p>
            <input type="text" id="comentario" />
            <button className="button" id="enviar">
              Enviar
            </button>
          </div>

          <div className="overlay"></div>
        </div>
      )}
    </div>
  );
}

export default Modal;
