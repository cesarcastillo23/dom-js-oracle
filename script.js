
import checkComplete from "./components/checkComplete.js"
import deleteTask from "./components/deleteTask.js"

//se toma bautiza al boton con data** para identificar
//a que seccion se refiere con precision separado del resto de codigo
const btn = document.querySelector("[data-form-btn]");
//
const createTask=(evento)=>{
  //para no recargar pagina
  evento.preventDefault();
  const input = document.querySelector("[data-form-input]");
  //se guarda como constante para darle un valor como variable
  const value =input.value;
  const list=document.querySelector("[data-list]")
  //se crea una seccion completa
  const task = document.createElement("li");
  //agregar clase del css
  task.classList.add("card")
  
  //se reemplaza por una seccion completa
  //const task = document.querySelector("[data-task]");
  //se asigan el espacio vacio
  input.value="";
  const taskContainer = document.createElement("div");
  taskContainer.appendChild(checkComplete());
  const titelTask = document.createElement("span");
  titelTask.classList.add("task");
  titelTask.innerHTML= value;
  taskContainer.appendChild(titelTask);
  
  //se hace la variacion del html directamente del script 
  // con comillas invertidas y ${} para los cambios del dom
  // const content= `
  // <i class="fas fa-trash-alt trashIcon icon"></i>`;
  //es para insertar la funcion de javascript en html
  //se asigan la ejecucion de la logica de agregar 
  task.appendChild(taskContainer);
  task.appendChild(deleteTask());
  list.appendChild(task);
}
//para tomar accion al hacer click y ejecutar la funcion
btn.addEventListener("click",createTask);






