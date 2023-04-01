const readLineSync = require("readline-sync")

const palabra = readLineSync.question("Escribe una palabra para repetirla 10 veces: ")

for (i=0; i<10; i++){
    console.log(palabra);
}
