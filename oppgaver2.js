/*
    Hei.
    Dette er et oppgave sett i MM-912.
    Meningen er å trene på et fåtall ting av gangen. 
    Du gjør dette ved å skrive inn ditt svar etter at en oppgave er gitt (se på eksempelet)

    IKKE endre på kode som er gitt, med mindre oppgaven spesefikt sier at du skal det
*/


//    Oppgave: Eksempel
 //   Skriv koden for å skrive ut alle navnene i listen, et navn per linje

console.log("Oppgave: Eksempel");

const people = ["Tony","Christian","Håkon"]

for(let index = 0; index < people.length; index++){
    let person = people[index];
    console.log(person);
}

/*
    Oppgave: A
    Skriv kode som skriver ut settningen "Debuging er som å være en dektektiv i et krim drama hvor du også er morderen" 
    100 ganger. 
    Husk vi bruker console.log() til å skrive ting ut.
*/

//Svar på oppgave A;

for(let index = 0; index < 100; index++) { 
    console.log ("Debugging er som å være en dektektiv i et krim drama hvor du også er morderen ");

}

// const melding = "Debugging...."
// console.log(melding)
// mellomrom etter "morderen n/"
/*
    Oppgave: B
    Følgende kode er feil, kan du fikse feilene?
    Denne er ikke helt enkel, det er syntax feil her og logiske feil.
    Prøv å tenke på hva vi prøver å oppnå.
*/
/*
console.log("Oppgave: B");

const max = 99;
for (let index = 0; index < max; index--); {
  console.log(index + " flasker med brus i kassa");
  console.log(index + " flasker med brus i kassa");

  console.log(
    "Ta en ut, drikk den opp." + (index - 1) + " flasker med brus i kassa"
  );
  console.log("");
}
console.log("Ingen flere flasker med brus i kassa");

//Svar på oppgave B: Retting 

console.log ("Oppgave: B");
*/


for (let index = 100; index > 0; index--); {
  console.log(index + " flasker med brus i kassa");
  console.log(index + "flasker med brus i kassen");

  console.log("Ta en ut, drikk den opp." + (index - 1) + " flasker med brus i kassa");

}

console.log("Ingen flere flasker med brus i kassen ");

/*
    Oppgave: C
    Deklarere en variabel for tyngdekraft og en variabel for pi og en variabel for antall personer i et rom. 
*/

let tyngdekraft = x; 
const PI = 3.14; 
let antallPersonerIRommet = 24;

// let tyngdekraft = 9.81; I fysikk så kalles variablen G
// const PI = 3.14; 
// let antallPersonerIRommet = 11;

/*
    Oppgave: D
    Lag en funksjon som legger sammen to tall, funksjonen skal hete add
*/

// lag funksjonen din her. 

function add(tall1,tall2){
 let sum = tall1 + tall2;
    return tall1 + tall2;
}

//Return = gir tilbake etter en funksjon 


// Et annet eksempel 
//let add = ( a, b) => a + b;
//let num1 = 17;
//let num2 = 7;
//let sum = add (num1,num2);
//console.log("17 + 7 = " + add(17,7));


console.log("3 + 6 = " + add(3,6));
console.log("5673 + 234 = " + add(5673,234));

/*
    Oppgave: E
    Bruk variabelen people fra eksempelet og skriv navna ut i reversert rekke følge (bruk en løkke)
    NB du skal ikke endre på people, bare bruke det som den inneholder.
*/

for (let index = people.lenght-1 ; index >= 0 ; index--) {
    const person = people[index];
    console.log(person); 
}



/*
    Oppgave: F
    Deklarere en variabel for en liste med telefon nummer. Listen din skal ha minst 3 nummer. 
*/

const phoneNumbers = [113,112,110,911];
let telefonNummer = [113,112,110,911];

/*
    Oppgave: G
    Skriv ut bare det siste telefon numeret i listen din. 
*/
const lastNumber = phoneNumbers.length-1 
console.log(phoneNumbers[lastNumber]);

console.log(phoneNumbers[phoneNumbers.length-1]);
/*
    Oppgave: H
    Skriv ut kunn etternavnene for personene i listen, bruk en løkke.
*/

let personer = [["Christian", "Simonsen"], ["Tony", "Bergholtz"]]
