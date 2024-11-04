// Datos de los cursos
const cursos = {
    1: {
        titulo: "Webserver Administration",
        modalidad: "Virtual",
        valor: "$125.000 ARS",
        tiempo: "140hs",
        descripcion: "En este curso aprenderemos los conceptos básicos de los servidores web...",
        requisitos: [
            "Tener una computadora",
            "Acceso a Internet",
            "Ganas de aprender las tecnologías que mueven INTERNET"
        ],
        imagen: "../imagenes/Curso1_Webserver_Administration.PNG",
        contenidos: [
            {
                titulo: "INTRODUCCIÓN",
                clases: [
                    { nombre: "Instalando componentes", duracion: "36 min" },
                    { nombre: "Instalando y configurando WAMP Server", duracion: "16 min" },
                    { nombre: "Instalando y configurando Bitnami", duracion: "1h 7 min" },
                    { nombre: "EXAMEN", duracion: "2h 30 min" }
                ]
            },
            // Más unidades y clases aquí...
        ]
    },
    // Cursos 2-12 aquí...
};

// Función para cargar los datos del curso
function cargarCurso() {
    const urlParams = new URLSearchParams(window.location.search);
    const cursoId = urlParams.get('curso');
    
    if (!cursos[cursoId]) {
        document.getElementById('tituloCurso').innerText = "Curso no encontrado";
        return;
    }

    const curso = cursos[cursoId];
    
    document.getElementById('tituloCurso').innerText = curso.titulo;
    document.getElementById('modalidadCurso').innerText = curso.modalidad;
    document.getElementById('valorCurso').innerText = curso.valor;
    document.getElementById('tiempoCurso').innerText = curso.tiempo;
    document.getElementById('descripcionCurso').innerText = curso.descripcion;
    
    // Cargar requisitos
    const requisitosList = document.getElementById('requisitosCurso');
    curso.requisitos.forEach(req => {
        const li = document.createElement('li');
        li.innerText = req;
        requisitosList.appendChild(li);
    });

    // Cargar imagen
    document.getElementById('fotoCurso').innerHTML = `<img src="${curso.imagen}" alt="Foto ${curso.titulo}">`;

    // Cargar contenidos
    const contenidos = document.getElementById('contenidosCurso');
    curso.contenidos.forEach(unidad => {
        const unidadElem = document.createElement('details');
        const summary = document.createElement('summary');
        summary.classList.add('contenedorTituloCurso');
        summary.innerText = unidad.titulo;
        unidadElem.appendChild(summary);
        
        const contenido = document.createElement('div');
        contenido.classList.add('contenido');
        const clasesList = document.createElement('ul');
        clasesList.classList.add('contenedorUnidadClases');

        unidad.clases.forEach(clase => {
            const claseElem = document.createElement('li');
            claseElem.classList.add('leccion');
            claseElem.innerHTML = `
                <div class="icono">&#9830;</div>
                <div class="tituloClases">${clase.nombre}</div>
                <div class="duracion">${clase.duracion}</div>
                <div class="completado"><input type="radio" name="leccion"></div>
            `;
            clasesList.appendChild(claseElem);
        });

        contenido.appendChild(clasesList);
        unidadElem.appendChild(contenido);
        contenidos.appendChild(unidadElem);
    });
}

// Llama a la función de carga al iniciar la página
window.onload = cargarCurso;
