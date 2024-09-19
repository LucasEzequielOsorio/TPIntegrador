const header = `
    <div class="logo"></div>
    <div class="search_bar"></div>
    <div class="cart_logo"></div>`;
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
        <h4>El grupo</h4><p>asdasdasda</p>
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