// jQuery - quadratini - main.js
//Creare una griglia formata da 8x8 quadratini tutti bianchi
//15 di questi quadratini(scelti a caso all'inizio) se
//cliccati diventeranno rossi, gli altri diventeranno verdi.
//Extra: Sopra alla griglia deve esserci un contatore che conta
//quanti rossi e quanti verdi sono stati scoperti

console.log('Hi from main.js');

//64 quadratini generati da JS
for (var i = 0; i < 64; i++) {
  document.getElementsByClassName('quadratini')[0].innerHTML += '<div class="quadratino"></div>'
}

//generiamo randomicamente le 16 posizioni dei quadratini rossi
var posizioniRossi = [];

while (posizioniRossi.length < 16) {

  var numeroRandom = generaNumeroCasualeTra(0, 63);
  if (!posizioniRossi.includes(numeroRandom)) {
    posizioniRossi.push(numeroRandom);
  }
}

console.log(posizioniRossi);

//Ascoltando il click su ogni quadratino
//se il 'background-color' è 'white'
//se l'array di posizioniRossi include l'indice restituito
//dal quadratino toccato
//modifichiamo il background in red e aumentiamo il relativo
//contatore altrimenti lo facciamo per la controparte verde
var tuttiIQuadratini = $('.quadratino');
var contatoreVerdi = $('.contatore.verdi h1');
var contatoreRossi = $('.contatore.rossi h1');
var verdiScoperti = 0;
var rossiScoperti = 0;

tuttiIQuadratini.click(function() {

  var quadratinoCliccato = $(this);

  if (quadratinoCliccato.css('background-color') == 'rgb(255, 255, 255)') {
    if (posizioniRossi.includes(quadratinoCliccato.index())) {
      quadratinoCliccato.css('background', 'red');
      rossiScoperti++;
      contatoreRossi.text(rossiScoperti);
    } else {
      quadratinoCliccato.css('background', 'green');
      verdiScoperti++;
      contatoreVerdi.text(verdiScoperti);
    }
  }
});

//FUNZIONI
function generaNumeroCasualeTra(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
