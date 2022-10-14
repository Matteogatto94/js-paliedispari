//L’utente sceglie pari o dispari 

const sceltaUtente = prompt('Scegli tra Pari e Dispari')

//inserisce un numero da 1 a 5. 

const sceltaUtenteNumero = Number(prompt('Scegli un numero da 1 a 5'));

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 

const pcNumber = pcRandomNumber(1,5);

function pcRandomNumber(min, max){
    return Math.floor(Math.random()* (max - min))+min;
}

//Sommiamo i due numeri 
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function pariDispari (dato_1, dato_2){
    const sum = dato_1 + dato_2;
        if (( sum % 2 === 0 )){
        return 'pari';
} 
        return 'dispari';
}


console.log('Numero di Matteo '+ sceltaUtenteNumero);
console.log('Numero del PC '+ pcNumber);
 
//Dichiariamo chi ha vinto.

if (pariDispari(pcNumber, sceltaUtenteNumero) === sceltaUtente){
    alert ('Congratulations! You Win!');
}else{
    alert ('PC WIN');
}

