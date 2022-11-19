// import _ from 'lodash';
// import { constant, set } from 'lodash';
import './style.css';
import { addItems, lists } from './modules/variables.js';
import Todo, { tasks } from './modules/Todo.js';
import { deleteToDo, editTodo,checkToDo } from './modules/crud.js';

Todo.renderToDo();
addItems.addEventListener('submit', (e) => {
  e.preventDefault();
  Todo.saveTodo();
  Todo.renderToDo();
  localStorage.setItem('tasks', JSON.stringify(tasks));
});
lists.onclick = (e) => {
  const { target } = e;
  const parentEle = target.parentNode;
  const item = parentEle;
  if (parentEle.className !== 'item') return;
  const targetId = Number(item.id);
  const { action } = target.dataset;

  if (action === 'delete' && deleteToDo(targetId)) ;
  if (action === 'edit' && editTodo(targetId)) ;
  if(action === 'check' && checkToDo(targetId));
};
Todo.renderToDo();