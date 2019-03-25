var tasks = [];

function addTask(e) {
  if (e.keyCode === 13) {
    tasks.unshift({
      taskName: document.getElementsByClassName("task_add_new")[0].value,
      isCompleted: false
    });
    showTaskInserted();
    document.getElementsByClassName("task_add_new")[0].value = "";
  }
}

function showTaskInserted() {
  var containerAllTasks = document.body.getElementsByClassName("tasks_all")[0];
  var newElementTask = document.createElement("div");
  newElementTask.className = "task_active";
  newElementTask.innerHTML =
    '<input type="checkbox" class="task_checkbox" onchange="selectCompletedTask()"' +
    ' "><label class="task_label_checkbox"></label>' +
    '<button class="task_button_delete" onclick="deleteTask(event)">X</button>';
  containerAllTasks.insertBefore(newElementTask, containerAllTasks.firstChild);

  document.getElementsByClassName("task_label_checkbox")[0].innerHTML =
    tasks[0].taskName;
  countTasks();
}

function deleteCompletedTask() {
  var containerTaskActive = document.querySelectorAll(".task_active");

  for (var i = 0; i < containerTaskActive.length; i++) {
    var childTask = containerTaskActive[i].firstElementChild;

    if (childTask.matches(":checked")) {
      var deleteLabel = containerTaskActive[i].getElementsByClassName(
        "task_label_checkbox"
      )[0].innerHTML;
      var indexDelete = tasks.indexOf(deleteLabel);
      tasks.splice(indexDelete, 1);
      var deleteElement = containerTaskActive[i].remove();
    }
    countTasks();
  }
}

function deleteTask(e) {
  var containerDeleteTask = e.target.parentNode;
  var deleteLabel = containerDeleteTask.getElementsByClassName(
    "task_label_checkbox"
  )[0].innerHTML;
  var indexDelete = tasks.indexOf(deleteLabel);
  tasks.splice(indexDelete, 1);
  var deleteElement = containerDeleteTask.remove();

  countTasks();
}

function countTasks() {
  document.getElementsByClassName("task_label_count")[0].innerHTML =
    tasks.length;
}

function showTaskCompleted() {

  showTaskAll();
  var containerTaskActive = document.querySelectorAll(".task_active");

  for (var i = 0; i < containerTaskActive.length; i++) {
    var childTask = containerTaskActive[i].firstElementChild;

    if (!childTask.matches(":checked")) {
      var filterLabel = containerTaskActive[i].getElementsByClassName(
        "task_label_checkbox"
      )[0].innerHTML;
      var indexFilter = tasks.indexOf(filterLabel);
      var deleteElement = containerTaskActive[i].remove();
    }
  }
}

function filterCompletedTasks(e) {
  var containerSelectButtonFilter = e.target.parentNode;
  containerSelectButtonFilter.className = "filter_show bordered";
  console.log("from completed" + containerSelectButtonFilter);

  showTaskCompleted();
  containerSelectButtonFilter.className = "filter_show";
}

function showTaskActive() {

  showTaskAll();
  console.log("afer rerendering");
  console.log(tasks);
  var containerTaskActive = document.querySelectorAll(".task_active");

  for (var i = 0; i < containerTaskActive.length; i++) {
    var childTask = containerTaskActive[i].firstElementChild;

    if (childTask.matches(":checked")) {
      var filterLabel = containerTaskActive[i].getElementsByClassName(
        "task_label_checkbox"
      )[0].innerHTML;
      var indexFilter = tasks.indexOf(filterLabel);
      var deleteElement = containerTaskActive[i].remove();
    }
  }
}

function filterActiveTasks(e) {
  var containerSelectButtonFilter = e.target.parentNode;
  containerSelectButtonFilter.className = "filter_show bordered";

  showTaskActive();
  containerSelectButtonFilter.className = "filter_show";
}

function showTaskAll() {

  refreshAllTasks();

  console.log("afer refreshing");
  console.log(tasks);
  var containerAllTasks = document.body.getElementsByClassName("tasks_all")[0];

  for (var i = 0; i < tasks.length; i++) {
    var newElementTask = document.createElement("div");
    newElementTask.className = "task_active";

    if (tasks[i].isCompleted == true) {
      newElementTask.innerHTML =
        '<input type="checkbox" checked class="task_checkbox" onchange="selectCompletedTask()"' +
        ' "><label class="task_label_checkbox"></label>' +
        '<button class="task_button_delete" onclick="deleteTask(event)">X</button>';
    } else {
      newElementTask.innerHTML =
        '<input type="checkbox" class="task_checkbox" onchange="selectCompletedTask()"' +
        ' "><label class="task_label_checkbox"></label>' +
        '<button class="task_button_delete" onclick="deleteTask(event)">X</button>';
    }
    containerAllTasks.append(newElementTask);

    document.getElementsByClassName("task_label_checkbox")[i].innerHTML =
      tasks[i].taskName;
  }
  countTasks();
}

function filterAllTasks(e) {
  var containerSelectButtonFilter = e.target.parentNode;
  containerSelectButtonFilter.className = "filter_show bordered";

  showTaskAll();
  containerSelectButtonFilter.className = "filter_show";
}

function refreshAllTasks() {

  var containerTaskActive = document.querySelectorAll(".task_active");

  if (containerTaskActive.length > 0) {
    for (var i = 0; i < containerTaskActive.length; i++) {
      var childTask = containerTaskActive[i].firstElementChild;

      var filterLabel = containerTaskActive[i].getElementsByClassName(
        "task_label_checkbox"
      )[0].innerHTML;
      var indexFilter = tasks.indexOf(filterLabel);
      var deleteElement = containerTaskActive[i].remove();
    }
  }
}

function selectCompletedTask() {

  var containerTaskActive = document.querySelectorAll(".task_active");

  for (var i = 0; i < containerTaskActive.length; i++) {
    var childTask = containerTaskActive[i].firstElementChild;

    if (childTask.matches(":checked")) {
      var filterLabel = containerTaskActive[i].getElementsByClassName(
        "task_label_checkbox"
      )[0].innerHTML;
      var indexFilter = tasks.indexOf(filterLabel);
      tasks[i].isCompleted = true;
    } else {
      var filterLabel = containerTaskActive[i].getElementsByClassName(
        "task_label_checkbox"
      )[0].innerHTML;
      var indexFilter = tasks.indexOf(filterLabel);
      tasks[i].isCompleted = false;
    }
  }
  console.log("after selectCompletedTask fun");
  console.log(tasks);
}
