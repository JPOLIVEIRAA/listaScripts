function abono(){
    let nome = document.getElementById('nome').Value
    let salario = parseFloat(document.getElementById('salario').value)

    if(salario < 1000){
        document.write(salario = salario + (salario * 0.15))
    }else if(salario >= 1000 && salario <= 1500){
        document.write(salario += (salario * 0.10))
    }else if(salario > 1500){
        document.write(salario += (salario * 0.05))
    }
}
