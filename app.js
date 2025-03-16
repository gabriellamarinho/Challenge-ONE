
let amigos = [];

function adicionarAmigo() {

  const inputAmigo = document.getElementById("amigo");
  const nomeDoAmigo = inputAmigo.value.trim().tittle(); 

  if (nomeDoAmigo === "") {
    alert("Por favor, insira um nome.");
    return; 
  }

    amigos.push(nomeDoAmigo);
    inputAmigo.value = "";
    atualizarListaDeAmigos();
}

function atualizarListaDeAmigos() {

  const listaAmigosElement = document.getElementById("listaAmigos");

  listaAmigosElement.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];
    const listItem = document.createElement("li");
    listItem.textContent = amigo;
    listaAmigosElement.appendChild(listItem);
  }
}

function sortearAmigo() {
  
  if (amigos.length === 0) {
    alert("Adicione amigos à lista antes de sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = `<li class="result-item">O amigo secreto sorteado foi: <strong>${amigoSorteado}</strong></li>`;

}

document.addEventListener('DOMContentLoaded', function() {

  const botaoAdicionar = document.querySelector(".button-add");

  if (botaoAdicionar) {
    botaoAdicionar.addEventListener('click', adicionarAmigo);
  }

  const botaoSortear = document.querySelector(".button-draw");
  
  if (botaoSortear) {
    botaoSortear.addEventListener('click', sortearAmigo);
  }

  atualizarListaDeAmigos();

});