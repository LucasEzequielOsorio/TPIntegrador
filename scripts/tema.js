const header = `
    <a href="../vistas/inicio.html" class="logo logo_desktop">
        <span class="logo_black">Cours</span><span class="logo_blue">Ed</span>
    </a>
    <a href="../index.html" class="logo logo_tiny">
        <span class="logo_black">C:</span><span class="logo_blue">Ed</span>
    </a>
    <form class="search_bar" action="../vistas/inicio.html">
        <input list="courses" name="course" id="course">
            <datalist id="courses">
                <option value="Webserver Administration">
                <option value="Seguridad Informatica para todos">
                <option value="Direccionamiento IP y Subredes Cisco">
                <option value="Seguridad Informatica desde cero">
                <option value="Ciberseguridad Todo en Uno">
                <option value="Seguridad Linux">
                <option value="Desarrollo de software seguro">
                <option value="Desarrollo de software seguro">
                <option value="Excel Completo">
                <option value="Máster en SQL">
            </datalist>
        <button type="submit">Buscar</button>
    </form>
    <a href="../Vistas/carrito.html" class="cart_logo"><span>0</span></a>`;
const footer = `
    <div class="footer_item">
        <h4>El grupo</h4>
        <ul>
            <li>Lucas Osorio, DNI 45.753.437</li>
            <li>Federico García, DNI 38.511.888</li>
            <li>Santiago Muse, DNI 45.921.974</li>
            <li>Francisco González, DNI 39.512.972</li>
        </ul>
    </div>
    <div class="footer_item">
        <h4>Menú</h4>
        <ul>
            <li><a href="../vistas/inicio.html">Home</a></li>
            <li><a href="../vistas/calendario.html">Próximos cursos</a></li>
            <li><a href="../vistas/gift-card.html">Tarjetas de regalo</a></li>
            <li><a href="../vistas/contacto.html">Contacto</a></li>
        </ul>
    </div>
    <div class="footer_item">
        <h4>Seguinos</h4>
        <ul>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://x.com">X/Twitter</a></li>
            <li><a href="https://youtube.com">YouTube</a></li>
            <li><a href="https://facebook.com">Facebook</a></li>
        </ul>
    </div>`;

const navbar_home = `
        <a href="./calendario.html">Próximos cursos</a>
        <a href="./gift-card.html">¡Regalá CoursEd!</a>
        <a href="./contacto.html">Contacto</a>
        <a href="../index.html">Cerrar Sesión</a>`;

const navbar_back_and_home = `
    <a href="javascript:history.back()">Atrás</a>
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