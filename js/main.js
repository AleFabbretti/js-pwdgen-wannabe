//chiedere all'utente il suo nome
const firstName = prompt("inserisci il tuo nome");

//chiedere all'utente il suo cognome
const lastName = prompt("inserisci il tuo cognome");

//chiedere all'utente il suo colore preferito
const favouriteColor = prompt("inserisci il tuo colore preferito");

//creo una variabile password che contiene la concatenazione delle tre informazioni acquisite precedentemente con l'aggiunta del numero 76
const password = `${firstName}${lastName}${favouriteColor}76`;

console.log(password);

