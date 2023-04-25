const sumaArreglo = (arreglo) => {
    let total = 0
    for (i=0; i<arreglo.length; i++) {
        total += arreglo[i];
      }
    return total
}
console.log(sumaArreglo([1,3,5,4,3,1]))