/*document.addEventListener("DOMContentLoaded", function () {
    const carrousel = document.querySelector(".carrousel");
    const cursos = Array.from(carrousel.children);
    let currentIndex = 0;
    const visibleCursos = 3;
    const delay = 2000; // Tiempo en milisegundos entre cada cambio

    function updateCarrousel() {
        // Ocultar todos los cursos primero
        cursos.forEach((curso, index) => {
            curso.style.display = "none";
        });

        // Mostrar solo los cursos visibles
        for (let i = 0; i < visibleCursos; i++) {
            const cursoIndex = (currentIndex + i) % cursos.length;
            cursos[cursoIndex].style.display = "flex";
        }
    }

    function nextSlide() {
        // Cambiar al siguiente índice y actualizar el carrusel
        currentIndex = (currentIndex + 1) % cursos.length;
        updateCarrousel();
    }

    
    
    // Iniciar el carrusel automático
    setInterval(nextSlide, delay);

    // Mostrar los primeros cursos al cargar la página
    updateCarrousel();
    
}); */


document.addEventListener("DOMContentLoaded", function () {
    const carrousel = document.querySelector(".carrousel");
    const cursos = Array.from(carrousel.children);
    let currentIndex = 0;
    let visibleCursos = 1;
    const delay = 3000;

    // ajustar el número de cursos visibles en función de la resolución
    function adjustVisibleCursos() {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            visibleCursos = 3;
        } else {
            visibleCursos = 1;
        }
        updateCarrousel(); // Actualizar el carrusel cuando cambia el número de elementos visibles
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
        // Cambiar al siguiente índice y actualizar el carrusel
        currentIndex = (currentIndex + 1) % cursos.length;
        updateCarrousel();
    }

    // Iniciar el carrusel automático
    setInterval(nextSlide, delay);

    // Ajustar el número de cursos visibles al cargar la página y al cambiar el tamaño de la ventana
    adjustVisibleCursos();
    window.addEventListener("resize", adjustVisibleCursos);
});