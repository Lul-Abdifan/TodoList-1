// import _ from 'lodash';
import './style.css';

const list = document.querySelector('.list-item');

const tasks = [
  {
    index: 0,
    description: 'Do sport',
    completed: true,
  },
  {
    index: 1,
    description: 'Do project in time',
    completed: true,
  },
  {
    index: 2,
    description: 'Coding challenges',
    completed: true,
  },
];

const render = (task) => {
  const div = document.createElement('div');
  div.innerHTML = `
    <h3>
        <input type="checkbox">
            ${task.description}
    </h3>
        <div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    `;
  div.classList.add('list');
  list.appendChild(div);
};

document.addEventListener('DOMContentLoaded', () => {
  tasks.sort((a, b) => a.index - b.index)
    .map((item) => render(item));
});
