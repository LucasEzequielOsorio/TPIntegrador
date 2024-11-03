// Funcion para registro de un nuevo usuario
function registrarUsuario() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!nombre || !apellido || !email || !password) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(user => user.email === email)) {
        alert("Este correo ya se encuentra registrado.");
        return;
    }

    const user = { nombre, apellido, email, password };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registro exitoso. Ahora puede iniciar sesión.");
    window.location.href = "../index.html";
}

// Función para el inicio de sesión
function InicioSesion() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem("activeUser", JSON.stringify(user));
        alert("Inicio de sesión exitoso.");
        window.location.href = "../Vistas/inicio.html";
    } else {
        alert("Mail o contraseña incorrectos.");
    }
}

// Función para eliminar la cuenta del usuario
function eliminarCuenta() {
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    if (activeUser) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users = users.filter(user => user.email !== activeUser.email);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.removeItem("activeUser");
        alert("Cuenta eliminada.");
        window.location.href = "../index.html";
    }
}

// Función para mostrar datos del perfil
function mostrarPerfil() {
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    if (activeUser) {
        document.getElementById("nombre").textContent = activeUser.nombre;
        document.getElementById("apellido").textContent = activeUser.apellido;
        document.getElementById("email").textContent = activeUser.email;
    } else {
        alert("error.");
    }
}
