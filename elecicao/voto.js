var cand1 = 0;
var cand2 = 0;
var votN = 0;
var votB = 0;
perCand1 = 0;
perCand2 = 0;
perBranco = 0;
perNulo = 0;
var soma = 0;

function votar() {
    var voto = parseInt(document.getElementById('numero').value)
    switch (voto) {

        case 1:
            cand1 = cand1 + 1;
            alert("Você votou no candidato 1");
            break;
        case 2:
            cand2 = cand2 + 1;
            alert("Você votou no candidato 2");
            break;
        case 3:
            votN = votN + 1;
            alert("Você votou Nulo");
            break;
        case 4:
            votB = votB + 1;
            alert("Você votou em Branco");
            break;
    }
    soma = cand1 + cand2 + votB + votN;
}

function totalVotos() {

    let lista = document.getElementById('result');

    let ul = "<ul>"

    perCand1 = (cand1 / soma) * 100;
    ul = ul + `<li>Votos do candidato 1:  ${perCand1}%</li>`

    perCand2 = (cand2 / soma) * 100;

    ul += `<li>Votos do candidato 2: ${perCand2}%</li>`

    perBranco = (votB / soma) * 100;

    ul += `<li>Voto em branco: ${perBranco}%</li>`

    perNulo = (votN / soma) * 100;

    ul += `<li>Votos nulo: ${perNulo}%</li>`

    ul += "</ul>"

    lista.innerHTML = ul;
}