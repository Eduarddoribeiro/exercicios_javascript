//Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e mostre na tela o total
//  de pessoas cuja idade seja menor que 21 anos e o total de pessoas cuja idade, seja maior que 50 anos. A leitura dos dados
//  deve ser finalizada ao digitar uma idade negativa.

import readline from 'readline-sync';

//cria variável para guardar as informações necessárias no final
let menorQue21 = 0; 
let maioresQue50 = 0;


while(true) { //Executa a repetição enquanto for true
    let idade = readline.question("Digite uma idade: "); // cria a variável para o usuário digitar

    if(idade < 0) { // se a idade for menor que 0, já para por aqui, com o break
        break;
    }

    if(idade < 21) { //se idade for menor que 21, incrementa na variável
        menorQue21++;;
    } else if (idade > 50) { //senão, incrementa na outra variável 
        maioresQue50++; 
    }
}

console.log(`Total de pessoas menores de 21 anos: ${menorQue21}\n`);
console.log(`Total de pessoas maiores de 50 anos: ${maioresQue50}`);