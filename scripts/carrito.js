document.addEventListener("DOMContentLoaded", function() {
    cargarCarrito();
});

function cargarCarrito() {
    const filasCarrito = document.getElementById("filasCarrito");
    const productos = JSON.parse(localStorage.getItem("carrito")) || [];
    
    filasCarrito.innerHTML = ""; // Limpiar el contenedor antes de cargar

    productos.forEach((producto, index) => {
        const fila = document.createElement("div");
        fila.classList.add("filaCarrito");
        fila.innerHTML = `
            <span class="nombreCurso">${producto.nombre}</span>
            <span class="datoCarrito modalidad">${producto.modalidad}</span>
            <span class="datoCarrito unitario">$${producto.precio.toLocaleString("es-AR")} ARS</span>
            <span class="datoCarrito cantidad">${producto.cantidad}</span>
            <span class="datoCarrito subtotal">$${(producto.precio * producto.cantidad).toLocaleString("es-AR")} ARS</span>
            <div class="datoCarrito">
                <button class="btnBorrarFila" onclick="eliminarProducto(${index})">🗑️</button>
            </div>
        `;
        filasCarrito.appendChild(fila);
    });

    actualizarTotal();
}

function agregarProducto(nombre, precio, modalidad, cantidad = 1) {
    const productos = JSON.parse(localStorage.getItem("carrito")) || [];
    productos.push({ nombre, precio, modalidad, cantidad });
    localStorage.setItem("carrito", JSON.stringify(productos));
    cargarCarrito();
}

function eliminarProducto(index) {
    const productos = JSON.parse(localStorage.getItem("carrito")) || [];
    productos.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(productos));
    cargarCarrito();
}

function actualizarTotal() {
    let total = 0;
    const productos = JSON.parse(localStorage.getItem("carrito")) || [];

    productos.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });

    const totalElemento = document.querySelector(".totalCompraCarrito span:last-child");
    if (totalElemento) {
        totalElemento.textContent = `$${total.toLocaleString("es-AR")} ARS`;
    }
}
