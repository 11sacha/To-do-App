let todos = []

const todoList = document.getElementById('todos')
const todoInput = document.getElementById('textInput')
const inputBtn = document.getElementById('add')
const plus = document.getElementById('plus')
const enterTodo = document.getElementById('enterTodo')

function showInput() {
    enterTodo.style.display = 'block'
}

plus.addEventListener('click', showInput)

function addTask(e) {
    e.preventDefault()
    let textValue = todoInput.value
    todos.push(textValue)
    todoList.innerHTML = ''
    renderTodos()
    todoInput.value = ''
}
inputBtn.addEventListener('click', addTask)

function removeTask(index) {
    todos = todos.filter((todo, i) => {
        return i === index ? false : true
    })
    todoList.innerHTML = ''
    renderTodos()
}

function editTask(index) {
    const currentElement = document.querySelector(`#todos div:nth-child(${index + 1}) p`).innerText
    const editedText = currentElement.slice(3)
    removeTask(index)
    todoInput.value = editedText
}

function renderTodos() {
    todos.forEach((todo, i) => {
        let currentHTML = todoList.innerHTML
        let newHTML = (
            `<div class="todoItem">
                <p>${i + 1}. ${todo}</p>
                <div class="actions">
                    <i onclick="editTask(${i})" class="fa-solid fa-pen-to-square"></i>
                    <i onclick="removeTask(${i})" class="fa-solid fa-trash"></i>
                </div>
            </div>`
        )

        let amendedHTML = currentHTML + newHTML
        todoList.innerHTML = amendedHTML
    })
}

renderTodos()
