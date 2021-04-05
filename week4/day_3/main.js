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
    const checky = document.createElement("input")
    checky.type = "checkbox"
    checky.class = "check"
    todoLi.innerText = `${newTask.name} (${newTask.priority})`
    todoLi.appendChild(checky)
    todoList.append(todoLi)
})

function finishTask(){
    const todoLiArray = todoList.childNodes
    for(li of todoLiArray){
        if(li.childNodes.checked === true){
            doneTask = li
            todoList.li.remove()
            completedList.append(doneTask)
        }
    }
}    

doneBtn.addEventListener("click", function(){
    finishTask()
})