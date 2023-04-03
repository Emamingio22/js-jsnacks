
/*
In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.
*/


// CHIEDIAMO ALL'UTENTE DI INSERIRE IL NOME//
let nomeInvitato = prompt("Inserisci il tuo nome");
let listaFestaGatsby = ["Massimo" , "Michele" , "Bryan" , "Luca" , "Guglielmo" , "Francesco"];
let valore = 0;



// CERCHIAMO IL NOME NELLA LISTA//
for (let i= 0 ; i < listaFestaGatsby.length; i++) {
    if (listaFestaGatsby[i] == nomeInvitato) {
        valore++;
        console.log("Puoi entrare, benvenuto/a!!!");
     } else if (valore == 0){
        console.log("Mi dispiace! non sei sulla lista degli invitati.");
    }
}


