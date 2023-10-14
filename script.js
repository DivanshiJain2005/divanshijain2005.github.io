document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const passwordForm = document.getElementById('password-form');
    const passwordInput = document.getElementById('password');

    // Array to store tasks
    let tasks = [];

    // Function to display tasks
    function displayTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task;
            li.dataset.index = index;
            taskList.appendChild(li);
        });
    }

    // Add task event listener
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newTask = document.getElementById('new-task').value;
        if (newTask.trim() !== '') {
            tasks.push(newTask);
            displayTasks();
            document.getElementById('new-task').value = '';
        }
    });

    // Delete task event listener
    passwordForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskIndex = parseInt(prompt('Enter the task number to delete:'));
        const enteredPassword = passwordInput.value;
        
        // Check password (this is a basic example, not secure)
        if (enteredPassword === 'yourpassword') {
            if (!isNaN(taskIndex) && taskIndex >= 0 && taskIndex < tasks.length) {
                tasks.splice(taskIndex, 1);
                displayTasks();
            } else {
                alert('Invalid task number.');
            }
        } else {
            alert('Incorrect password.');
        }
        
        // Clear the password input
        passwordInput.value = '';
    });

    // Initial display of tasks
    displayTasks();
});
