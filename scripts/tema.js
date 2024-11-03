const header = `
    <a href="../vistas/inicio.html" class="logo logo_desktop">
        <span class="logo_black">Cours</span><span class="logo_blue">Ed</span>
    </a>
    <a href="../vistas/inicio.html" class="logo logo_tiny">
        <span class="logo_black">C:</span><span class="logo_blue">Ed</span>
    </a>
    <form class="search_bar" onsubmit="buscarCurso(event)">
        <input list="courses" name="course" id="course">
            <datalist id="courses">
                <option value="Webserver Administration">
                <option value="Seguridad Informatica">
                <option value="Direccionamiento IP y Subredes Cisco">
                <option value="Seguridad Informatica">
                <option value="Ciberseguridad Todo en Uno">
                <option value="Seguridad Linux desde cero">
                <option value="Desarrollo de software seguro">
                <option value="Excel Completo">
                <option value="Máster en SQL">
                <option value="Programacion con Phyton">
                <option value="Power BI">
                <option value="Fundamentos de Cisco">
            </datalist>
        <button type="submit">Buscar</button>
    </form>
    <a href="../Vistas/carrito.html" class="cart_logo"><span>0</span></a>`;
const footer = `
    <div class="footer_item">
        <h4>EL GRUPO</h4>
        <ul>
            <li>Lucas Osorio, DNI 45.753.437</li>
            <li>Federico García, DNI 38.511.888</li>
            <li>Santiago Muse, DNI 45.921.974</li>
            <li>Francisco González, DNI 39.512.972</li>
        </ul>
    </div>
    <div class="footer_item">
        <h4>MENÚ</h4>
        <ul class="contenedorListaFooter">
            <li><a href="../vistas/inicio.html">Home</a></li>
            <li><a href="../vistas/calendario.html">Próximos cursos</a></li>
            <li><a href="../vistas/gift-card.html">Tarjetas de regalo</a></li>
            <li><a href="../vistas/contacto.html">Contacto</a></li>
        </ul>
    </div>
    <div class="footer_item">
        <h4>NUESTRAS REDES</h4>
        <ul class="contenedorListaFooter">
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://x.com">X/Twitter</a></li>
            <li><a href="https://youtube.com">YouTube</a></li>
            <li><a href="https://facebook.com">Facebook</a></li>
        </ul>
    </div>`;


//mapear los nombres de los cursos a los archivos HTML de cursos correspondientes
const cursosHTML = {
    "Webserver Administration": "detallesCurso1.html",
    "Seguridad Informatica para todos": "detallesCurso2.html",
    "Direccionamiento IP y Subredes Cisco": "detallesCurso3.html",
    "Seguridad Informatica": "detallesCurso4.html",
    "Ciberseguridad Todo en Uno": "detallesCurso5.html",
    "Seguridad Linux desde cero": "detallesCurso6.html",
    "Desarrollo de software seguro": "detallesCurso7.html",
    "Excel Completo": "detallesCurso8.html",
    "Máster en SQL": "detallesCurso9.html",
    "Programacion con Phyton": "detallesCurso10.html",
    "Power BI": "detallesCurso11.html",
    "Fundamentos de Cisco": "detallesCurso12.html"
};

//buscar y redirigir al curso correspondiente
function buscarCurso(event) {
    event.preventDefault();
    const cursoSeleccionado = document.getElementById("course").value;
    const paginaCurso = cursosHTML[cursoSeleccionado];

    if (paginaCurso) {
        // Redirige al HTML correspondiente si coinciden
        window.location.href = `../vistasDetallesCursos/${paginaCurso}`;
    } else {
        alert("Curso no encontrado. Por favor, seleccione uno de la lista.");
    }
}





const navbar_home = `
        <a href="./calendario.html">Próximos cursos</a>
        <a href="./gift-card.html">¡Regalá CoursEd!</a>
        <a href="../Vistas/adminPerfil.html">Mi Perfil</a>
        <a href="./contacto.html">Contacto</a>
        <a href="../index.html">Cerrar Sesión</a>`;

const navbar_back_and_home = `
    <a href="javascript:history.back()">Atrás</a>
    <a href="../Vistas/adminPerfil.html">Mi Perfil</a>
    <a href="./inicio.html">Página Principal</a>`;
if(document.getElementById("header") != null)
{    
    document.getElementById("header").innerHTML = header;
}    
if(document.getElementById("navbar_home") != null)
{
    document.getElementById("navbar_home").innerHTML = navbar_home;
}
if(document.getElementById("navbar_back_and_home"))
{
    document.getElementById("navbar_back_and_home").innerHTML = navbar_back_and_home;
}
document.getElementById("footer").innerHTML = footer;