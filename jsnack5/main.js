/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. Stampa l'array alla fine.
*/


// CHIEDO ALL'UTENTE DI INSERIRE SEI NUMERI //
var array = [];
var i = 0;
while ( i < 6 ) {
  var numero = parseInt(prompt('inserisci un numero'));
  while(isNaN(numero)){
    var numero = parseInt(prompt('inserisci di nuovo un numero'));
  }
  if(numero % 2 != 0){
    array.push(numero);
  }else
    console.log("non ci sono numeri dispari tra quelli inseriti")
  i++;
}
console.log(array);