//me falta hacer que redireccionen bien los botones y los valores de los cursos sean los correctos y poder cargarlo bien en el carrito
    let contador = 1;
    const precioPorPersona = localStorage.getItem('valorCursoEnNumero'); //Busca la variable guardada en localstorage que contiene el valor del curso
// Limpiar el localStorage y los inputs vacíos al cargar la página
document.addEventListener("DOMContentLoaded", () => {

localStorage.removeItem("personas"); // Esto elimina todos los datos guardados en localStorage
eliminarInputsVacios();

});
function eliminarInputsVacios() {
    const contenedor = document.getElementById('formularios-singular');
    const inputs = contenedor.querySelectorAll('input');
    
    // Recorre todos los inputs y elimina aquellos que estén vacíos
    inputs.forEach(input => {
        if (input.value === '') {
            input.remove();  // Elimina el input vacío
        }
    });
}

    // Cargar datos de localStorage al iniciar
    document.addEventListener("DOMContentLoaded", () => {
        const personasGuardadas = JSON.parse(localStorage.getItem("personas")) || [];
        if (personasGuardadas.length > 0) {
            personasGuardadas.forEach(persona => agregarPersona(persona));
        }
        actualizarTotal();
    });

    document.getElementById("btnAgregarPersona").addEventListener("click", () => agregarPersona());
    document.getElementById("mostrarModal").addEventListener("click", mostrarResumen);
    document.getElementById("btnCerrarModal").addEventListener("click", cerrarModal);

        function agregarPersona() {
            contador++;
            const container = document.getElementById('formularios-singular');
        
            // Crear un nuevo div para la persona con inputs vacíos
            const nuevaPersona = document.createElement('div');
            nuevaPersona.classList.add('persona');
            nuevaPersona.setAttribute('data-index', contador);
        
            // Crear los inputs vacíos (sin valores asignados)
            nuevaPersona.innerHTML = `
                <input type="text" placeholder="Nombre y Apellido" required>
                <input type="number" placeholder="DNI (sin puntos)" required min="1">
                <input type="email" placeholder="Correo electrónico" required>
                <a class="btnEliminar" href="#">-</a>
            `;
        
            // Agregar el formulario al contenedor
            container.appendChild(nuevaPersona);
        
            // Agregar listener al botón eliminar para que elimine solo los inputs de esta persona
            nuevaPersona.querySelector('.btnEliminar').addEventListener("click", eliminarPersona);
        
            // Actualizar el total después de agregar la nueva persona
            actualizarTotal();
        }

   // Función para eliminar la persona (inputs) cuando se hace clic en el botón de eliminar
function eliminarPersona(event) {
    // Encuentra el contenedor más cercano que es la persona (el div .persona)
    const persona = event.target.closest('.persona');
    
    if (persona) {
        // Elimina todos los inputs dentro de la persona
        persona.remove();  // Elimina el contenedor de la persona completa
        actualizarTotal();  // Actualiza el total de personas
    }
}



    function actualizarTotal() {
        //Aca hay que poner bien el valor del curso en especifico
        const totalPersonas = document.querySelectorAll('.persona').length;
        document.getElementById('total').textContent = `Total: U$D ${totalPersonas * precioPorPersona}`;
    }

    function mostrarResumen() {
        
        const modal = document.getElementById('modal-resumen');
        const listaInscritos = document.getElementById('lista-inscritos');
        listaInscritos.innerHTML = ''; // Limpiar contenido previo

        const personasGuardadas = JSON.parse(localStorage.getItem("personas")) || [];
        personasGuardadas.forEach((persona, index) => {
            const infoPersona = document.createElement('p');
            infoPersona.textContent = `Persona ${index + 1}: ${persona.nombre}, DNI: ${persona.dni}, Tel: ${persona.telefono}`;
            listaInscritos.appendChild(infoPersona);
        });

        modal.classList.add('active');
    }

    function cerrarModal() {
        const modal = document.getElementById('modal-resumen');
        modal.classList.remove('active');
    }
