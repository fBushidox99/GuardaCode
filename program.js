const botao = document.getElementById('meuBotao');

const mensagemDiv = document.getElementById('mensagemDiv');

const mensagem = "Um vencedor é apenas um perdedor que tentou mais uma vez.";

botao.addEventListener('click', function() {
  mensagemDiv.textContent = mensagem;
});