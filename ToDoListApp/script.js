let input = document.querySelector(".input");
let taskList = document.querySelector(".task-list");
let addBtn = document.getElementById("addBtn");


function addTask() {
    if (input.value === '') {
        alert("Please, add a task first");
    } else {
        let task = document.createElement("li");
        task.innerHTML = input.value;
        taskList.appendChild(task);

        let remove = document.createElement("span");
        remove.innerHTML = "\u00d7";

        task.appendChild(remove);
    }
    input.value = '';
    saveTask();
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

taskList.addEventListener("click", function(e){
    let clickedElement = e.target
    if(clickedElement.tagName === 'LI'){
        clickedElement.classList.toggle("checked");
        saveTask();
    }
    else if(clickedElement.tagName === 'SPAN'){
        clickedElement.parentElement.remove();
        saveTask();
    }
});

function saveTask() {
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}

showTask();