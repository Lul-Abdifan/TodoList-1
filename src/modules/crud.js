import Todo, { tasks } from './Todo.js';
import { inputValue } from './variables.js';

export function deleteToDo(targetId) {
  tasks.splice(targetId, 1);
  tasks.forEach((todo, index) => {
    todo.target = index + 1;
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));

  Todo.renderToDo();
}
export function editTodo(targetId) {
  inputValue.value = tasks[targetId].description;
  deleteToDo(targetId);
}

//   }
