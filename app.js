//Ui vars
const taskForm = document.querySelector('#task-form');
const taskFilter = document.querySelector('#filter');
const deleteButton = document.querySelector('.button .clear-tasks');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.list');

// Add all event liseners
loadEventListeners();

function loadEventListeners() {
    taskForm.addEventListener('submit', addTask);
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('Add Task !!!')
    }
    
    const taskItem = document.createElement('div');
    taskItem.className = 'list-item';
    taskItem.appendChild(document.createTextNode(taskInput.value));
    const deleteItem = document.createElement('span');
    deleteItem.className = 'x';
    deleteItem.appendChild(document.createTextNode('x'));
    taskItem.appendChild(deleteItem);
    console.log(taskItem);
    console.log(taskList);
    taskList.appendChild(taskItem);
    taskInput.value = '';
    e.preventDefault();
}