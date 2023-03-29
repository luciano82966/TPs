const saludar = (nombre) => {
    if (typeof nombre !== "undefined"){
        console.log("¡Hola " + nombre + "!");
    } else {
        console.log("¡Holus :D!")
    }
  }
  
const nombre = process.argv[2];
saludar(nombre);