const urlParams = new URLSearchParams(window.location.search);
const nombreDestinatario = urlParams.get('destinatary_name');
const emailDestinatario = urlParams.get('destinatary_email');
const color = urlParams.get('color');
const tamanioTexto = urlParams.get('text_size');
const monto = urlParams.get('amount');
const ubicacionMonto = urlParams.get('amount_placement');
const fondo = urlParams.get('background');

const gift_card = {nombreDestinatario, emailDestinatario, color, tamanioTexto, monto, ubicacionMonto, fondo};
localStorage.setItem("gift-card", JSON.stringify(gift_card));