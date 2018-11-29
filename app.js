//Ui vars
"use strict";

const taskForm = document.querySelector('#task-form');
const taskFilter = document.querySelector('#filter');
const deleteButton = document.querySelector('.button .clear-tasks');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.list');
const tasks = document.querySelectorAll('.list-item');
// Add all event listeners
loadEventListeners();

function loadEventListeners() {
    taskForm.addEventListener('submit', addTask);
    taskList.addEventListener('click', taskDelete);
    taskFilter.addEventListener('keyup', filterTask);
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('Add Task !!!');
    }

    const taskItem = document.createElement('div');
    taskItem.className = 'list-item';
    taskItem.appendChild(document.createTextNode(taskInput.value));
    const deleteItem = document.createElement('span');
    deleteItem.className = 'x';
    deleteItem.appendChild(document.createTextNode('x'));
    taskItem.appendChild(deleteItem);
    //  console.log(taskItem);
    //  console.log(taskList);
    taskList.appendChild(taskItem);
    taskInput.value = '';
    e.preventDefault();
}

function taskDelete(e) {
    if (e.target.parentElement.classList.contains('list-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.remove();
        }
    }
}

function filterTask(e) {

    const text = e.target.value.toLowerCase();
    console.log(text);
    tasks.forEach(task => {
        console.log(task.firstChild.textContent);
        const taskValue = task.firstChild.textContent.toLowerCase();
        console.log(taskValue.indexOf(text));
        if (taskValue.indexOf(text) !== -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}