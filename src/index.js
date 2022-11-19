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

const clear = document.getElementById('clear');
clear.addEventListener('click',(e)=>
{
  e.preventDefault();
  console.log("Im joining here");
   const completedArray = JSON.parse(localStorage.getItem('tasks'));
    console.log(completedArray);
  const gonnaCompleted = completedArray.filter((todo) => todo.checked === false);
  console.log(gonnaCompleted);
  localStorage.setItem('tasks', JSON.stringify(gonnaCompleted));
  window.location.reload();
  Todo.renderToDo();
})
















// const clear = document.getElementById('clear');
// clear.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log("Im joining here");
//   const list = JSON.parse(localStorage.getItem('tasks'));
//   const todoArr = list.filter((todo) => todo.completed === false);
//   todoArr.forEach((todo) => {
//     todo.index = 1 + todoArr.indexOf(todo);
//   });

//   localStorage.setItem('tasks', JSON.stringify(todoArr));
//   // window.location.reload();
// });