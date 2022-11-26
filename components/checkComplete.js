const checkComplete = () =>{
  const i = document.createElement("i")
  i.classList.add("far","fa-check-square","icon");
  i.addEventListener("click",completeTask);
  return i;
}

//EVENT sirve para saber las propuedades de lo que se esta tocando 
const completeTask=(event) =>{
  //target es el elemento  que es llamado en el evento y da la posicion 
const element = event.target
element.classList.toggle("fas")
element.classList.toggle("completeIcon")
element.classList.toggle("far")
}


export default checkComplete;