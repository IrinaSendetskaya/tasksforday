var arrayTasks = [];

function addTask(e) {

    if (e.keyCode === 13) {
        arrayTasks.unshift(document.getElementsByClassName("task_add_new")[0].value);

        showTask();
        document.getElementsByClassName("task_add_new")[0].value = "";
    }

}

function showTask() {

    var parentElem = document.body.getElementsByClassName("tasks_all")[0];
    var div = document.createElement('div');
    div.className = 'task_active';
    div.innerHTML = '<input type="checkbox" class="task_checkbox"><label class="task_label_result"></label>'
    parentElem.insertBefore(div, parentElem.firstChild);

    document.getElementsByClassName('task_label_result')[0].innerHTML = arrayTasks[0];

    countTasks();
}

function deleteCompletedTask() {

    var container = document.querySelectorAll('.task_active');

    for (var i = 0; i < container.length; i++) {
        var childTask = container[i].firstElementChild;
        if (childTask.matches(':checked')) {
            var deleteLabel = container[i].getElementsByClassName("task_label_result")[0].innerHTML;
            var indexDelete = arrayTasks.indexOf(deleteLabel);
            arrayTasks.splice(indexDelete, 1);
            var deleteElement = container[i].remove();
        }
        countTasks();
    }
}

function countTasks() {
    document.getElementsByClassName('task_label_count')[0]
        .innerHTML = arrayTasks.length;
}