function iDados(){
    
    let nome = document.getElementById('nome').Value
    let idade = parseInt(document.getElementById('idade').value)

    if(idade > 5 && idade <= 7){
        document.write(idade + "<h1>Infantil A</h1>")

    }else if(idade > 7 && idade <= 10){
        document.write(idade + "<h1>Infantil B</h1>")

    }else if(idade > 11 && idade <= 13){
        document.write(idade + "<h1>Juvenil A</h1>")

    }else if(idade > 14 && idade <= 17){
        document.write(idade + "<h1>Juvenil B</h1>")

    }else if(idade > 17){
        document.write(idade + "<h1>Senior</h1>")

    }


}
