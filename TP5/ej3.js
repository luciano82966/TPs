function generar_caracteres(n, caracter ) {
    let string = ""
    let number = Math.floor(n)
    while(number>0) {
        string = string + caracter
        number--

    }

    if(string.length>0 && (typeof(caracter) === "string")){
        return console.log(string)
    }else{
        return console.log('Parámetros inválidos')
    }
}

generar_caracteres(5,"K")