const pop_up_template = `
<div class="course_pop_up">
        <button type="button" class="pop_up_course_X">X</button>
        <h4 class="pop_up_course_title">Titulo Curso</h2>
        <p class="pop_up_course_description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quasi at perferendis ex aut, enim provident amet ratione? Ex dolorem laudantium dignissimos sit amet sequi non veritatis perferendis dolorum aperiam.</p>
        <a href="" class="pop_up_course_button">Ver más</a>
</div>        
`;
const calendar_days = `<div class="calendar_day"><span class="hide_on_mobile hide_on_tablet">DOMINGO</span><span class="hide_on_desktop">DOM</span></div>
            <div class="calendar_day"><span class="hide_on_mobile hide_on_tablet">LUNES</span><span class="hide_on_desktop">LUN</span></div>
            <div class="calendar_day"><span class="hide_on_mobile hide_on_tablet">MARTES</span><span class="hide_on_desktop">MAR</span></div>
            <div class="calendar_day"><span class="hide_on_mobile hide_on_tablet">MIÉRCOLES</span><span class="hide_on_desktop">MIÉ</span></div>
            <div class="calendar_day"><span class="hide_on_mobile hide_on_tablet">JUEVES</span><span class="hide_on_desktop">JUE</span></div>
            <div class="calendar_day"><span class="hide_on_mobile hide_on_tablet">VIERNES</span><span class="hide_on_desktop">VIE</span></div>
            <div class="calendar_day"><span class="hide_on_mobile hide_on_tablet">SÁBADO</span><span class="hide_on_desktop">SÁB</span></div>`;
const calendar_item_template = `
    <p class="p">2</p><div class="calendar_item_courses_container"></div>
`;
const calendar_item_course = `<button value="0" class="calendar_item_course"></button>`
var calendar_container = document.querySelector(".calendar_container");
var calendar_nav_month = document.querySelector(".calendar_nav_month");
var nodosCurso = document.querySelectorAll(".calendar_item_course");
calendar_container.innerHTML = calendar_days;
var fechaPivot = new Date();
mostrarCalendario();
function mostrarCalendario()
{
    let mes = fechaPivot.getMonth();
    var textoMes;
    switch(mes)
    {
        case 0: 
        textoMes = "Enero";
        break;
        case 1: 
        textoMes = "Febrero";
        break;
        case 2: 
        textoMes = "Marzo";
        break;
        case 3: 
        textoMes = "Abril";
        break;
        case 4: 
        textoMes = "Mayo";
        break;
        case 5: 
        textoMes = "Junio";
        break;
        case 6: 
        textoMes = "Julio";
        break;
        case 7: 
        textoMes = "Agosto";
        break;
        case 8: 
        textoMes = "Septiembre";
        break;
        case 9: 
        textoMes = "Octubre";
        break;
        case 10: 
        textoMes = "Noviembre";
        break;
        case 11: 
        textoMes = "Diciembre";
        break;
        default:
            textoMes = "merengue";
    }
    let anio = fechaPivot.getFullYear();
    calendar_nav_month.textContent = textoMes + " " + anio;
    calendar_container.innerHTML = calendar_days;
    let primeroDelMes = new Date(new Date(anio, mes, 1));
    let primerDia = new Date(primeroDelMes);
    primerDia.setDate(primerDia.getDate() - primeroDelMes.getDay());
    for(var i = 0; i < 35; i++)
    {
        let item = document.createElement("div");
        item.className = "calendar_item";
        item.innerHTML = calendar_item_template;
        let fecha = new Date(primerDia);
        fecha.setDate(fecha.getDate() + i);
        item.querySelector(".p").textContent = fecha.getDate();
        if(fecha.getMonth() != mes)
        {
            item.className = "calendar_item_disabled";
        }
        else if(fecha.getMonth() == 10 && fecha.getFullYear() == 2024)
        {
            let idCurso = 0;
            switch(fecha.getDate())
            {
                case 5:
                    idCurso = 1;
                break;
                case 7:
                    idCurso = 2;
                break;
                case 10:
                    idCurso = 3;
                break;
                case 12:
                    idCurso = 4;
                break;
                case 14:
                    idCurso = 5;
                break;
                case 15:
                    idCurso = 6;
                break;
                case 21:
                    idCurso = 7;
                break;
            }
            if(idCurso != 0)
            {
                item.querySelector(".calendar_item_courses_container").innerHTML = calendar_item_course;
                item.querySelector(".calendar_item_course").value = idCurso;
            }
        }
        calendar_container.appendChild(item);
    }
    nodosCurso = document.querySelectorAll(".calendar_item_course");
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
}
function avanzarMes()
{
    let mesViejo = fechaPivot.getMonth();
    do
    fechaPivot.setDate(fechaPivot.getDate() + 1);
    while(fechaPivot.getMonth() == mesViejo);
    mostrarCalendario();
}

function retrocederMes()
{
    let mesViejo = fechaPivot.getMonth();
    do
    fechaPivot.setDate(fechaPivot.getDate() - 1);
    while(fechaPivot.getMonth() == mesViejo);
    mostrarCalendario();
}
var pop_up;
var nodo_cerrar_pop_up;
var nodo_titulo_pop_up;
var nodo_descripcion_pop_up;
var nodo_abrir_curso_pop_up;


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