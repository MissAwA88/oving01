/*
    Hei.
    Dette er et oppgave sett i MM-912.
    Meningen er å trene på et fåtall ting av gangen. 
    Du gjør dette ved å skrive inn ditt svar etter at en oppgave er gitt (se på eksempelet)
*/

/*
    Oppgave: Eksempel
    Lag en variabel som skal kunne endres. Variabelen skal representer din alder
*/

let myAge = 42;

/*
    Oppgave: A
    Lag en variabel som representerer ditt fornavn.
*/

let myName = "Anne Hilde "; 

/*
    Oppgave: B
    Lag en variabel for å lagre poeng score i et spill
*/

let score = 100; 
/*
    Oppgave: C
    Øk verdien av variabelen din fra oppgave B med 5 (dvs dersom den var 0 så skal den bli 5)
    NB! Du skal øke verdien, ikke bare sette den til 5 (husk +)
*/

score += 5;

// score = score + 5; 
/*
    Oppgave: D
    Ta variabelen din fra oppgave B og gjør den 10 ganger større. 
*/

score *= 10 

// score = score * 10;

/*
    Oppgave: E
    Lag en variabel for å lagre et telefon nummer (bruk et fiktift nummer)
*/

const housephoneNumber = "38046942";  //nummer med tekst (string ) datatype 

// const telefonNummer = "+47 872838738";
// const phoneNumber = 113; 

/*
    Oppgave: F
    Lag en variabel som representerer hvorvidt du er en student eller ikke.
*/

let newStudentAnne = true;  //Statement, Anne is indeed a student. True or false 

/*
    Oppgave: G
    Skriv koden som skal til for at det skal stå noe alla "Hei spiller xxxx din score er xx"
    Her skal xxxx være hentet fra variabelen i oppgave A og xx fra variabelen i oppgave B
*/

let greetPlayer = "Ayoooo gamer";
let giveScore = "your score is";
console.log(greetPlayer,myName,givescore,score);

console.log ("Ayoooo Player" +myName+"your amazing score is "+score);

/*
    Oppgave: H
    Lag en variabel som skal representere høyest oppnåd score i et spill.
    Set verdien av denne nye variabelen til verdien av variabelen fra oppgave B
*/
let highscore = score; 
console.log ("highscore"); 

// let highscore = 0;
//highscore = score
//