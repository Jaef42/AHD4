//Importar la clase  tarea desde task.ts

import { Tarea } from "./task.js";
//Obtener referencias a los elementos del DOM
const tareaForm: HTMLFormElement = document.getElementById('task-form') as HTMLFormElement;

const tareaInput: HTMLInputElement= document.getElementById('task-input') as HTMLInputElement;

const tareaList: HTMLUListElement = document.getElementById('task-list') as HTMLUListElement;

//Crear array para almacenar las tareas
let tareas: Tarea[] = [];
//Función para agregar una nueva tarea
function addTask(descripcion: string): void{
    //Crear una nueva instancia de la clase Tarea
    const nuevaTarea: Tarea = new Tarea(descripcion);
    //Agregar la tarea al array de tareas
    tareas.push(nuevaTarea);
    //Actualizar la lista de tareas en el DOM
    renderTareas();
}
//Función para renderizar la lista de tareas en el DOM
function renderTareas(): void{
    //Limpiar la lista de tareas en el DOM
    tareaList.innerHTML = '';
    //Iterar sobre todas las tareas
    tareas.forEach(tarea => {
        const li: HTMLLIElement = document.createElement('li');
        li.textContent = tarea.descripcion;
        

        const eliminatBtn: HTMLButtonElement = document.createElement('button');
        eliminatBtn.textContent = "Eliminar";
        eliminatBtn.classList.add('eliminar-btn')
        eliminatBtn.addEventListener('click', () => {
            eliminarTarea(tarea);
        });

        if(tarea.completado){
            li.classList.add('completada');
        }
       

        //Agregar un evento click para maracar una tarea completada
        li.addEventListener('click', () => {
            tarea.tareaCompletada();
            renderTareas();
        });

        li.appendChild(eliminatBtn);
        tareaList.appendChild(li);

    });
}
function eliminarTarea(tareaEliminar: Tarea){
    tareas = tareas.filter(tarea => tarea !== tareaEliminar);
    renderTareas();
}
//
tareaForm.addEventListener('submit', event => {
    event.preventDefault();
    const descripcion: string = tareaInput.value.trim();
    if (descripcion !== '')
        addTask(descripcion);
        tareaInput.value = "";
});
//Renderizar la lista de tareas al cargar la página
renderTareas();