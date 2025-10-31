import readline from "readline-sync";

let nomeProduto, precoProduto;

let codigoProduto = readline.questionInt("Digite o código do produto: ");
let quantidadeProduto = readline.questionInt(
  "Digite a quantidade do produto: "
);

switch (codigoProduto) {
  case 1:
    nomeProduto = "Cachorro Quente";
    precoProduto = 10.0;
    break;
  case 2:
    nomeProduto = "X-Salada";
    precoProduto = 15.0;
    break;
  case 3:
    nomeProduto = "X-Bacon";
    precoProduto = 18.0;
    break;
  case 4:
    nomeProduto = "Bauru";
    precoProduto = 12.0;
    break;
  case 5:
    nomeProduto = "Refrigerante";
    precoProduto = 8.0;
    break;
  case 6:
    nomeProduto = "Suco de laranja";
    precoProduto = 13.0;
    break;
  default:
    console.log("Código inválido!");
    nomeProduto = null;
    precoProduto = 0;
    break;
}

if (nomeProduto !== null) {
  let total = quantidadeProduto * precoProduto;
  console.log(`\nProduto: ${nomeProduto}`);
  console.log(`Valor total: R$ ${total.toFixed(2)}`);
}
