import readline from 'readline-sync';

const numero1 = readline.questionInt("Digite o primeiro número: ");
const numero2 = readline.questionInt("Digite o segundo número: ");
const numero3 = readline.questionInt("Digite o terceiro número: ");
const numero4 = readline.questionInt("Digite o quarto número: ");

const diferenca = (numero1 * numero2) - (numero3 * numero4);

console.log(`A diferença do produto entre (${numero1} x ${numero2}) e (${numero3} x ${numero4}) é ${diferenca}.`);