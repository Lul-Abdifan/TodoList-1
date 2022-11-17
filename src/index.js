// import _ from 'lodash';
import { constant, set } from 'lodash';
import './style.css';
import {lists,addItems,inputValue} from './modules/variables.js'
import Todo from './modules/Todo.js'
import {tasks} from './modules/Todo.js'
// import {deleteToDo,editTodo} from './modules/crud.js'


addItems.addEventListener('submit',function(e)
{
 
  e.preventDefault();
  Todo.saveTodo();
  Todo.renderToDo();
  localStorage.setItem('tasks',JSON.stringify(tasks));
})
lists.onclick=(e)=>
{  const { target } = e;
const parentEle = target.parentNode;
const item = parentEle;
if (parentEle.className !== 'item') return;
const targetId = Number(item.id);
 const action =target.dataset.action;
console.log("id",targetId)

action ==='delete' &&  deleteToDo(targetId-1);
action ==='edit' && editTodo(targetId-1);


}
export function deleteToDo (targetId)
  {
tasks.splice(targetId,1)
tasks.forEach((todo, index) => {
  todo.index = index + 1;})
   localStorage.setItem('tasks',JSON.stringify(tasks)); 
  
  Todo.renderToDo();

  }
  export function editTodo(targetId)
  {
    console.log("edit button toucheed")
    inputValue.value=tasks[targetId].description;
    deleteToDo(targetId);
 
  }
Todo.renderToDo();
