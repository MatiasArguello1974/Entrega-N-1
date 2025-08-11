const MAXPRODUCTOS = 3;
let productos = [];
let continuar = true;

function agregarProducto() {
    if (productos.length >= MAXPRODUCTOS) {
        alert("Máximo de productos permitidos");
        return;
    }
    let nombre = prompt("Ingrese el nombre del producto:");
    if (!nombre) {
        alert("Nombre inválido.");
        return;
    }
    let precio = prompt("Ingrese el precio del producto:");
    precio = parseFloat(precio);
    if (isNaN(precio) || precio <= 0) {
        alert("Precio inválido.");
        return;
    }
    productos.push({ nombre, precio });
    console.log(`Producto agregado: ${nombre} - $${precio}`);
    alert(`Producto "${nombre}" agregado correctamente.`);
}


function mostrarProductos() {
    if (productos.length === 0) {
        alert("No hay productos registrados.");
        return;
    }
    let lista = "Productos registrados:\n";
    for (let i = 0; i < productos.length; i++) {
        lista += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`;
    }
    alert(lista);
    console.log(lista);
}


while (continuar) {
    let opcion = prompt(
        "Seleccione una opción:\nPresione 1 para: Agregar producto\nPresione 2 para: Ver productos\nPresione 3 para: Salir"
    );
    switch (opcion) {
        case "1":
            agregarProducto();
            break;
        case "2":
            mostrarProductos();
            break;
        case "3":
            continuar = false;
            alert("Vuelve y carga Productos");
            break;
        default:
            alert("Opción no válida.");
    }
}