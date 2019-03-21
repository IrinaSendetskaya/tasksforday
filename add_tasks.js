var arrayTasks = [];

function addTask(e) {

    if (e.keyCode === 13) {
        arrayTasks.unshift(document.getElementsByClassName("task_add_new")[0].value);

        showTask();
        document.getElementsByClassName("task_add_new")[0].value = "";
        console.log("Pressed " + arrayTasks);
        console.log("CountTasks " + arrayTasks.length);
        document.getElementsByClassName('task_label_count')[0]
        .innerHTML = arrayTasks.length;
    }

}

function showTask() {

    for (var i = 0; i < arrayTasks.length; i++) {
        document.getElementsByClassName('task_label_result')[0]
            .innerHTML = arrayTasks;
    }
}

function deleteCompletedTask() {
    
    var container = document.querySelectorAll('.task_completed');

    for(var i=0; i<container.length;i++){
        var childTask=container[i].firstElementChild;
        if(childTask.matches(':checked')){
            var deleteElement = container[i].remove();
        }
    }
}