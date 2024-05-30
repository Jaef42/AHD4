//Importar la clase  tarea desde task.ts
import { Tarea } from "./task.js";
//Obtener referencias a los elementos del DOM
var tareaForm = document.getElementById('task-form');
var tareaInput = document.getElementById('task-input');
var tareaList = document.getElementById('task-list');
//Crear array para almacenar las tareas
var tareas = [];
//Función para agregar una nueva tarea
function addTask(descripcion) {
    //Crear una nueva instancia de la clase Tarea
    var nuevaTarea = new Tarea(descripcion);
    //Agregar la tarea al array de tareas
    tareas.push(nuevaTarea);
    //Actualizar la lista de tareas en el DOM
    renderTareas();
}
//Función para renderizar la lista de tareas en el DOM
function renderTareas() {
    //Limpiar la lista de tareas en el DOM
    tareaList.innerHTML = '';
    //Iterar sobre todas las tareas
    tareas.forEach(function (tarea) {
        var li = document.createElement('li');
        li.textContent = tarea.descripcion;
        var eliminatBtn = document.createElement('button');
        eliminatBtn.textContent = "Eliminar";
        eliminatBtn.classList.add('eliminar-btn');
        eliminatBtn.addEventListener('click', function () {
            eliminarTarea(tarea);
        });
        if (tarea.completado) {
            li.classList.add('completada');
        }
        //Agregar un evento click para maracar una tarea completada
        li.addEventListener('click', function () {
            tarea.tareaCompletada();
            renderTareas();
        });
        li.appendChild(eliminatBtn);
        tareaList.appendChild(li);
    });
}
function eliminarTarea(tareaEliminar) {
    tareas = tareas.filter(function (tarea) { return tarea !== tareaEliminar; });
    renderTareas();
}
//
tareaForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var descripcion = tareaInput.value.trim();
    if (descripcion !== '')
        addTask(descripcion);
    tareaInput.value = "";
});
//Renderizar la lista de tareas al cargar la página
renderTareas();
