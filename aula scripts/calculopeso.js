function calcular(){
    let peso = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)

   // var result = document.getElementById("resultado")
    var resultado = calcImc(peso, altura)
   // result.innerHTML = calcImc(peso,altura)
        

    if(resultado < 20){

        document.write(resultado + "<h1>Você está abaixo do peso!</h1>")

    }else if(resultado >= 20 && resultado < 25){

        document.write(resultado + "<h1>O seu peso é ideal!</h1>")

    }else if(resultado >= 25){

        document.write(resultado + "<h1>Você está acima do peso!</h1>")

    }

}

function calcImc(p,a){
        return p/(a*a)
}
