import Todo, { tasks } from './Todo.js';
import { inputValue } from './variables.js';

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
  deleteToDo(targetId);
}

export { editTodo, deleteToDo };
