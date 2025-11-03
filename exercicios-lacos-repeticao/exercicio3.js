//Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. 
//Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos. Veja o exemplo abaixo:


import readline from 'readline-sync';

//variaveis para incrementar
let somaNumerosPositivos = 0;
let somaNumerosNegativos = 0;

do { //garante que o bloco seja executado pelo menos uma vez
    let numero = readline.questionInt("Digite um número: ");

    if (numero === 0) {
        break; //se digitar zero, o break interrompe
    }

    if (numero > 0) { //se for maior que zero,
        somaNumerosPositivos += numero;  // siginifica somaNumerosPositivos = somaNumerosPositivos + numero
    } else {
        somaNumerosNegativos += numero;   // siginifica somaNumerosNegativos = somaNumerosPositivos + numero
    }
} while (true); //roda até o break

console.log(`A soma dos número positivos é ${somaNumerosPositivos}.`);
console.log(`A soma dos número negativos é ${somaNumerosNegativos}.`);