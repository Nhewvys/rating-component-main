const mainContainer = document.querySelector(".rating");
const thankYou = document.querySelector(".thank-you");
const btn = document.getElementById('submit');
const rate = document.getElementById('rate');
const voto = document.querySelector(".voto");
const btns = document.querySelectorAll('.btn');
let checar = document.getElementById('checar');

btn.addEventListener("click", () => {
    thankYou.classList.toggle("hidden");
    mainContainer.classList.toggle("hidden");
});
  
rate.addEventListener("click", () => {
    thankYou.classList.toggle("hidden");
    mainContainer.classList.toggle("hidden");
});
  
btns.forEach(function(btn) {
    btn.addEventListener('click', function(){
        voto.innerHTML = btn.innerHTML;
    });
});
