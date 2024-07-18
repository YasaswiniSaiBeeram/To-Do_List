document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('new-task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask(taskText) {
        const taskItem = document.createElement('li');
        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;

        // Create edit button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        editBtn.addEventListener('click', function() {
            const newTaskText = prompt('Edit Task:', taskTextSpan.textContent);
            if (newTaskText !== null) {
                taskTextSpan.textContent = newTaskText;
            }
        });

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });

        // Create complete toggle
        taskTextSpan.addEventListener('click', function() {
            taskItem.classList.toggle('completed');
        });

        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(editBtn);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
    }

    // Add task on button click
    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    // Add task on Enter key press
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});
