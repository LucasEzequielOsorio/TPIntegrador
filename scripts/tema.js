const header = `
    <a href="../index.html" class="logo logo_desktop">
        <span class="logo_black">Cours</span><span class="logo_blue">Ed</span>
    </a>
    <a href="../index.html" class="logo logo_tiny">
        <span class="logo_black">C:</span><span class="logo_blue">Ed</span>
    </a>
    <form class="search_bar">
        <input list="courses" name="course" id="course">
            <datalist id="courses">
                <option value="Curso Presencial 1">
                <option value="Curso virtual 1">
                <option value="Curso presencial 2">
                <option value="Curso virtual 2">
                <option value="Curso presencial 3">
            </datalist>
        <button type="submit">Buscar</button>
    </form>
    <a href="#" class="cart_logo"><span>0</span></a>`;
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
        <h4>El grupo</h4><p>lorem ipsum</p>
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
const navbar_back_and_home = `
    <a href="javascript:history.back()">Atrás</a>
    <a href="../index.html">Página Principal</a>
`;    
document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;
document.getElementById("navbar_back_and_home").innerHTML = navbar_back_and_home;