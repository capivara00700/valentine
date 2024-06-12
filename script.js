let card = document.getElementById("card");
let altura = 0
let largura = 0

document.querySelector("#yes").addEventListener("click", function () {
  let question = document.getElementById("question");
  let message = document.getElementById("answer");

  card.style.backgroundImage =
    "url('https://img1.picmix.com/output/stamp/normal/5/1/0/1/1171015_f458c.gif')";
  question.style.display = "none";
  message.style.display = "flex";
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