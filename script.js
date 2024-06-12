let card = document.getElementById("card");
let altura = 0
let largura = 0

document.querySelector("#yes").addEventListener("click", function () {
  window.location.href = "love.html"
});

function tamanhoJogo(){
  altura = window.innerHeight
  largura = window.innerWidth

  console.log(altura, largura)
}

document.querySelector("#no").addEventListener("mouseover", function () {
  largura = window.innerWidth - 90;
  altura = window.innerHeight - 90;

  this.style.position = "absolute";
  this.style.top = Math.random() * altura + "px";
  this.style.left = Math.random() * largura + "px";
});
