var arrayTasks;

function show_task() {
    document.querySelector('input').addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            arrayTasks.unshift(document.getElementById("task_add_new").value);
            // arrayTasks.forEach(element => {
            //     document.getElementById('resultTask').innerHTML = arrayTasks[element];
            // }); 
            // for(var element in arrayTasks){
            //     document.getElementById('resultTask').innerHTML = arrayTasks[0];
            // }
            for (var i = 0; i < arrayTasks.length; i++) {
                document.getElementById('resultTask').innerHTML = arrayTasks[i];
              }
            document.getElementById("task_add_new").value = "";
            alert("Pressed " + arrayTasks);
        }
    });
};