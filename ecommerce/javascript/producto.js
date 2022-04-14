class Producto { 
    constructor(id,nombre,descripcion,precio,foto){ //creo el objeto producto
        this.id = Number(id);
        this.nombre = nombre.toUpperCase();
        this.descripcion = descripcion.toUpperCase();
        this.precio = Number(precio);
        this.foto = foto;
    }
}

// const productos = [];

// productos.push(new Producto("1","taza",600));
// productos.push(new Producto("2","apoya cuchara",200));
// productos.push(new Producto("3","bowl",400));
// productos.push(new Producto("4","bandeja",800));

//     function buscarId(busc, producto){
//         return busc.find(obj => obj.id === producto.toUpperCase())
//     }