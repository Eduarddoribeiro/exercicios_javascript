import readline from "readline-sync";

let numeroDigitado;

numeroDigitado = readline.questionInt("Digite um número: ");

if (numeroDigitado > 0 && numeroDigitado%2 ===0) {
    console.log(`O número ${numeroDigitado} é par e positivo!`);
} else if (numeroDigitado >0 && numeroDigitado%2 !==0) {
    console.log(`O número ${numeroDigitado} é ímpar e positivo!`)
} 
 else if (numeroDigitado < 0 && numeroDigitado%2 ==0) {
    console.log(`O número ${numeroDigitado} é par e negativo!`)
} 
 else if (numeroDigitado <0 && numeroDigitado%2 !==0) {
    console.log(`O número ${numeroDigitado} é ímpar e negativo!`)
} else {
    console.log("O número 0 é neutro!")
}