//Using MVC architecture
/*
M = MODEL
V = VIEW
C = CONTROLLER
*/

// MODEL is related to data.
let todo = []

function createTodo(title, dueDate){
    const id = "" + new Date().getTime()
    todo.push({
        title: title,
        dueDate: dueDate,
        id: id
    })
}

function removeTodo(idToDelete){
    todo = todo.filter(function(todo){
        if (todo.id === idToDelete){
            return false
        } else {
            return true
        }
    })
}

//VIEW is responsible for visuals.
function render(){
    document.getElementById("list").innerHTML = ""
    
    todo.forEach(function(todo){
    const element = document.createElement("div")
    element.innerText = todo.title + " " + todo.dueDate
        
    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete"
    deleteBtn.style = "margin-left: 12px;"
    deleteBtn.onclick = deleteTodo
    deleteBtn.id = todo.id
    element.appendChild(deleteBtn)
        
    const todoList = document.getElementById("list")
    todoList.appendChild(element)
    })
}



//CONTROLLER joins the MODEL and VIEW
function addTodo(){
    const textbox = document.getElementById("todo-title")
    const title = textbox.value
    const datePicker = document.getElementById("date-todo")
    const dueDate = datePicker.value
    createTodo(title, dueDate)
    render()
}

function deleteTodo(event){
    const deleteBtn = event.target
    const idToDelete = deleteBtn.id
    removeTodo(idToDelete)
    render()
}