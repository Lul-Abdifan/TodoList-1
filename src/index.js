// import _ from 'lodash';
import { constant } from 'lodash';
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
    index:tasks.length + 1,
    checked:false
  }
tasks.push(task);

 

}





}


renderToDo();
function renderToDo()
{
 lists.innerHTML='';
  tasks.forEach((task,index)=>{
   
    lists.innerHTML +=`<div class="item" ${task.index}>
    <i class="bi bi-check-circle"></i>
    <p data-action='edit'id="description">${task.description}</p>
    <div class="crudMarker">
    <i class="bi bi-pencil-square"></i>
    <i class="bi bi-trash-fill " id="delete-button"></i>
    </div>
    `
  }
  )
  }

  
  
    




 
 
  

  





























  // for rendering

 
 
//  lists.innerHTML+=
//     

