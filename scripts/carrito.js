document.addEventListener("DOMContentLoaded", function() {
    cargarCarrito();
});

function cargarCarrito() {
    const filasCarrito = document.getElementById("filasCarrito");
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    const productos = activeUser.carrito;
    
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
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    const productos = activeUser.carrito;
    productos.push({ nombre, precio, modalidad, cantidad });
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
    cargarCarrito();
}

function eliminarProducto(index) {
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    const productos = activeUser.carrito;
    productos.splice(index, 1);
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
    cargarActiveUserAUsers();
    cargarCarrito();
}

function actualizarTotal() {
    let total = 0;
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    const productos = activeUser.carrito;

    productos.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });

    const totalElemento = document.querySelector(".totalCompraCarrito span:last-child");
    if (totalElemento) {
        totalElemento.textContent = `$${total.toLocaleString("es-AR")} ARS`;
    }
}

function cargarActiveUserAUsers()
{
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    var users = JSON.parse(localStorage.getItem("users"));
    var userIndex = users.findIndex(user => user.email === activeUser.email);
    users[userIndex] = activeUser;
    localStorage.setItem("users", JSON.stringify(users));
}
