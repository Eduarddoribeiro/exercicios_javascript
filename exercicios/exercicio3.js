import readline from 'readline-sync';

const salarioBruto = readline.questionInt("Digite o valor do salário bruto: ");
const adicionalNoturno = readline.questionInt("Digite o valor do adicional noturno: ");
const horasExtras = readline.questionInt("Digite o valor das Horas extras: ");
const descontos = readline.questionInt("Digite o valor dos descontos:" );

const salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log(`O seu salário líquido é R$ ${salarioLiquido.toFixed(2)}.`);