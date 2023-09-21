import React, { useState } from "react";

function formatDate(date) {
  return date.toLocaleDateString();
}

function isImageURLValid(url, callback) {
  const img = new Image();

  img.onload = function () {
    console.log("Imagem carregada com sucesso");
    return true;
  };

  img.onerror = function () {
    console.log("Erro ao carregar a imagem");
    return false
  };

  img.src = url; // Tenta carregar a imagem com a URL fornecida
}

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
            <button className="button" id="enviar" onClick={Save}>
              Enviar
            </button>
          </div>

          <div className="overlay"></div>
        </div>
      )}
    </div>
  );
}

function Save() {
  let url = document.getElementById("url").value;
  let nome = document.getElementById("nome").value;
  let comentario = document.getElementById("comentario").value;

  let data = new Date();

  let comment = {
    id: 0,
    date: formatDate(data),
    url: url,
    nome: nome,
    text: comentario,
  };

 const ehValido = isImageURLValid(url);

  if (ehValido) {
    console.log("URL válida");
    comment.url = url;
  } else {
    console.log("URL inválida");
    comment.url =
      "https://cdn.discordapp.com/attachments/933499827638124575/1154452619272659044/questao.png";
  }

  console.log(comment.url);
  if (localStorage.getItem("comments") === null) {
    localStorage.setItem("comments", JSON.stringify([]));
  }
  if (url !== "" && nome !== "" && comentario !== "") {
    comment.id = JSON.parse(localStorage.getItem("comments")).length + 1;
    let comments = JSON.parse(localStorage.getItem("comments"));
    comments.push(comment);
    localStorage.setItem("comments", JSON.stringify(comments));
    console.log(comments);
  } else {
    alert("Preencha todos os campos!");
  }
}

export default Modal;
