document.addEventListener("DOMContentLoaded", function() {
    cargarCursosDeCarritoAPerfil();
    contarCursos();
});
function cargarCursosDeCarritoAPerfil()
{
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    const carrito = activeUser.carrito;
    const cursos = activeUser.cursos;
    carrito.forEach(element => {
        cursos.push(element);
    });
    carrito.splice(0, carrito.length);
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
    cargarActiveUserAUsers();
}
function cargarActiveUserAUsers()
{
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    var users = JSON.parse(localStorage.getItem("users"));
    var userIndex = users.findIndex(user => user.email === activeUser.email);
    users[userIndex] = activeUser;
    localStorage.setItem("users", JSON.stringify(users));
}