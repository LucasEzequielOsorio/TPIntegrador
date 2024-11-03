document.addEventListener("DOMContentLoaded", function () {
    const carrousel = document.querySelector(".carrousel");
    const cursos = Array.from(carrousel.children);
    let currentIndex = 0;
    const visibleCursos = 3; // Número de cursos visibles al mismo tiempo
    const delay = 3000; // Tiempo en milisegundos entre cada cambio

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
    
    
});
