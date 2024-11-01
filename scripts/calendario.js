const pop_up_template = `
<div class="course_pop_up">
        <button type="button" class="pop_up_course_X">X</button>
        <h4 class="pop_up_course_title">Titulo Curso</h2>
        <p class="pop_up_course_description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quasi at perferendis ex aut, enim provident amet ratione? Ex dolorem laudantium dignissimos sit amet sequi non veritatis perferendis dolorum aperiam.</p>
        <a class="pop_up_course_button">Ver más</a>
</div>        
`;
var pop_up;
var nodo_cerrar_pop_up;
var nodosCurso = document.querySelectorAll(".calendar_item_course");
nodosCurso.forEach((nodo)=>{
    nodo.addEventListener("click", (e)=>{
        document.querySelector(".pop_up_container").innerHTML = pop_up_template;
        pop_up = document.querySelector(".course_pop_up");
        document.body.style.overflow = 'hidden';
        nodo_cerrar_pop_up = pop_up.querySelector(".pop_up_course_X");
        nodo_cerrar_pop_up.addEventListener("click", (e)=>{
            document.querySelector(".course_pop_up").remove();
            document.body.style.overflow = 'auto';

        });
    });
});

