document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('contenedorFormulario');
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const consulta = document.getElementById('consulta');
    const contadorCaracteres = document.getElementById('contadorCaracteres');

    // Expresión regular para validar el email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Esto es para el contador de caracteres restantes
    consulta.addEventListener('input', () => {
        const caracteresRestantes = 1000 - consulta.value.length;
        contadorCaracteres.textContent = `Caracteres restantes: ${caracteresRestantes}`;
    });

    // Validación de campos al enviar el formulario
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        // Se valida el nombre y apellido
        if (nombre.value.trim() === '' || apellido.value.trim() === '') {
            alert('El nombre y el apellido no pueden estar vacíos.');
            return;
        }

        // Validar email
        if (!emailRegex.test(email.value)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        // Validar teléfono solo si tiene contenido
        if (telefono.value.trim() !== '') {
            const telefonoRegex = /^\d{4}-?\d{4}$/;
            if (!telefonoRegex.test(telefono.value)) {
                alert('Debe ingresar un número de teléfono válido en formato: xxxx-xxxx o xxxxxxxx.');
                return;
            }
        }

        // Si todo es válido, mostrar la ventana emergente de confirmación
        mostrarPopupConfirmacion();
    });

    function mostrarPopupConfirmacion() {
        // Crear el fondo de la ventana emergente
        const fondoPopup = document.createElement('div');
        fondoPopup.classList.add('fondo-popup');

        // Crear el contenido del popup
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.innerHTML = `
            <p>Consulta enviada</p>
            <button id="aceptarBtn">Aceptar</button>
        `;

        fondoPopup.appendChild(popup);
        document.body.appendChild(fondoPopup);

        // Evento para redirigir al presionar "Aceptar"
        document.getElementById('aceptarBtn').addEventListener('click', () => {
            document.body.removeChild(fondoPopup);
            window.location.href = '../index.html';
        });
    }
});
