const deleteTask = () =>{
  const i = document.createElement("i")
  i.classList.add("fas","fa-trash-alt","trashIcon","icon");
    i.addEventListener("click",deleteIcon)
  return i;
  }
  const deleteIcon = (evento) =>{
  const parent = (evento.target.parentElement);
  parent.remove();
  }
  export default deleteTask;