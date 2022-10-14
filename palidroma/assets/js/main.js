//Palidroma
//Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const parola = prompt('Inserisci una parola')

const parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    console.log(parola);
    console.log('La parola da lei inserita è palidroma');
  } else {
    console.log(parola);
    console.log('La parola da lei inserita non è palidroma');
  }
  
function invertiParola(str){
  const strInversa = str.split('').reverse().join('');  
  return strInversa;
}