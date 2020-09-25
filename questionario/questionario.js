var op1 = 0;
var op2 = 0;
var op3 = 0;
var op4 = 0;
var quantidade = 0;
var idade = 0
var totalIdade = 0
var media = 0;
perOp1 = 0;
perOp2 = 0;
perOp3 = 0;
perOp4 = 0;
var soma = 0;

function idade(){

    var num = parseFloat(document.getElementById('idade').value)

    if(idade < 0){
        alert("idade inexistente")
    }else{
        idade += idade
        totalIdade = idade ++
    }
    media = idade/totalIdade

    num.innerHTML = media
}

function escolher() {
    var escolha = parseInt(document.getElementById('op').value)
    switch (ecolha) {

        case 1:
            op1 = op1 + 1
            alert("Você achou o filme ótimo!");
            break;
        case 2:
            op2 = op2 + 1
            alert("Você achou o filme bom!");
            break;
        case 3:
            op3 = op3 + 1
            alert("Você achou o filme regular!");
            break;
        case 4:
            op4 = op4 +1
            alert("Você achou o filme ruin!");
            break;
    }
    soma = op1 + op2 + op3 + op4
    document.getElementById("qt").innerHTML = soma
}

function totalEsc() {

    let lista = document.getElementById('result');

    let ul = "<ul>"

    perOp1 = (op1 / soma) * 100;
    ul = ul + `<li>Ótimo: ${perOp1}%</li>`

    perOp2 = (op2 / soma) * 100;

    ul += `<li>Bom: ${perOp2}%</li>`

    perOp3 = (op3 / soma) * 100;

    ul += `<li>Regular ${perOp3}%</li>`

    perOp4 = (op4 / soma) * 100;

    ul += `<li>Ruin ${perOp4}%</li>`

    ul += "</ul>"

    lista.innerHTML = ul;
}