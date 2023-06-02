//ej. nro 1
const fs = require("fs");
const productos = require('./DataBase');

function buscarPorID(n) {
    for (var i in productos){
      if(productos[i].id == n){
          return productos[i];
        }
    }
    return "No existe el producto"
}

function buscarPorPrecio(precioMaximo) {
    const productosPorPrecio = []; 
    for (let datos of productos) {
      if (datos.precio < precioMaximo) {
        productosPorPrecio.push(datos);
      }
    }
    return productosPorPrecio;
  }
    
    function buscarPorCategoria(categoria) {
      const productosPorCategoria = []; 
    for (let datos of productos) {
      if (datos.categoria === categoria) {
        productosPorCategoria.push(datos);
      }
    }
    return productosPorCategoria;
  }
  

  // Obtener argumentos de la línea de comandos
const [_, __, accion, parametro] = process.argv;

// Ejecutar la función correcta según el primer argumento
switch (accion) {
  case 'ID':
    console.log(buscarPorID(parametro));
    break;
  case 'Precio':
    console.log(buscarPorPrecio(parametro));
    break;
  case 'Categoria':
    console.log(buscarPorCategoria(parametro));
    break;
  default:
    console.error('Acción desconocida');
    break;
}