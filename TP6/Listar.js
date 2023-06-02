//ej. nro 2
const data = require("./DataBase");

function listar(categoria) {
  let productosFiltrados = data.filter(function (producto) {
    return producto.categoria === categoria;
  });
  return productosFiltrados;
}

console.log(listar(process.argv[2]));