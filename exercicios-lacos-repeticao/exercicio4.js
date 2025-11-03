//Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, construa um algoritmo que consiga
//  pesquisar dados no vetor, onde o usuário irá digitar um número e o programa deve exibir na tela a posição deste
//  número no vetor.
//  Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela. 


import readline from 'readline-sync';


//cria o vetor 
const numeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];


//defini o índice
let i;

//número digitado vai ser o que o usuário digitar
let numeroDigitado = readline.questionInt("Digite o número que você deseja encontrar: ")
let encontrado = false;


for (let i = 0; i < 10; i++) { //o laço começa em 0 e vai até o 9, número de índice do vetor
    if (numeros[i] === numeroDigitado) { //se um dos números do índice for extritamente igual ao digitado
        console.log(`O número digitado está na posição ${i}`); //imprime isso
        encontrado = true; //encontrado vira verdadeiro
        break; //para por aqui
    }
}

if (!encontrado) { //se não for encontrado, mostra que não foi encontrado
    console.log("O número digitado não foi encontrado!")
}