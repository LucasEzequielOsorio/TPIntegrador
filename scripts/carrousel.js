document.addEventListener("DOMContentLoaded", function () {
    const carrousel = document.querySelector(".carrousel");
    let cursos = Array.from(carrousel.children);
    let currentIndex = 0;
    let visibleCursos = 1;
    const delay = 2700;

    // Duplicar los elementos del carrusel para crear el efecto de desplazamiento continuo
    cursos.forEach(curso => {
        const clone = curso.cloneNode(true);
        carrousel.appendChild(clone);
    });
    cursos = Array.from(carrousel.children); // Actualizar la lista de cursos después de la duplicación

    function adjustVisibleCursos() {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            visibleCursos = 3;
        } else {
            visibleCursos = 1;
        }
        updateCarrousel();
    }

    function updateCarrousel() {
        // Ocultar todos los cursos primero
        cursos.forEach(curso => {
            curso.style.display = "none";
        });

        // Mostrar solo los cursos visibles
        for (let i = 0; i < visibleCursos; i++) {
            const cursoIndex = (currentIndex + i) % cursos.length;
            cursos[cursoIndex].style.display = "flex";
        }
    }

    function nextSlide() {
        // Incrementar el índice de forma infinita con desplazamiento
        currentIndex++;
        
        // Si se desplaza más allá de la primera duplicación, vuelve a la posición inicial
        if (currentIndex >= cursos.length / 2) {
            currentIndex = 0;
        }
        
        updateCarrousel();
    }

    // Iniciar el carrusel automático
    setInterval(nextSlide, delay);

    // Ajustar el número de cursos visibles al cargar la página y al cambiar el tamaño de la ventana
    adjustVisibleCursos();
    window.addEventListener("resize", adjustVisibleCursos);
});
