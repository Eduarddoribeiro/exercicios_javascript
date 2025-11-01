import readline from "readline-sync";

let nomeDoador = readline.question("Digite o nome do doador: ");

let idadeDoador = readline.questionInt("Digite a idade do doador: ");

let primeiraDoacao = readline.question("É sua primeira doação de sangue? s/n ");


let jaDoouAntes = false;

if(primeiraDoacao.toLowerCase() === 'n') {
    jaDoouAntes = true;
}

let apto = false;

if(idadeDoador>=18 && idadeDoador <= 59) {
    apto = true; 
} else if (idadeDoador >= 60 && idadeDoador <= 69) {
    if(jaDoouAntes) {
        apto=true;
    }
}

if(apto) {
    console.log(`${nomeDoador} está apto para doar sangue!`)
} else {
    console.log(`${nomeDoador} não está apto para doar sangue!`)
};