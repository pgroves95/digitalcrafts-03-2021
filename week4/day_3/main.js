const taskName = document.querySelector("#task-name")
const prioritySelect = document.getElementsByClassName("rad")
const addBtn = document.querySelector("#add-btn")
const todoList = document.querySelector("#to-do-list")
const completedList = document.querySelector("completed-list")
const doneBtn = document.querySelector("#done-btn")



function addTask(){
    const task = {
        name: null,
        priority: null,
    }
    task.name = taskName.value
    for(option of prioritySelect) {
        if(option.checked === true){
            task.priority = option.value
        }
    }
    return task
}

addBtn.addEventListener("click", function(){
    const newTask = addTask()
    const todoLi = document.createElement("li")
    const checked = document.createElement("input")
    checked.type = "checkbox"
    checked.name = "check"
    todoLi.innerText = `${newTask.name} (${newTask.priority})`
    todoLi.appendChild(checked)
    todoList.append(todoLi)
})

function finishTask(){

}    

doneBtn.addEventListener("click", function(){
    finishTask()
})