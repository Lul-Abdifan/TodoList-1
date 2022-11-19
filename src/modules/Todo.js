import { lists, inputValue } from './variables.js';

let editId = -1;
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
export default class Todo {
  constructor(inputValue, checked, index) {
    this.inputValue = inputValue;
    this.index = index;
    this.checked = checked;
  }

static saveTodo =() => {

    const task = {
      description: inputValue.value,
      index: tasks.length + 1,
      checked: false,
    };
    tasks.push(task);
    inputValue.value = '';
  } 
  

// static saveTodo =() => {
//   if (editId < 0) {
//   // update the edit todo
//   tasks = tasks.map((todo, index) => ({
//       ...todo,
//       description: index === editId ? inputValue.value : todo.description,
//     }));

//     editId = -1;
//   // } else {
//   //   tasks.push({
//   //     index: tasks.length + 1,
//   //     description: inputValue.value,
//   //     checked: false,
//   //   });
//   // }
//   }



static renderToDo() {
  lists.innerHTML = '';
  tasks.forEach((task, index) => {
    lists.innerHTML += `<div class="item" id=${index}>
    <i class="bi ${task.checked ? 'bi-check-circle-fill' : 'bi-check-circle'} " data-action='check'></i>
   
    <p data-action='edit'id="description">${task.description}</p>
  
    <i class="bi bi-pencil-square edit-button" data-action='edit'></i>
    <i class="bi bi-trash-fill " data-action='delete'></i>
   
    </div>
    `;
  });
}
}

export { tasks, editId };