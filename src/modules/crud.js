import Todo, { editId, tasks } from './Todo.js';
import { inputValue } from './variables.js';

// let editId = -1;
function deleteToDo(targetId) {
  tasks.splice(targetId, 1);
  tasks.forEach((todo, index) => {
    todo.index = index + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));

  Todo.renderToDo();
}
function editTodo(targetId) {
  inputValue.value = tasks[targetId].description;
  editId = targetId;
}
function checkToDo(targetId)
{
 
  tasks =tasks.map((todo,id)=>
   ({
    ...todo,
    checked:id===targetId ? !todo.checked:todo.checked
   })

  )
  Todo.renderToDo();
localStorage.setItem('tasks', JSON.stringify(tasks));
}


// function checkToDo(targetId)  {
//   console.log("check targetg is clicked");
//  tasks = tasks.map((todo, index) => ({
//     ...todo,
//     checked: index === targetId ? !todo.checked : todo.checked,
//   }));
// Todo.renderToDo();
//   localStorage.setItem('tasks', JSON.stringify(tasks));
// };


export { deleteToDo, editTodo ,checkToDo };
