function calc(){

    let horas = parseFloat(document.getElementById('horas').value)

    let minSalario = 800
    let horaTr = minSalario/2
    let salarioBruto = horas * horaTr
    let imposto = salarioBruto * 0.03
    let salario = salarioBruto - imposto

    document.write(salario)
}