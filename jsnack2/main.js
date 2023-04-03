/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/


// CHIEDO ALL'UTENTE DI INSERIRE LE PAROLE //
let parolaUno = prompt("Inserire la prima stringa");
let parolaDue = prompt("Inserire la seconda stringa");


// CALCOLO LA PAROLA PIU' LUNGA //
if(parolaUno.length > parolaDue.length){
    console.log(parolaUno + " è piu lunga");
}else if(parolaDue.length > parolaUno.length){
    console.log(parolaDue + " è piu lunga");
}else{
    console.log(" Le stringe hanno la stessa lunghezza");
}