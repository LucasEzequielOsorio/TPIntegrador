var nodoForm = document.querySelector(".gift_card_personalization_dashboard");
var nodoInputNombreDestinatario = document.querySelector(".gift_card_personalization_dashboard_input");
var nodoNombreDestinatario = document.querySelector(".gift_card_preview_name");
var backgroundColor = "red";
var text_size = "xl";
nodoInputNombreDestinatario.addEventListener("input", (e)=>{
    if(nodoInputNombreDestinatario.value == "")
        nodoNombreDestinatario.textContent = "Destinatario";
    else
    nodoNombreDestinatario.textContent = nodoInputNombreDestinatario.value;
});
var nodosInputColor = document.querySelectorAll(".color_option");
var nodoGiftCard = document.querySelector(".gift_card_preview");
nodosInputColor.forEach((nodo)=>{
    nodo.addEventListener("change", (e)=>{
        backgroundColor = e.target.value.toLowerCase();
        setBackground();
    });
});
var nodosInputTamanioTexto = document.querySelectorAll(".text_size_option");
var nodoTextoGiftCard = document.querySelector(".gift_card_preview_text");
nodosInputTamanioTexto.forEach((nodo)=>{
    nodo.addEventListener("change", (e)=>{
        text_size = e.target.value;
        setTamanioTexto();
    });
});
window.addEventListener("resize", setTamanioTexto);
function setTamanioTexto()
{
    var factor;
        switch(text_size)
        {
            case "xs":
                factor = 0.035;
            break;
            case "s":
                factor = 0.045;
            break;
            case "m":
                factor = 0.055;
            break;
            case "l":
                factor = 0.065;
            break;
            case "xl":
                factor = 0.075;
            break;
        }
        console.log(factor * nodoGiftCard.offsetHeight);
        nodoTextoGiftCard.style.fontSize = factor * nodoGiftCard.offsetHeight + "px";
        nodoNombreDestinatario.style.fontSize = "calc("+ nodoTextoGiftCard.style.fontSize + " * 2";
}
var nodoInputMonto = document.querySelector("#gift_card_personalization_dashboard_amount");
var nodoMonto = document.querySelector(".gift_card_preview_amount");
nodoInputMonto.addEventListener("input", (e)=>{
    if(nodoInputMonto.value == "")
        nodoMonto.textContent = "$0";
    else
        nodoMonto.textContent = '$' + nodoInputMonto.value;
});
var nodosInputUbicacionMonto = document.querySelectorAll(".amount_placement_option");
nodosInputUbicacionMonto.forEach((nodo)=>{
    nodo.addEventListener("change", (e)=>{
        switch(e.target.value)
        {
            case "UP_LEFT":
                nodoMonto.style.gridColumn = 1;
                nodoMonto.style.gridRow = 1;
            break;
            case "UP_RIGHT":
                nodoMonto.style.gridColumn = 3;
                nodoMonto.style.gridRow = 1;
            break;
            case "DOWN_LEFT":
                nodoMonto.style.gridColumn = 1;
                nodoMonto.style.gridRow = 3;
            break;
            case "DOWN_RIGHT":
                nodoMonto.style.gridColumn = 3;
                nodoMonto.style.gridRow = 3;
            break;
        }
    });
});
var nodosInputEstiloFondo = document.querySelectorAll(".background_style_option");
nodosInputEstiloFondo.forEach((nodo)=>{
    nodo.addEventListener("change", setBackground);
});

function setBackground()
{
    console.log("LLAMANDO");
    let estiloFondo;
    nodosInputEstiloFondo.forEach((nodo)=>{
        if(nodo.checked == true)
        {
            estiloFondo = nodo.value;
        }
    });
    switch(estiloFondo)
    {
        case "SOLID":
            console.log(backgroundColor + ", " + estiloFondo);
            nodoGiftCard.style.background = backgroundColor;
            break;
        case "LINEAR_GRADIENT":
            console.log(backgroundColor + ", " + estiloFondo); 
            nodoGiftCard.style.background = "linear-gradient(" + backgroundColor + ", black )";
            break;
        case "RADIAL_GRADIENT":
            console.log(backgroundColor + ", " + estiloFondo);
            nodoGiftCard.style.background = "radial-gradient(" + backgroundColor + ", black)";
            break;
        case "STRIPED":
            console.log(backgroundColor + ", " + estiloFondo);
            nodoGiftCard.style.background = "linear-gradient("+ backgroundColor +", 15%, black, 25%, "+ backgroundColor +", 45%, black, 55%, "+ backgroundColor +", 75%, black, 85%, "+ backgroundColor +")";            
    }
}


var nodoEmailDestinatario = document.querySelector("#gift_card_personalization_dashboard_destinatary_email");
var nodoSubmit = document.querySelector(".submit_button");
nodoSubmit.addEventListener("click", (e)=>{
    e.preventDefault();
    let userExists = false;
    JSON.parse(localStorage.getItem("users")).forEach((user)=>{
        if(user.email == nodoEmailDestinatario.value)
        {
            userExists = true;
        }
    });
    if(!userExists)
    {
        alert("No existe un usuario con ese correo electrónico.");
    }
    else
    {
        //Este código está incompleto y no va a funcionar mientras no esté hecha la lógica del carrito.
        /*let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push();
        localStorage.setItem("carrito", JSON.stringify(carrito));*/
        nodoForm.submit();
    }
});