// script.js
// Nenhuma interação do usuário por enquanto, apenas estrutura básica.

// Futuramente, você pode adicionar funções aqui como controle de carrossel manual.
// Exemplo:
// const track = document.querySelector('.carousel-track');
// let index = 0;
// function moveCarousel() {
//   index = (index + 1) % 3;
//   track.style.transform = `translateX(-${index * 100}%)`;
// }
// setInterval(moveCarousel, 4000);

// Cronômetro desde 27 de abril
const cronometro = document.getElementById("cronometro");
const dataInicio = new Date("2025-05-07T00:00:00");

function atualizarCronometro() {
  const agora = new Date();
  const diferenca = agora - dataInicio;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  cronometro.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s juntos 💖`;
}

setInterval(atualizarCronometro, 1000);
atualizarCronometro();