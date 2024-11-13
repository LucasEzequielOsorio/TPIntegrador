// Funcion para registro de un nuevo usuario
function registrarUsuario() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const carrito = [];
    const cursos = [];
    const gift_cards = [];

    if (!nombre || !apellido || !email || !password) {
        openModal("#datos_son_obligatorios");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(user => user.email === email)) {
        openModal("#correo_ya_registrado");
        return;
    }

    const user = { nombre, apellido, email, password, carrito, cursos, gift_cards };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    openModal("#registro_exitoso");
}

// Función para el inicio de sesión
function InicioSesion() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];


    //valida si la cuenta ya esta creada
    const userExitente = users.find(user => user.email === email);
    if (!userExitente) {
        openModal("#usuario_no_registrado");
        return;
    }

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem("activeUser", JSON.stringify(user));
        window.location.href = "./Vistas/inicio.html";
    } else {
        openModal("#datos_incorrectos_login");
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
        openModal("#cuenta_eliminada");
    }
}

// Función para mostrar datos del perfil
function mostrarPerfil() {
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    if (activeUser) {
        document.getElementById("nombre").textContent = activeUser.nombre;
        document.getElementById("apellido").textContent = activeUser.apellido;
        document.getElementById("email").textContent = activeUser.email;
        document.querySelector("#cantidad_cursos").textContent = activeUser.cursos.length;
        document.querySelector("#cantidad_gift_cards").textContent = activeUser.gift_cards.length;
    } else {
        openModal("#sesion_no_iniciada");
    }
}


// Función para reestablecer contraseña
function reestablecerPass() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Verificar si todos los campos están completos
    if (!email || !password || !confirmPassword) {
        openModal("#datos_son_obligatorios");
        return;
    }

    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
        openModal("#contrasenias_no_coinciden");
        return;
    }

    // Verificar si el correo electrónico está registrado
    const userIndex = users.findIndex(user => user.email === email);
    if (userIndex === -1) {
        openModal("#usuario_no_registrado");
        return;
    }

    // Reemplazar la contraseña del usuario
    users[userIndex].password = password;
    localStorage.setItem("users", JSON.stringify(users));

    openModal("#contrasenia_restablecida");
}

function cargarActiveUserAUsers()
{
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    var users = JSON.parse(localStorage.getItem("users"));
    var userIndex = users.findIndex(user => user.email === activeUser.email);
    users[userIndex] = activeUser;
    localStorage.setItem("users", JSON.stringify(users));
}

const openModal = (modalId) =>
{
    let modal = document.querySelector(modalId);
    modal.showModal(); 
}
    
const closeModal = (modalId) =>
{
    let modal = document.querySelector(modalId);
    modal.close(); 
}
