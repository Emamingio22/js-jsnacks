/*
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

// L'UTENTE INSERISCE I NUMERI //
let numeroUno=parseInt(prompt("Inserisci il primo numero"));
let numeroDue=parseInt(prompt("Inserisci il secondo numero"));


// IL PROGRAMMA STAMPA IL NUMERO MAGGIORE//

if(numeroUno > numeroDue){
    console.log("Il numero maggiore è " + numeroUno);
}else if(numeroDue > numeroUno){
    console.log("Il numero maggiore è " + numeroDue);
}

