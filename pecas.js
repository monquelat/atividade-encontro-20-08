var listadepecas = ["Filtro de Ar", "Rolamento de Roda", "Amortecedor", "Velas", "Cabo de Vela", "Molas"]

if (listadepecas.length <= 10) {
    console.log("É possível cadastrar mais peças");
}
else {
    console.log("Não tem mais espaço nesta lista! Impossível cadastrar.");
}

let peso = 50;

if (peso < 100) {
    console.log("A peça deve pesar no mínimo 100gr.");

}
else {
    console.log("A peça possui peso adequado");
}

let nomepeca = "Disco de freio";

// = Atribuição de valor

// == Verificação se os valores são iguais

// === Verificação se o valor é igual e se o tipo também é igual

if (nomepeca.length > 3) {
    console.log("Nome de peça está adequado para o cadastro.");

}
else if (nomepeca.length == 0) {
    console.log("O nome da peça não pode ser vazio.");

}

else {
    console.log("O nome da peça deve ter mais que três caracteres.");
}

switch (nomepeca.length) {
    case 0:
        console.log("O nome da peça não pode ser vazio")
        break;
    case 1:
    case 2:
    case 3:
        console.log("O nome da peça deve ter mais que três caracteres.")

    default:
        console.log("Nome de peça está adequado para o cadastro!")
        break;
}
