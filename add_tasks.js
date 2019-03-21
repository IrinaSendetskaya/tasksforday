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

    var taskIn=document.body.getElementsByClassName('task_all');
document.body.insertBefore;
    for (var i = 0; i < arrayTasks.length; i++) {
        // taskIn[i].innerHTML="<div class="task_all">
        // <input type="checkbox" class="task_checkbox">
        // <label for="task_checkbox" class="task_label_result">
        // </label></div>";
        
        document.getElementsByClassName('task_label_result')[0]
            .innerHTML = arrayTasks;
    }
}

function deleteCompletedTask() {

    var container = document.querySelectorAll('.task_all');

    for(var i=0; i<container.length;i++){
        var childTask=container[i].firstElementChild;
        if(childTask.matches(':checked')){
            var deleteElement = container[i].remove();
        }
    }
}