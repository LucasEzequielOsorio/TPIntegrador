const pop_up_template = `
<div class="course_pop_up">
        <button type="button" class="pop_up_course_X">X</button>
        <h4 class="pop_up_course_title">Titulo Curso</h2>
        <p class="pop_up_course_description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quasi at perferendis ex aut, enim provident amet ratione? Ex dolorem laudantium dignissimos sit amet sequi non veritatis perferendis dolorum aperiam.</p>
        <a href="" class="pop_up_course_button">Ver más</a>
</div>        
`;
var pop_up;
var nodo_cerrar_pop_up;
var nodo_titulo_pop_up;
var nodo_descripcion_pop_up;
var nodo_abrir_curso_pop_up;
var nodosCurso = document.querySelectorAll(".calendar_item_course");
nodosCurso.forEach((nodo)=>{
    var cursoAMostrar =  cursos[nodo.value];
    nodo.innerHTML = cursoAMostrar.titulo;
    nodo.addEventListener("click", (e)=>{
        document.querySelector(".pop_up_container").innerHTML = pop_up_template;
        pop_up = document.querySelector(".course_pop_up");
        document.body.style.overflow = 'hidden';
        nodo_titulo_pop_up = pop_up.querySelector(".pop_up_course_title");
        nodo_descripcion_pop_up = pop_up.querySelector(".pop_up_course_description");
        nodo_cerrar_pop_up = pop_up.querySelector(".pop_up_course_X");
        nodo_abrir_curso_pop_up = pop_up.querySelector(".pop_up_course_button");
        nodo_titulo_pop_up.innerHTML = cursoAMostrar.titulo;
        nodo_descripcion_pop_up.innerHTML = cursoAMostrar.descripcion;
        nodo_abrir_curso_pop_up.href = "../vistasDetallesCursos/detallesCurso.html?curso=" + e.target.value;
        nodo_cerrar_pop_up.addEventListener("click", (e)=>{
            document.querySelector(".course_pop_up").remove();
            document.body.style.overflow = 'auto';
        });
    });
});