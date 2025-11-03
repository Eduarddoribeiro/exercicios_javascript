//Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser menor do que o segundo número. Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa. 
//No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5. Veja os exemplos abaixo:


import readline from 'readline-sync';

//criei variáveis para guardar o primeiro e segundo número digitado
let primeiroNumero = readline.questionInt("Digite o primeiro número do intervalo: "); 
let segundoNumero = readline.questionInt("Digite o segundo número do intervalo: ");

if (primeiroNumero >= segundoNumero) { //se o primeiro número for maior ou igual ao segundo
    console.log("Intervalo inválido!"); //exibe isso
} else { //senão
    console.log(`No intervalo entre ${primeiroNumero} e ${segundoNumero}: \n`); //exibe isso

    for (let i = primeiroNumero; i <= segundoNumero; i++) { //laço vai percorrer todos os números
        if (i % 3 === 0 && i % 5 === 0) { //verifica se o número é multiplo de 3 e 5
            console.log(`${i} é múltiplo de 3 e 5.`) //exibe número a número que for multiplo
        }
    }
}
