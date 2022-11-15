// import _ from 'lodash';
import './style.css';

let taskLists = JSON.parse(localStorage.getItem('todos')) || [];
let editTodoId = -1;
const otherlist = document.querySelector('.list-item');
const addItems = document.getElementById('addItem');
const toDos = document.getElementById('to-dos');


addItems.addEventListener('submit', function(e)
{
e.preventDefault();
// console.log("submit");
saveTodo();
renderTodo();
;})

function saveTodo()
{
  
  const todoValue =toDos.value;
    //for duplication
    const duplicated =taskLists.some((n)=>n.value === todoValue);
    //case duplication
    const lowerDuplicated =taskLists.some((n)=>n.value.toUpperCase() === todoValue.toUpperCase());
  //not in the requirement
  if(todoValue==="")
  {
    alert("empty")
  }

  else if(duplicated ||lowerDuplicated)
  {  
    alert("this is in the lists")
  }
  else{
    if (editedId >= 0)  {
      // update the edit todo
    taskLists = taskLists.map((todo, index) => ({
 
     value: todoValue,
        completed: false,
      }))
    }
    else{
    const todo ={
      
      value:todoValue,
      checked:false,
      color:'#' + Math.floor(Math.random()*16777215).toString(16)
  
    }
    taskLists.push(todo);
    taskLists.push({
      value:todoValue,
      checked:false,
      color:'#' + Math.floor(Math.random()*16777215).toString(16)
  
    })
    toDos.value="";

  }}


}
//render to do
function renderTodo()
{
  // to clear the previous render
  otherlist.innerHTML = "";
  taskLists.forEach((todo,index)=>{
    otherlist.innerHTML+=
    `
    <div class="item" id=${index}>
    <i class="fa-regular ${todo.checked ? 'fa-square-check' : 'fa-square'}"
    data-action='check'
    ></i>
   
    <p data-action='edit'id="description">${todo.value}</p>
    <i class="fa-solid fa-trash" data-action='delete'>
    <i class="fa-solid fa-ellipsis-vertical" data-action='move'></i>
    </i>
</div>`

    

})

}


//add event listener

otherlist.addEventListener('click', (e) => {
const target =e.target;
const parentEle = target.parentNode;
if (parentEle.className !== 'item') return;

const item = parentEle;
const itemId = Number(item.id);
console.log(itemId);
const action =target.dataset.action;
if (action === 'check' && checkTodo(itemId)) return;
action === 'edit' && editTodo(itemId)
// // action === 'move' && moveTodo(itemId);
action === 'delete' && deleteTodo(itemId);

})


  function checkTodo(itemId)  {
    // taskLists =taskLists.map((todo,index)=>{
    //   if(index===itemId)
    //   {
    //     return{
    //       value:todo.value,
    //       color:todo.color,
    //       checked:!todo.checked
        
    //     }
    //   }
    //   else{
    //     return{
    //       value:todo.value,
    //       color:todo.color,
    //       checked:todo.checked
        
    //     }

    //   }
    // })
    // taskLists =  taskLists.map((todo, index) => ({
    //   ...todo,
    //   checked: index === itemId ? !todo.checked : todo.checked,
    // }));checkTodo = (itemId) => {
      taskLists = taskLists.map((todo, index) => ({
        ...todo,
        checked: index === itemId ? !todo.checked : todo.checked,
      }));

}
function editTodo(itemId)
{
  console.log("editing")
  toDos.value = taskLists[itemId].value;
  editedId=itemId;
}
function deleteTodo(itemId)
{
  taskLists =taskLists.filter((todo,index)=>index!==itemId);
  renderTodo();
}
