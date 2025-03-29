let tasks = [];

function saveTask() {
    // Get form values
    const title = $('#txtTitle').val().trim();
    const description = $('#txtDescription').val().trim();
    const color = $('#txtColor').val();
    const date = $('#txtDate').val();
    const status = $('#txtStatus').val();
    const budget = parseFloat($('#txtBudget').val()) || 0;

    // Validate required fields
    if (!title || !status || !date) {
        alert('Please fill in all required fields (Title, Status, and Date)');
        return;
    }

    // Retrieve existing tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Create new task
    const newTask = new Task(title, description, color, date, status, budget);
    tasks.push(newTask);
    
    // Save to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    // Clear form
    $('#txtTitle').val('');
    $('#txtDescription').val('');
    $('#txtColor').val('#000000');
    $('#txtStatus').val('');
    $('#txtDate').val('');
    $('#txtBudget').val('');
    
    // Display tasks in console
    console.log(newTask);
    displayTasks(newTask);
}

function displayTasks(task) {
    let syntax = `
    <div class="task-container" style="border-color: ${task.color};">
        <div class="task">
            <div class="task-information">
                <h5> ${task.title}</h5>
                <p>${task.description}</p>
                </div>
                <div class="task-status">
                <p>${task.status}</p>
                </div>
                <div class="task-date-budget">
                <span>${task.date}</span>
                <span>${task.budget}</span>
            </div>
        </div>
    </div>
    `

    $('#list').append(syntax);
}


function init(){
    console.log("The init is running");

    $("#btnSave").click(saveTask);
    
    // Initially display any existing tasks in console

}

window.onload = init;