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
        nodoTextoGiftCard.style.fontSize = factor * nodoGiftCard.offsetHeight + "px";
        nodoNombreDestinatario.style.fontSize = "calc("+ nodoTextoGiftCard.style.fontSize + " * 2";
        nodoMonto.querySelector(".span").style.fontSize = 0.33 * nodoMonto.offsetHeight + "px";
}
var nodoInputMonto = document.querySelector("#gift_card_personalization_dashboard_amount");
var nodoMonto = document.querySelector(".gift_card_preview_amount");
var ubicacion_monto ="UP_RIGHT";
nodoInputMonto.addEventListener("input", (e)=>{
    if(nodoInputMonto.value == "")
        nodoMonto.textContent = "$0";
    else
        nodoMonto.textContent = '$' + nodoInputMonto.value;
});
var nodosInputUbicacionMonto = document.querySelectorAll(".amount_placement_option");
nodosInputUbicacionMonto.forEach((nodo)=>{
    nodo.addEventListener("change", (e)=>{
        ubicacion_monto = e.target.value;
        switch(ubicacion_monto)
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
var estilo_fondo = "SOLID";
function setBackground()
{
    console.log("LLAMANDO");
    nodosInputEstiloFondo.forEach((nodo)=>{
        if(nodo.checked == true)
        {
            estilo_fondo = nodo.value;
        }
    });
    switch(estilo_fondo)
    {
        case "SOLID":
            console.log(backgroundColor + ", " + estilo_fondo);
            nodoGiftCard.style.background = backgroundColor;
            break;
        case "LINEAR_GRADIENT":
            console.log(backgroundColor + ", " + estilo_fondo); 
            nodoGiftCard.style.background = "linear-gradient(" + backgroundColor + ", black )";
            break;
        case "RADIAL_GRADIENT":
            console.log(backgroundColor + ", " + estilo_fondo);
            nodoGiftCard.style.background = "radial-gradient(" + backgroundColor + ", black)";
            break;
        case "STRIPED":
            console.log(backgroundColor + ", " + estilo_fondo);
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

        if(!nodoInputNombreDestinatario.value || !nodoEmailDestinatario.value || !backgroundColor || !text_size || !nodoInputMonto.value || !ubicacion_monto || !estilo_fondo)
        {
            alert("Por favor, rellene todos los campos.");
        }
        else
        {
            nodoForm.submit();
        }
    }
});