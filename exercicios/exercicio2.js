import readline from 'readline-sync';

const nome = readline.question("Digite seu nome: ");
const nota1 = readline.questionInt("Digite sua primeira nota: ");
const nota2 = readline.questionInt("Digite sua segunda nota: ");
const nota3 = readline.questionInt("Digite sua terceira nota: ");
const nota4 = readline.questionInt("Digite sua quarta nota: ");

const mediaFinal = (nota1 + nota2 + nota3 + nota4)/4;

console.log(`${nome}, sua média final é: ${mediaFinal.toFixed(1)}.`);