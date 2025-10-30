import readline from 'readline-sync';


let salario;
let abono;
let novoSalario;

salario = readline.questionInt("Digite seu salario: ");
abono = readline.questionInt("Digite o abono: ");

novoSalario = salario + abono;

console.log(`Este é o seu novo salário: R$ ${novoSalario.toFixed(2)} .`);
