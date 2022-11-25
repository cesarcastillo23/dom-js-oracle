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
  //se hace la variacion del html directamente del script
  const content= `<div>
  <i class="far fa-check-square icon"></i>
  <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`;
  //es para insertar la funcion de javascript en html
  task.innerHTML= content;

  //se asigan la ejecucion de la logica de agregar 
  list.appendChild(task);
  console.log(content);
}
//para tomar accion al hacer click y ejecutar la funcion
btn.addEventListener("click",createTask);
