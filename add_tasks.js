var arrayTasks = new Array();

function addTask() {
    document.querySelector('input').addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            arrayTasks.unshift(document.getElementsByClassName("task_add_new")[0].value);
            document.getElementsByClassName('task_label_result')[0].innerHTML = arrayTasks;
            // arrayTasks.forEach(element => {
            //     document.getElementById('resultTask').innerHTML = arrayTasks[element];
            // }); 
            // for(var element in arrayTasks){
            //     document.getElementById('resultTask').innerHTML = arrayTasks[0];
            // }
            document.getElementsByClassName("task_add_new")[0].value = "";
            alert("Pressed " + arrayTasks);
        }
    });
};

function showTask() {
    for (var i = 0; i < arrayTasks.length; i++) {
        document.getElementById('resultTask').innerHTML = arrayTasks[i];
    }
}