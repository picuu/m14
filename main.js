const init = () => {
  const form = document.querySelector('#todo-form')

  const taskList = new Map()

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const { task } = Object.fromEntries(new FormData(form))

    if (!task || task === '' || task.trim() === '') return

    const taskId = Symbol()
    taskList.set(taskId, { taskId, taskText: task })

    renderList(taskList)
    clearFormInput(form)
  })
}

const renderList = (taskList) => {
  const todoList = document.querySelector('#todo-list')

  todoList.replaceChildren()

  taskList.forEach((task) => {
    const taskContainer = document.createElement('div')
    const listItem = document.createElement('li')
    const taskWrapper = document.createElement('div')
    const taskDescription = document.createElement('span')
    const deleteBtn = document.createElement('button')

    taskContainer.classList.add('task-container')
    taskWrapper.classList.add('task-wrapper')
    taskDescription.textContent = task.taskText
    deleteBtn.textContent = 'Delete task'

    deleteBtn.addEventListener('click', () => deleteTask(task.taskId, taskList))

    taskWrapper.appendChild(taskDescription)
    taskWrapper.appendChild(deleteBtn)
    listItem.appendChild(taskWrapper)
    taskContainer.appendChild(listItem)
    todoList.appendChild(taskContainer)
  })

  if (taskList.size === 0) {
    const infoText = document.createElement('p')
    infoText.textContent = 'No tasks created yet...'
    todoList.appendChild(infoText)
  }
}

const deleteTask = (taskId, taskList) => {
  taskList.delete(taskId)
  renderList(taskList)
}

const clearFormInput = (form) => {
  const input = form.querySelector('input')
  input.value = ''
}

init()
