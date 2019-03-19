var arrayTasks = new Array();
function add_task(){
    document.querySelector('input').addEventListener('keydown', function(e) {
      if (e.keyCode === 13) {
        arrayTasks.push(document.getElementById("task_add_new").value);
        document.getElementById('resultTask').innerHTML = arrayTasks.join(", ");
        document.getElementById("task_add_new").value = "";
            alert("Pressed "+arrayTasks);
      }
    });
  };