const numeroPositivo = readLine.question ("Ingrese un numero positivo");
miLista = []
if (numeroPositivo<=0) {
    console.log ("numero ingresado incorrecto")
} else {
    for (let i = 0; i < numeroPositivo; i++) {
if (i % 2 !==0) {
miLista.push (i)
}   
}
}
console.log(miLista.join(" , "))
