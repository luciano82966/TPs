//no lo entendi
const vocales = ["a","A", "e","E", "i","I", "o","O", "u", "U"];
const esVocal = (pLetra) =>{
    if (pLetra.length == 1){
        const isLetra = vocales.find(
            (element) => element === pLetra
        )
        return isLetra === undefined ? "=> No es una vocal" : "=> Es una vocal";
    }else {   
    return "Ingrese un caracter";
    }
};

console.log(esVocal(process.argv[2]));