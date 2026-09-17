// @ts-nocheck

const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const formBtn = document.querySelector("#form-btn")
const taskCount = document.querySelector("#task-count")
const completeCount = document.querySelector("#complete-count")
const cancelBtn = document.querySelector("#cancel-btn")

let todos = [{
    id: Date.now() + 1,
    text: "Go to gym",
    isCompleted: false
}, {
    id: Date.now() + 2,
    text: "Take Lecture",
    isCompleted: true
}, {
    id: Date.now() + 3,
    text: "Review Code",
    isCompleted: false
}]

let editTodoId = null;

todoForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const todoValue = todoInput?.value.trim();

    if (!todoValue) {
        return
    }
    if (editTodoId) {
        //editing
        todos = todos.map((todo) => {
            if (todo.id === Number(editTodoId)) {
                return {
                    ...todo,
                    text: todoValue
                }
            }
            return todo
        })
    }
    else {
        //adding
        let newTodo = {
            id: Date.now(),
            text: todoValue,
            isCompleted: false
        }
        todos.push(newTodo)
    }

    todoInput.value = ""
    editTodoId = null
    formBtn.textContent = "Add"
    formBtn.classList.remove('bg-orange-600', 'hover:bg-amber-700')
    formBtn.classList.add('bg-indigo-600')
    cancelBtn.classList.add('hidden')

    renderTodo()
})

function renderTodo() {
    todoList.innerHTML = ""
    todos.forEach((todo) => {
        const li = document.createElement("li")
        // <li data-id="1" class="  flex gap-2 border border-slate-500 px-4 py-2 rounded-xl">
        li.dataset.id = todo.id; // this is original method

        li.className = `data-id="1" flex gap-2 border border-slate-500 px-4 py-2 rounded-xl`

        li.innerHTML = `
                    <input data-action="toogle" data-id=${todo.id} type="checkbox" data-action="toogle" ${todo.isCompleted === true ? `checked` : ""} class="cursor-pointer">
                    <p class="flex-1 ${todo.isCompleted ? "line-through text-slate-400" : ""}">${todo.text}</p>
                    <div class="flex gap-2 text-base font-semibold">
                        <button class="cursor-pointer px-2 text-amber-700 bg-amber-100 rounded-md" data-action="edit" data-id=${todo.id}>Edit</button>
                        <button class="bg-red-100 text-red-500 px-2  cursor-pointer rounded-md" data-action="delete" data-id=${todo.id}>Delete</button>
                    </div>
                </li> `
        todoList.append(li)
    })

    taskCount.textContent = `Tasks(${todos.length})`
    completeCount.textContent = `Completed : ${todos.filter((todo) => todo.isCompleted).length}`
}

renderTodo()
todoList.addEventListener('click', (e) => {
    e.stopPropagation()
    let li = e.target.closest('li')
    let btn = e.target.closest('button')
    let action = e.target.dataset.action
    let id = li?.dataset?.id
    let checkbox = e.target.closest('input[type = "checkbox"]')
    console.log(checkbox);

    if (action === "edit") {
        startEdit(id)
    }
    if (action === "delete") {
        deleteTodo(e, id)
    }
    if (action === "toogle") {
        todos = todos.map((todo) => {
            if (todo.id === Number(id)) {
                return {
                    ...todo,
                    isCompleted: !(todo.isCompleted)
                }
            }
            return todo
        })
        renderTodo()
    }
})
function deleteTodo(e, id) {
    e.target.closest('li').remove()

    todos = todos.filter((todo) => {
        if (todo.id !== Number(id)) {
            return todo
        }

    })
    renderTodo()
}

function startEdit(id) {
    editTodoId = id;

    isEdit = true;
    let currentTodo = todos.find((todo) => {
        if (todo.id === Number(id)) {
            return todo
        }
    })
    todoInput.value = currentTodo.text
    formBtn.textContent = "Update"
    formBtn.className =
        "px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors cursor-pointer";
    cancelBtn.classList.remove('hidden')

}

function cancelEdit() {
    editTodoId = null;

    todoInput.value = "";

    formBtn.textContent = "Add";

    formBtn.className =
        "px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors cursor-pointer";

    cancelBtn.classList.add('hidden')
}

cancelBtn.addEventListener("click",()=>{
    cancelEdit();
})