let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nomeDoAmigo = input.value.trim();

  if (nomeDoAmigo === "") {
    alert("Insira um nome válido.");
    return;
  }


  amigos.push(nomeDoAmigo);
  input.value = "";
  atualizarLista();
  return;
}


function atualizarLista() {

  const listaAmigosElement = document.getElementById("listaAmigos");
  listaAmigosElement.innerHTML = "";

  amigos.forEach(amigo => {
    const listItem = document.createElement("li");
    listItem.textContent = amigo;
    listaAmigosElement.appendChild(listItem);

  });
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

  atualizarLista();
});
