function updateNoTaskMessage() {
    var taskList = document.getElementById('taskList');
    var noTaskMessage = document.querySelector('.no-task-message');

    if (taskList.children.length === 0) {
        noTaskMessage.style.display = 'block';
    } else {
        noTaskMessage.style.display = 'none';
    }
}

function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        var taskText = document.createElement('span');
        taskText.textContent = taskInput.value;
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '✖️';
        deleteButton.onclick = function() {
            li.remove();
            updateNoTaskMessage();
        };

        checkbox.onchange = function() {
            if (checkbox.checked) {
                taskText.style.textDecoration = 'line-through';
                taskText.style.color = '#e21919'; 
            } else {
                taskText.style.textDecoration = 'none';
                taskText.style.color = ''; 
            }
        };

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = '';

        updateNoTaskMessage();
    }
}

function clearAllTasks() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    updateNoTaskMessage();
}
