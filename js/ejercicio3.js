let listaProductos = [
   { id: 1, nombre: "Teclado", categoria: "Accesorios", precio: 85000, stock: 15 },
   { id: 2, nombre: "Mouse", categoria: "Accesorios", precio: 45000, stock: 20 },
   { id: 3, nombre: "Monitor", categoria: "Tecnología", precio: 650000, stock: 4 }
];

let totalProductos = listaProductos.length;
document.getElementById("totalProductos").innerText = totalProductos;
let valorInventario = 0;
for (let i = 0; i < listaProductos.length; i++) {
   valorInventario += listaProductos[i].precio * listaProductos[i].stock;
}
document.getElementById("valorInventario").innerText = valorInventario.toLocaleString('es-CO');
let productoCaro = listaProductos[0].nombre;
let precioMayor = listaProductos[0].precio;
for (let i = 1; i < listaProductos.length; i++) {
   if (listaProductos[i].precio > precioMayor) {
       productoCaro = listaProductos[i].nombre;
       precioMayor = listaProductos[i].precio;
   }
}
document.getElementById("productoCostoso").innerText =
   `${productoCaro} - ${precioMayor.toLocaleString('es-CO')} `;
let productoPocoStock = "";
for (let i = 1; i < listaProductos.length; i++) {
   if (listaProductos[i].stock < 10) {
   productoPocoStock = listaProductos[i];
   }
}
document.getElementById("pocoStock").innerText =
   `${productoPocoStock.nombre} - ${productoPocoStock.stock} unidades`;
let tablaProductos = document.getElementById("tablaProductos");
listaProductos.forEach(producto => {
   const fila = tablaProductos.insertRow();
   [producto.id, producto.nombre, producto.categoria, producto.precio.toLocaleString('es-CO'), producto.stock]
       .forEach(valor => fila.insertCell().textContent = valor);
});

function agregarProducto() {
   event.preventDefault();
   let id = document.getElementById("idProducto").value;
   let nombre = document.getElementById("nombre").value;
   let categoria = document.getElementById("categoria").value;
   let precio = parseFloat(document.getElementById("precio").value);
   let stock = parseInt(document.getElementById("stock").value);
   let nuevoProducto = { id, nombre, categoria, precio, stock };
   listaProductos.push(nuevoProducto);
   actualizarTabla();
}

function actualizarTabla() {
   let tablaProductos = document.getElementById("tablaProductos");
   tablaProductos.innerHTML = ""; // Limpiar la tabla antes de actualizar
   listaProductos.forEach(producto => {
       const fila = tablaProductos.insertRow();
       [producto.id, producto.nombre, producto.categoria, producto.precio.toLocaleString('es-CO'), producto.stock]
           .forEach(valor => fila.insertCell().textContent = valor);
   });
}