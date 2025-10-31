import readline from "readline-sync";

let cargo, percentualReajuste


let nomeColaborador = readline.question("Digite o nome do colaborador: ");

let codigoCargo = readline.questionInt("Digite o argo (código de 1 a 6):");
let salario = readline.questionFloat("Salário: R$ ");


switch(codigoCargo) {
    case 1:
        cargo = "Gerente";
        percentualReajuste = 0.10;
        break;
    case 2:
        cargo = "Vendedor";
        percentualReajuste = 0.07;
        break;
    case 3:
        cargo = "Supervisor";
        percentualReajuste = 0.09;
        break;
    case 4:
        cargo = "Motorista";
        percentualReajuste = 0.06;
        break;
    case 5:
        cargo = "Estoquista";
        percentualReajuste = 0.05;
        break;
    case 6:
        cargo = "Técnico de TI";
        percentualReajuste = 0.08;
        break;
    default:
        console.log("Código de cargo inválido!");
        cargo = null;
        percentualReajuste = 0;
        break;
}

if(cargo) {
    let novoSalario = salario + (percentualReajuste * salario);
     console.log(`\nNome do colaborador: ${nomeColaborador}`);
    console.log(`Cargo: ${cargo}`);
    console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);

}



