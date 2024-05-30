//Definir la clase task
export class Tarea{
    descripcion: string;
    completado: boolean;

    //Constructir de la clase Tarea.
    constructor(descripcion: string){
        this.descripcion = descripcion;
        this.completado = false;
    }


//Método para marcar la tarea como completada
    tareaCompletada(){
    this.completado = !this.completado;
    }
}