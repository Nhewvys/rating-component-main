const mainContainer = document.querySelector(".rating");
const thankYou = document.querySelector(".thank-you");
const btn = document.getElementById('submit');
const rate = document.getElementById('rate');
const voto = document.querySelector(".voto");
const btns = document.querySelectorAll('.btn');

//--------verifica a visibilidade do card--------
btn.addEventListener("click", () => {
    thankYou.classList.toggle("hidden");
    mainContainer.classList.toggle("hidden");
});
  
rate.addEventListener("click", () => {
    thankYou.classList.toggle("hidden");
    mainContainer.classList.toggle("hidden");
});

//----------botão clicado-------
btns.forEach(function(btn) {
    voto.innerHTML = 5;                 //define valor padrão
    btns[4].classList.add("check");

    btn.addEventListener('click', function() {
      // Remover a classe 'check' de todos os botões
      btns.forEach(function(btn) {
        btn.classList.remove("check");
      });
  
      // Adicionar a classe 'check' apenas ao botão atualmente clicado
      this.classList.add("check");
  
      // Atualizar o conteúdo do elemento 'voto' com o texto do botão atualmente clicado
      voto.innerHTML = this.innerHTML;
    });
});