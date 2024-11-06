document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const cursoId = urlParams.get('curso');
    
    // Asegurarse de que haya un cursoId en la URL
    if (cursoId) {
        const cursos = [
            { id: 1, nombre: 'Webserver Administration', precio: 125000, modalidad: 'Virtual' },
            { id: 2, nombre: 'Seguridad Informatica para todos', precio: 120000, modalidad: 'Presencial' },
            { id: 3, nombre: 'Direccionamiento IP y Subredes Cisco', precio: 150000, modalidad: 'Presencial' },
            { id: 4, nombre: 'Seguridad Informatica', precio: 48000, modalidad: 'Virtual' },
            { id: 5, nombre: 'Ciberseguridad Todo en Uno', precio: 80000, modalidad: 'Virtual' },
            { id: 6, nombre: 'Seguridad Linux desde cero', precio: 78000, modalidad: 'Presencial' },
            { id: 7, nombre: 'Desarrollo de software seguro', precio: 140000, modalidad: 'Presencial' },
            { id: 8, nombre: 'Excel Completo', precio: 80000, modalidad: 'Presencial' },
            { id: 9, nombre: 'Máster en SQL', precio: 120000, modalidad: 'Virtual' },
            { id: 10, nombre: 'Programacion con Phyton', precio: 150000, modalidad: 'Virtual' },
            { id: 11, nombre: 'Power BI', precio: 170000, modalidad: 'Virtual' },
            { id: 12, nombre: 'Fundamentos de Cisco', precio: 200000, modalidad: 'Virtual' },
        ];
        
        // Buscar el curso correspondiente
        const curso = cursos.find(curso => curso.id === parseInt(cursoId));
        
        if (curso) {
            // Mostrar el nombre del curso y el precio
            document.getElementById('nombreCurso').innerText = curso.nombre;
            document.getElementById('montoTotal').innerText = `$${curso.precio.toLocaleString()}`;

            // Manejar el botón de agregar persona
            const agregarBtn = document.querySelector('.botonAgregar');
            agregarBtn.addEventListener('click', function (e) {
                e.preventDefault();
                agregarPersona(curso);
            });
        }
    }

    let contadorPersonas = 1;  // Contador para las personas registradas

    // Función para agregar una persona
    function agregarPersona(curso) {
        const formularioContainer = document.querySelector('.datos');
        
        // Crear los nuevos campos para la persona
        const nuevaPersona = document.createElement('div');
        nuevaPersona.classList.add('formularios-singular');
        nuevaPersona.innerHTML = `
            <input type="email" name="email" required id="email_${contadorPersonas}" placeholder="Correo electrónico">
            <input type="text" required id="name_${contadorPersonas}" placeholder="Nombre y Apellido">
            <input type="number" required id="dni_${contadorPersonas}" placeholder="DNI(sin puntos)" min="1">
            <input type="number" required id="telefono_${contadorPersonas}" placeholder="Telefono" min="1">
            <a class="botonEliminar" href="#" data-persona="${contadorPersonas}">-</a>
        `;

        // Agregar el nuevo formulario al contenedor
        formularioContainer.insertBefore(nuevaPersona, document.querySelector('.Agregar'));

        // Actualizar el monto total
        actualizarMonto(curso, ++contadorPersonas);

        // Agregar funcionalidad de eliminar a las nuevas personas
        const eliminarBtn = nuevaPersona.querySelector('.botonEliminar');
        eliminarBtn.addEventListener('click', function (e) {
            e.preventDefault();
            eliminarPersona(e.target, curso);
        });
    }

    // Función para actualizar el monto
    function actualizarMonto(curso, cantidadPersonas) {
        let total = curso.precio * cantidadPersonas;
        document.getElementById('montoTotal').innerText = `$${total.toLocaleString()}`;
    }

    // Función para eliminar persona
    function eliminarPersona(eliminarBtn, curso) {
        const personaId = eliminarBtn.getAttribute('data-persona');
        
        if (personaId == 0) {
            // Si es la primera persona, solo vaciar los campos
            document.getElementById(`email_${personaId}`).value = '';
            document.getElementById(`name_${personaId}`).value = '';
            document.getElementById(`dni_${personaId}`).value = '';
            document.getElementById(`telefono_${personaId}`).value = '';
        } else {
            // Eliminar el formulario de la persona
            const personaFormulario = document.querySelector(`#email_${personaId}`).parentElement;
            personaFormulario.remove();

            // Restar el precio del curso
            contadorPersonas--;
            actualizarMonto(curso, contadorPersonas);
        }
    }

    // Función para inicializar la primera persona (que no se debe eliminar)
    function inicializarPrimerPersona() {
        const formularioContainer = document.querySelector('.datos');
        const primeraPersona = document.querySelector('.formularios-singular');
        
        // Asignar un id a la primera persona
        primeraPersona.id = 'persona_0';
        
        // Establecer evento para limpiar los campos de la primera persona
        const botonEliminar = primeraPersona.querySelector('.botonEliminar');
        botonEliminar.addEventListener('click', function (e) {
            e.preventDefault();
            // Vaciar los campos de la primera persona, no eliminar el formulario
            document.getElementById('email').value = '';
            document.getElementById('name').value = '';
            document.getElementById('dni').value = '';
            document.getElementById('telefono').value = '';
        });
    }

    // Llamar a la función para inicializar la primera persona
    inicializarPrimerPersona();
});



