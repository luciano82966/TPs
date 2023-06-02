const data = require('./DataBase');
 const agregar = (id, nombre, desc, categoria, precio)=>{
    let nuevoObjeto = {
        id: id ,
    nombre: nombre,
    descripcion: desc,
    categoria: categoria,
    precio: precio,
    };
    data.push(nuevoObj);

    console.log(data)

 }
  agregar(7, "estevia", "produc organico", "Edulcorante", 550)