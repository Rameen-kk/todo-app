const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;
    
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    li.querySelector('.delete-btn').addEventListener('click', function(e) {
        e.stopPropagation();
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = '';
}
