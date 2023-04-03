/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/


// CHIEDIAMO ALL'UTENTE DI INSERIRE I NUMERI //
let dieciNumeri = [];
let numero = 0;
let somma = 0;

// DICIAMO AL PROGRAMMA DI STAMPARE LA SOMMA DEI NUMERI INSERITI //
for(let i = 0 ; i < 10 ; i++){
    numero = parseInt(prompt("inserisci un numero"));
    dieciNumeri.push(numero);
    somma = somma + dieciNumeri[i];
}
alert("numeri inseriti: " + dieciNumeri);
console.log("La somma è dei numeri inseriti è: " + somma);