const readLineSync= require("readline-sync");

let arr1= [2, "Eric", "Jarra"];
let e = "Jarra";

function buscar(arr1, e){

    if(arr1.indexOf(e)){
        
        console.log("Elemento encontrado en la posicion "+ arr1.indexOf(e))
    }else{
        console.log("Elemento no encontrado")
    }
}
buscar(arr1, e)

//---------------------------------
let arr2= ["Leche", "Café", "Chocolate"];
let l = "Café";

function buscar(arr2, l){

    if(arr2.indexOf(l)){
        
        console.log("Elemento encontrado en la posicion "+ arr2.indexOf(l))
    }else{
        console.log("Elemento no encontrado")
    }
}
buscar(arr2, l)