import { lists, addItems, inputValue } from './variables.js';

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
export default class Todo {
  // constructor(inputValue,checked,index)
  // {
  //   this.inputValue=inputValue;
  //   this.index=index;
  //   this.checked=checked;

  // }

static saveTodo =() => {
  const task = {
    description: inputValue.value,
    index: tasks.length,
    checked: false,
  };
  tasks.push(task);
  inputValue.value = '';
}

static renderToDo() {
  lists.innerHTML = '';
  tasks.forEach((task, index) => {
    lists.innerHTML += `<div class="item" id=${task.index}>
    <i class="bi ${task.checked ? 'bi-check-circle-fill' : 'bi-check-circle'} " data-action='check'></i>
   
    <p data-action='edit'id="description">${task.description}</p>
  
    <i class="bi bi-pencil-square" data-action='edit'></i>
    <i class="bi bi-trash-fill " data-action='delete'></i>
    </div>
    `;
  });
}
}
// const todo =new Todo(inputValue,false,0);
export { tasks };