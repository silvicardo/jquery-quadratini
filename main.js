// jQuery - quadratini - main.js
//Creare una griglia formata da 8x8 quadratini tutti bianchi
//15 di questi quadratini(scelti a caso all'inizio) se
//cliccati diventeranno rossi, gli altri diventeranno verdi.
//Extra: Sopra alla griglia deve esserci un contatore che conta
//quanti rossi e quanti verdi sono stati scoperti

console.log('Hi from main.js');

//64 quadratini, estrarre le posizioni dei quadratini
var posizioniRossi = [0,1,8,9,12,15,18,20,25,34,59,60,61,62,63];


//codice per modificare attributo colore in base all'oggetto toccato

var tuttiIQuadratini = $('.quadratino');
var contatoreVerdi = $('.contatore.verdi h1');
var contatoreRossi = $('.contatore.rossi h1');
var verdiScoperti = 0;
var rossiScoperti = 0;

tuttiIQuadratini.click(function() {

  var quadratinoCliccato = $(this);

  if (posizioniRossi.includes(quadratinoCliccato.index())) {
    quadratinoCliccato.css('background', 'red');
    rossiScoperti++;
    contatoreRossi.text(rossiScoperti);
  } else {
    quadratinoCliccato.css('background', 'green');
    verdiScoperti++;
    contatoreVerdi.text(verdiScoperti);
  }
});
