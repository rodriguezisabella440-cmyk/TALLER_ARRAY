let listadoProducto=[];

function agregarProducto(){
    let producto =document.getElementById("producto").value.trim();
    let cantidad =parseInt(document.getElementById("cantidad").value);
    let precio =parseInt(document.getElementById("precio").value);

    //validar campos
    if(producto==="" ||isNaN(cantidad) ||isNaN(precio)){
        alert("por favor llene todos los campos");
        return;
    }
    else{
        //Limpiar formulario
        document.getElementById("formulario").reset();
        listadoProducto.push({
            itemProducto:producto,
            itemCantidad:cantidad,
            itemPrecio:precio,
            itemSubtotal:(cantidad*precio)
        });
        alert("Se ha guardado exitosamente el producto❤️");
    }
    mostrarProductos();

}
function mostrarProductos(){
    let tabla=document.getElementById("tabla");
    tabla.innerText="";
    let total =0;

    for(let i=0; i <listadoProducto.length; i++){
        tabla.innerHTML+= `
        <tr> 
            <td> ${listadoProducto [i].itemProducto} </td>
            <td> ${listadoProducto [i].itemPrecio} </td>
            <td> ${listadoProducto [i].itemCantidad} </td>
            <td> ${listadoProducto [i].itemSubtotal}</td>
        </tr> `;
        total += listadoProducto[i].itemSubtotal;
    }
    document.getElementById("total").innerText = total.toLocaleString();

}