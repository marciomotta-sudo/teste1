// Vetor com os dados dos produtos
var listaProdutos = [
  { nome: "Teclado Comum", preco: "R$ 70,00" },
  { nome: "Mouse Gamer", preco: "R$ 80,00" },
  { nome: "Headset (fone) USB", preco: "R$ 150,00" },
  { nome: "Mousepad Extra Grande", preco: "R$ 35,00" },
  { nome: "Webcam HD", preco: "R$ 180,00" }
];

// Contador de cliques
let totalCliques = 0;

// Pegando os elementos do DOM
let containerVitrine = document.getElementById("vitrine-produtos");
let textoContador = document.getElementById("texto-contador");
let mensagemStatus = document.getElementById("mensagem-status");

// Renderizar os produtos usando laço for
function carregarVitrine() {
  for (let i = 0; i < listaProdutos.length; i++) {
    let produto = listaProdutos[i];

    // Criando o card do produto
    let card = document.createElement("div");
    card.className = "card-produto";

    // Adicionando o conteudo
    card.innerHTML = "<h3>" + produto.nome + "</h3><p>" + produto.preco + "</p>";

    // EVENTO 1: Passar o mouse por cima
    card.addEventListener("mouseover", function() {
      card.classList.add("destaque");
      mensagemStatus.textContent = "Você está olhando: " + produto.nome;
    });

    // EVENTO 2: Tirar o mouse
    card.addEventListener("mouseout", function() {
      card.classList.remove("destaque");
      mensagemStatus.textContent = "Passe o mouse ou clique em um produto!";
    });

    // EVENTO 3: Clique no card
    card.addEventListener("click", function() {
      totalCliques = totalCliques + 1;
      
      // Atualiza o contador na tela
      textoContador.innerHTML = "Cliques em produtos: <strong>" + totalCliques + "</strong>";
      
      // Mensagem personalizada ao clicar
      mensagemStatus.textContent = "Você clicou e selecionou o item: " + produto.nome + "!";
    });

    // Injeta no DOM
    containerVitrine.appendChild(card);
  }
}

// Executa a funcao quando a pagina carrega
carregarVitrine();