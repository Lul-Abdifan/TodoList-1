// import _ from 'lodash';
import { constant, set } from 'lodash';
import './style.css';

// let taskLists = JSON.parse(localStorage.getItem('todos')) || [];
let editTodoId = -1;
const lists = document.querySelector('.list-item');
const addItems = document.getElementById('addItem');
const inputValue= document.getElementById('to-dos');
let tasks=JSON.parse(localStorage.getItem('tasks')) || [];

addItems.addEventListener('submit',function(e)
{
 

  e.preventDefault();
 

 Todo.saveTodo();
 renderToDo();
 localStorage.setItem('tasks',JSON.stringify(tasks));

         

})




class Todo
{
  // constructor(inputValue,checked,index)
  // {
  //   this.inputValue=inputValue;
  //   this.index=index;
  //   this.checked=checked;

  // }

static saveTodo =()=>
{

  // const todo =new Todo(inputValue.value,false,tasks.length + 1);
  const task={
    description:inputValue.value,
    index:tasks.length ,
    checked:false
  }
tasks.push(task);
inputValue.value =''
 

}





}


renderToDo();
function renderToDo()
{
 lists.innerHTML='';
  tasks.forEach((task,index)=>{
   
    lists.innerHTML +=`<div class="item" id=${task.index}>
    <i class="bi ${task.checked ? 'bi-check-circle-fill':'bi-check-circle'} " data-action='check'></i>
   
    <p data-action='edit'id="description">${task.description}</p>
  
    <i class="bi bi-pencil-square" data-action='edit'></i>
    <i class="bi bi-trash-fill " data-action='delete'></i>
    </div>
    `
  }
  )
  }
  lists.onclick=(e)=>
  {
    const target =e.target;
   const action =target.dataset.action;
  const targetId = target.parentNode.id;
action ==='delete' && deleteToDo(targetId);
  }

  function deleteToDo(targetId)
  {
  tasks.filter((todo,index)=> index !==targetId);
  console.log(tasks);
tasks.splice(targetId,1)
console.log(tasks);
   localStorage.setItem('tasks',JSON.stringify(tasks));
   renderToDo();
  
//     console.log("delete",targetId)
//  console.log(tasks.filter((todo, index) => index !== targetId))
    // editTodoId = -1;
    // tasks.forEach((todo, index) => {
    // todo.target = index + 1;})



  }
  
    




 
 
  

  





























  // for rendering

 
 
//  lists.innerHTML+=
//     

