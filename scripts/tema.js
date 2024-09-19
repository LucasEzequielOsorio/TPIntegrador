const header = `
    <a href="../index.html" class="logo">
        <span class="logo_black">Cours</span><span class="logo_blue">Ed</span>
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
            <li>Juan</li>
            <li>Enrique</li>
            <li>Julián</li>
            <li>Manolo</li>
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
document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;