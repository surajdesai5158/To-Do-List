const inputBox = document.getElementById('input-box');
const todoList = document.getElementById('todo-list');

function addTask() {
    if (inputBox.value.trim() === '') {
        alert('Please enter a task!');
    } else {
        const li = document.createElement('li');
        li.innerHTML=inputBox.value;
        todoList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

todoList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        const li = e.target.parentElement;
        li.remove();
        saveData();
    }
}, false);

inputBox.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function saveData() {                           
    localStorage.setItem('data', todoList.innerHTML);
}

function showTask() {
    todoList.innerHTML = localStorage.getItem('data');
} 
showTask();