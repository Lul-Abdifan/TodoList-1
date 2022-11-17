import Todo from './Todo.js'
import {lists,addItems,inputValue} from './variables.js'
import {tasks} from './Todo.js'

export function deleteToDo (targetId)
  {
tasks.splice(targetId,1)
tasks.forEach((todo, index) => {
  todo.target = index + 1;})
console.log(tasks);
   localStorage.setItem('tasks',JSON.stringify(tasks)); 
  
  Todo.renderToDo();

  }
  export function editTodo(targetId)
  {
    console.log("edit button toucheed")
    inputValue.value=tasks[targetId].description;
    deleteToDo(targetId);
 
  }

















//   }
