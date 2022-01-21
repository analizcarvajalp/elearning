
var fecha = new Date("February 15, 2021 12:47:00").getTime();
setInterval(function() {

  var hoy = new Date().getTime();
  var diasRestantes = fecha - hoy;
  var dia = Math.floor(diasRestantes / (1000 * 60 * 60 * 24));
  var horas = Math.floor((diasRestantes % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((diasRestantes % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((diasRestantes % (1000 * 60)) / 1000);
  document.getElementById("horas").innerHTML = `<div class="cuenta-regresiva">${dia} Días - ${horas} Horas - ${minutos} Minutos - ${segundos} Segundos</div>`;
 
}); 