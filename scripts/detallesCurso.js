// Datos de los cursos
const cursos = {
    1: {
        titulo: "Webserver Administration",
        modalidad: "Virtual",
        valor: "$125.000 ARS",
        tiempo: "140hs",
        descripcion: "En este curso aprenderemos los conceptos básicos de los servidores web, basados en Apache, Php y MySQL, desde un inicio aprenderás el proceso de configuración de cada una de estas herramientas.",
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
                    { nombre: "1.1 Instalando componentes", duracion: "36 min" },
                    { nombre: "1.2 Instalando y configurando WAMP Server", duracion: "16 min" },
                    { nombre: "1.3 Instalando y configurando Bitnami", duracion: "1h 7 min" },
                    { nombre: "1.4 EXAMEN", duracion: "2h 30 min" }
                ]
            },
            {
                titulo: "UNIDAD 2",
                clases: [
                    { nombre: "2.1 Solucion de problemas / Troubleshooting", duracion: "1h 20 min" },
                ]
            },
            {
                titulo: "UNIDAD 3",
                clases: [
                    { nombre: "3.1 Publicando nuestro servidor", duracion: "1h 40min" },
                ]
            },
            
        ],
        
    },
    

    2: {
        titulo: "Seguridad Informatica para todos",
        modalidad: "Presencial",
        valor: "$120.000 ARS",
        tiempo: "120hs",
        descripcion: "Aprenda a navegar con seguridad y anonimato. Conozca los elementos básicos para evitar el espionaje y robo de sus datos.",
        requisitos: [
            "Tener una computadora",
            "Requiere dispositivos móviles",
            "Acceso a Internet"
        ],
        imagen: "../imagenes/Curso2_Seguridad_Informatica_Para_Todos.PNG",
        contenidos: [
            {
                titulo: "INTRODUCCIÓN",
                clases: [
                    { nombre: "1.1 Consejos para este curso", duracion: "30 min" },
                    { nombre: "1.2 Instalación y actualización de Navegadores", duracion: "1hs 20 min" },
                    { nombre: "1.3 Conociendo las opciones de privadidad del Navegador", duracion: "1h 40 min" },
                    { nombre: "1.4 EXAMEN", duracion: "2h 30 min" }
                ]
            },
            {
                titulo: "UNIDAD 2",
                clases: [
                    { nombre: "2.1 Busquedas protegidas", duracion: "1h 20 min" },
                ]
            },
            {
                titulo: "UNIDAD 3",
                clases: [
                    { nombre: "3.1 Servidores Proxy en los Navegadores", duracion: "1h 40min" },
                ]
            },
            
        ],
        
    },


    3: {
        titulo: "Direccionamiento IP y Subredes Cisco",
        modalidad: "Presencial",
        valor: "$150.000 ARS",
        tiempo: "160hs",
        descripcion: "Direccionamiento IP y Subnetting. Aprende a subnetear en poco tiempo.",
        requisitos: [
            "Tener una computadora",
            "Muchas ganas de aprender y pasión por la tecnología",
            "Acceso a Internet"
        ],
        imagen: "../imagenes/Curso3_Direccionamiento_IP_y_Subredes_Cisco.PNG",
        contenidos: [
            {
                titulo: "INTRODUCCIÓN",
                clases: [
                    { nombre: "1.1 Introducción al contenido del curso", duracion: "30 min" },
                    { nombre: "1.2 Conociendo el mundo de la IP", duracion: "1hs 20 min" },
                    { nombre: "1.3 Enrutamiento", duracion: "1h 40 min" },
                    { nombre: "1.4 EXAMEN", duracion: "2h 30 min" }
                ]
            },
            {
                titulo: "UNIDAD 2",
                clases: [
                    { nombre: "2.1 ¿Qué es una subred?", duracion: "1h 20 min" },
                ]
            },
            {
                titulo: "UNIDAD 3",
                clases: [
                    { nombre: "3.1 Introducción al Mikrotik", duracion: "1h 40min" },
                ]
            },
            
        ],
        
    },


    4: {
        titulo: "Seguridad Informatica",
        modalidad: "Virtual",
        valor: "$48.000 ARS",
        tiempo: "60hs",
        descripcion: "Aprende Seguridad Informática desde Cero con Ejemplos de Ataques Reales. Aprende Ciberseguridad y Hacking Etico.",
        requisitos: [
            "Requiere ordenador",
            "Ganas de aprender",
            "Acceso a Internet"
        ],
        imagen: "../imagenes/Curso4_Seguridad_informatica_desde_cero.png",
        contenidos: [
            {
                titulo: "INTRODUCCIÓN",
                clases: [
                    { nombre: "1.1 ¿Qué es la Ingeniería Social", duracion: "30 min" },
                    { nombre: "1.2 ¿Qué es el phishing?", duracion: "1hs 20 min" },
                    { nombre: "1.3 Phising con SocialPhish", duracion: "1h 40 min" },
                    { nombre: "1.4 EXAMEN", duracion: "2h 30 min" }
                ]
            },
            {
                titulo: "UNIDAD 2",
                clases: [
                    { nombre: "2.1 ¿Qué es el Malware?", duracion: "1h 20 min" },
                ]
            },
            {
                titulo: "UNIDAD 3",
                clases: [
                    { nombre: "3.1 ¿Qué es un Keylogger?", duracion: "1h 40min" },
                ]
            },
            
        ],
        
    },


    5: {
        titulo: "Ciberseguridad Todo en Uno",
        modalidad: "Virtual",
        valor: "$80.000 ARS",
        tiempo: "120hs",
        descripcion: "Aprenda de múltiples áreas de ciberseguridad: Malware, Amenazas, Riesgos, Seguridad de red y web, Control de acceso...",
        requisitos: [
            "Requiere ordenador",
            "Ganas de aprender de ciberseguridad",
            "Acceso a Internet"
        ],
        imagen: "../imagenes/Curso5_Ciberseguridad_Todo_en_Uno.png",
        contenidos: [
            {
                titulo: "INTRODUCCIÓN",
                clases: [
                    { nombre: "1.1 Introducción y Ciberseguridad", duracion: "30 min" },
                    { nombre: "1.2 Escenario Malware - ciberataque", duracion: "1hs 20 min" },
                    { nombre: "1.3 Amenazas, riesgos y vulnerabilidad", duracion: "1h 40 min" },
                    { nombre: "1.4 EXAMEN", duracion: "2h 30 min" }
                ]
            },
            {
                titulo: "UNIDAD 2",
                clases: [
                    { nombre: "2.1 Gestión de riesgos", duracion: "1h 20 min" },
                ]
            },
            {
                titulo: "UNIDAD 3",
                clases: [
                    { nombre: "3.1 Estrategia de seguridad", duracion: "1h 40min" },
                ]
            },
            
        ],
        
    },


    6: {
        titulo: "Seguridad Linux desde cero",
        modalidad: "Presencial",
        valor: "$140.000 ARS",
        tiempo: "180hs",
        descripcion: "Aprende a utilizar el firewall más famoso de Linux.",
        requisitos: [
            "Requiere ordenador",
            "Conocimientos básicos de redes y de uso de Linux",
            "Acceso a Internet"
        ],
        imagen: "../imagenes/Curso6_Seguridad_Linux.png",
        contenidos: [
            {
                titulo: "INTRODUCCIÓN",
                clases: [
                    { nombre: "1.1 Iptables: netfilter, tablas, cadenas y reglas", duracion: "30 min" },
                    { nombre: "1.2 Las reglas de iptables", duracion: "1hs 20 min" },
                    { nombre: "1.3 La tabla NAT y cadena FORDWARD", duracion: "1h 40 min" },
                    { nombre: "1.4 EXAMEN", duracion: "2h 30 min" }
                ]
            },
            {
                titulo: "UNIDAD 2",
                clases: [
                    { nombre: "2.1 Opciones principales de iptables", duracion: "1h 20 min" },
                ]
            },
            {
                titulo: "UNIDAD 3",
                clases: [
                    { nombre: "3.1 Módulos de iptables", duracion: "1h 40min" },
                ]
            },
            
        ],
        
    },


    7: {
        titulo: "Desarrollo de software seguro",
        modalidad: "Presencial",
        valor: "$78.000 ARS",
        tiempo: "90hs",
        descripcion: "Una Introducción al ciclo de desarrollo de software seguro.",
        requisitos: [
            "Requiere ordenador",
            "Tener VirtualBox instalado",
            "Acceso a Internet"
        ],
        imagen: "../imagenes/Curso7_Desarrollo_de_software_seguro.png",
        contenidos: [
            {
                titulo: "INTRODUCCIÓN",
                clases: [
                    { nombre: "1.1 Instalacion de VirtualBox", duracion: "30 min" },
                    { nombre: "1.2 Configurando correctamente la Máquina Virtual", duracion: "1hs 20 min" },
                    { nombre: "1.3 Iniciando la Máquina Virtual", duracion: "1h 40 min" },
                    { nombre: "1.4 EXAMEN", duracion: "2h 30 min" }
                ]
            },
            {
                titulo: "UNIDAD 2",
                clases: [
                    { nombre: "2.1 Vulnerabilidad Cross-Site Scripting", duracion: "1h 20 min" },
                ]
            },
            {
                titulo: "UNIDAD 3",
                clases: [
                    { nombre: "3.1 Seguridad desde el Diseño", duracion: "1h 40min" },
                ]
            },
            
        ],
        
    },


    8: {
        titulo: "Excel Completo",
        modalidad: "Presencial",
        valor: "$80.000 ARS",
        tiempo: "200hs",
        descripcion: "Conviértete en un Experto en Excel Desde Cero. Excel 2010, 2013, 2016 2019 and Microsoft/Office 365.",
        requisitos: [
            "Requiere ordenador",
            "Tener VirtualBox instalado",
            "Acceso a Internet"
        ],
        imagen: "../imagenes/Curso8_Excel_Completo.png",
        contenidos: [
            {
                titulo: "INTRODUCCIÓN",
                clases: [
                    { nombre: "1.1 Estructura, Aspectos Generales", duracion: "30 min" },
                    { nombre: "1.2 Estructura, Intermedio", duracion: "1hs 20 min" },
                    { nombre: "1.3 Estructura, Específicos", duracion: "1h 40 min" },
                    { nombre: "1.4 EXAMEN", duracion: "2h 30 min" }
                ]
            },
            {
                titulo: "UNIDAD 2",
                clases: [
                    { nombre: "2.1 Construyendo Texto y Datos Numéricos", duracion: "1h 20 min" },
                ]
            },
            {
                titulo: "UNIDAD 3",
                clases: [
                    { nombre: "3.1 Referencias Relativas y Absolutas en Excel", duracion: "1h 40min" },
                ]
            },
            
        ],
        
    },


    9: {
        titulo: "Máster en SQL",
        modalidad: "Virtual",
        valor: "$120.000 ARS",
        tiempo: "140hs",
        descripcion: "SQL Aprende Bases de Datos, Consultas, Funciones, Tablas y Permisos. Diseña y Programa una Base de Datos Relacional SQL.",
        requisitos: [
            "Requiere ordenador",
            "Tener VirtualBox instalado",
            "Acceso a Internet"
        ],
        imagen: "../imagenes/Curso9_Master_en_SQL.png",
        contenidos: [
            {
                titulo: "INTRODUCCIÓN",
                clases: [
                    { nombre: "1.1 Instalación de SQL Server Management Studio", duracion: "30 min" },
                    { nombre: "1.2 Introducción al motor SQL", duracion: "1hs 20 min" },
                    { nombre: "1.3 Creando una base de datos y cargando datos", duracion: "1h 40 min" },
                    { nombre: "1.4 EXAMEN", duracion: "2h 30 min" }
                ]
            },
            {
                titulo: "UNIDAD 2",
                clases: [
                    { nombre: "2.1 Concepto de Relaciones entre tablas", duracion: "1h 20 min" },
                ]
            },
            {
                titulo: "UNIDAD 3",
                clases: [
                    { nombre: "3.1 Comandos", duracion: "1h 40min" },
                ]
            },
            
        ],
        
    },


    10: {
        titulo: "Programacion con Phyton",
        modalidad: "Virtual",
        valor: "$150.000 ARS",
        tiempo: "38hs",
        descripcion: "Python con aprenderás sobre el análisis de datos, permitiéndote explorar y visualizar información valiosa para la toma de decisiones.",
        requisitos: [
            "Requiere ordenador",
            "Conocimientos básicos de informática",
            "Acceso a Internet"
        ],
        imagen: "../imagenes/Curso10_programacion_con_phyton.png",
        contenidos: [
            {
                titulo: "INTRODUCCIÓN",
                clases: [
                    { nombre: "1.1 Instalación y uso de Phyton", duracion: "30 min" },
                    { nombre: "1.2 Ejecutar codigo y comenzar con los operadores basicos", duracion: "1hs 20 min" },
                    { nombre: "1.3 Practica de ejercicios y codigo", duracion: "1h 40 min" },
                    { nombre: "1.4 EXAMEN", duracion: "2h 30 min" }
                ]
            },
            {
                titulo: "UNIDAD 2",
                clases: [
                    { nombre: "2.1 Insertar y consultar datos de SQLite", duracion: "1h 20 min" },
                ]
            },
            {
                titulo: "UNIDAD 3",
                clases: [
                    { nombre: "3.1 Entorno para crear datos de pruebas", duracion: "1h 40min" },
                ]
            },
            
        ],
        
    },


    11: {
        titulo: "Power BI",
        modalidad: "Virtual",
        valor: "$170.000 ARS",
        tiempo: "22hs",
        descripcion: "En este curso de Power BI en español vas a aprender como hacer informes y reportes con dashboards en distintos proyectos, ejercicios y prácticas.",
        requisitos: [
            "Requiere ordenador",
            "Tener instalador Power BI en el equipo",
            "Acceso a Internet"
        ],
        imagen: "../imagenes/Curso11_curso_Power_Bi.png",
        contenidos: [
            {
                titulo: "INTRODUCCIÓN",
                clases: [
                    { nombre: "1.1 Iciando con Power BI", duracion: "30 min" },
                    { nombre: "1.2 Interfaz y bloques de Power BI", duracion: "1hs 20 min" },
                    { nombre: "1.3 Teoria y practica de Indicadores", duracion: "1h 40 min" },
                    { nombre: "1.4 EXAMEN", duracion: "2h 30 min" }
                ]
            },
            {
                titulo: "UNIDAD 2",
                clases: [
                    { nombre: "2.1 Proyecto DAX", duracion: "1h 20 min" },
                ]
            },
            {
                titulo: "UNIDAD 3",
                clases: [
                    { nombre: "3.1 Tablas Calendario con DAX y M", duracion: "1h 40min" },
                ]
            },
            
        ],
        
    },


    12: {
        titulo: "Fundamentos de Cisco",
        modalidad: "Virtual",
        valor: "$200.000 ARS",
        tiempo: "30hs",
        descripcion: "El curso esta enfocado para prepararte y poder obtener los conocimiento fundamentales de Cisco Networking.",
        requisitos: [
            "Requiere ordenador",
            "Simulador de router y switches",
            "Acceso a Internet"
        ],
        imagen: "../imagenes/Curso12_fundamentos_Cisco.png",
        contenidos: [
            {
                titulo: "INTRODUCCIÓN",
                clases: [
                    { nombre: "1.1 Fundamentos de Networking", duracion: "30 min" },
                    { nombre: "1.2 LAN Ethernet, WAN e IPV4", duracion: "1hs 20 min" },
                    { nombre: "1.3 Ruteo, Ping-DNS-ARP, TCP-UDP", duracion: "1h 40 min" },
                    { nombre: "1.4 EXAMEN", duracion: "2h 30 min" }
                ]
            },
            {
                titulo: "UNIDAD 2",
                clases: [
                    { nombre: "2.1 Switching", duracion: "1h 20 min" },
                ]
            },
            {
                titulo: "UNIDAD 3",
                clases: [
                    { nombre: "3.1 Routing", duracion: "1h 40min" },
                ]
            },
            
        ],
        
    },


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


