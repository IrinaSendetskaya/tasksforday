var arrayTasks = [];

function addTask(e) {

    if (e.keyCode === 13) {
        arrayTasks.unshift(document.getElementsByClassName("task_add_new")[0].value);
        showTask();
        document.getElementsByClassName("task_add_new")[0].value = "";
    }

}

function showTask() {

    var containerAllTasks = document.body.getElementsByClassName("tasks_all")[0];
    var newElementTask = document.createElement('div');
    newElementTask.className = 'task_active';
    newElementTask.innerHTML = '<input type="checkbox" class="task_checkbox"' +
        ' onclick="selectTask()"><label class="task_label_checkbox"></label>' +
        '<button class="task_button_delete" onclick="deleteTask(event)">X</button>'
    containerAllTasks.insertBefore(newElementTask, containerAllTasks.firstChild);

    document.getElementsByClassName('task_label_checkbox')[0].innerHTML = arrayTasks[0];
    countTasks();
}

function deleteCompletedTask() {

    var containerTaskActive = document.querySelectorAll('.task_active');

    for (var i = 0; i < containerTaskActive.length; i++) {
        var childTask = containerTaskActive[i].firstElementChild;
        if (childTask.matches(':checked')) {
            var deleteLabel = containerTaskActive[i].getElementsByClassName("task_label_checkbox")[0].innerHTML;
            var indexDelete = arrayTasks.indexOf(deleteLabel);
            arrayTasks.splice(indexDelete, 1);
            var deleteElement = containerTaskActive[i].remove();
        }
        countTasks();
    }
}

function deleteTask(e) {

    var containerDeleteTask = e.target.parentNode;
    var deleteLabel = containerDeleteTask.getElementsByClassName("task_label_checkbox")[0].innerHTML;
    var indexDelete = arrayTasks.indexOf(deleteLabel);
    arrayTasks.splice(indexDelete, 1);
    var deleteElement = containerDeleteTask.remove();

    countTasks();
}

function countTasks() {
    document.getElementsByClassName('task_label_count')[0]
        .innerHTML = arrayTasks.length;
}

function selectTask() {
    var container = document.querySelectorAll('.task_label_checkbox');

}