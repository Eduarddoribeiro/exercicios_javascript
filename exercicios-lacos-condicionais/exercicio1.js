import readline from "readline-sync";

let numeroA, numeroB, numeroC;


numeroA = readline.questionInt("Digite o primeiro número: ");
numeroB = readline.questionInt("Digite o segundo número: ");
numeroC = readline.questionInt("Digite o terceiro número: ");

let soma = numeroA + numeroB;

if (soma > numeroC) {
    console.log("A soma de A + B é maior do que C.");
} else if (soma < numeroC) {
    console.log("A soma de A + B é menor do que C.");
} else  {
    console.log("A soma de A + B é igual a C.")
}