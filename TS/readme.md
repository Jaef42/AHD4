# Gestor de Tareas

Este proyecto es un simple gestor de tareas desarrollado en JavaScript,
diseñado para permitir a los usuarios agregar, completar y eliminar tareas.

## Estructura del Proyecto.

El proyecto está organizado de la siguienta manera:
- `index.html`: Contiene la estructura básica de la página web con el formulario para agregar tareas y la lista de tareas.
- `style.css`: Archivo de estilos para dar formato a la página.
- `src/`
    - `task.ts`: Clase TypeScriot para representar una tarea.
    - `main.ts`: Código principal TypeScript que maneja la lógica de la aplicación.

## Uso

Una vez que el proyecto este funcionando en el navegador, el usuario puede:

- Agregar nueva tareas utilizando el formulario proporcionado.
- Marcar las tareas como completadas haciendo clic sobre la tarea correspondiente.
- Eliminar tareas haciendo clic en el botón de eliminar junto a cada tarea.

# Configuración de Typescript
El archivo `tsconfig.json` es utilizado para configurar el compilador de TypeScript. Aquí están las principales opciones de configuración

- `"target": ES5"`: Indica que el código TypeScript se compilará a JavaScript compatible con ES5. Asegura una mayor compatibilidad con navegadores y entorno antiguos.
- `"module": ES6"`: Inicia que se utilizarán módulos de ES6 en el código TypeScript. Esto permite utilizar las características de importación/exportación de ES6 en tú código.
- `"outDir": "./dist"`: Específicar el directorio de salida para los archivos compilados.
- `"strict": true"`: Habilitar todas las opciones estrictas del compilador de TypeScript para mejorar la seguridad y la calidad del código.
- `"include": ["src/**/*.ts"]"`: Específica que archivos TypeScript deben ser incluidos en la compilación.