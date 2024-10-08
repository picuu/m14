const init = () => {
  exercici1()
  exercici2()
  exercici3()
  exercici4()
}

const printToDom = (container, text) => {
  const result = document.createElement('p')
  result.textContent = text
  container.appendChild(result)
}

const exercici1 = () => {
  const title = document.querySelector('#title')
  const list = document.querySelector('#list')
  const paragraph = document.querySelector('#paragraph')

  title.textContent = 'Títol modificat'
  
  const newListItem = document.createElement('li')
  newListItem.textContent = 'Nou element de la llista'

  list.appendChild(newListItem)

  const btn = document.querySelector('#canviText')
  btn.addEventListener('click', () => {
    paragraph.textContent = 'Paràgraf modificat'
  })

}

const exercici2 = () => {
  const div = document.querySelector('#ex2-div')
  div.addEventListener('click', () => {
    div.style.backgroundColor = 'rgba(25 100 255 / .5)'
    div.style.fontSize = '24px'
  })
}

const exercici3 = () => {
  const form = document.querySelector('#ex3-form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const { text } = Object.fromEntries(new FormData(form))

    const container = document.querySelector('#ex3-container')
    const p = document.createElement('p')
    p.textContent = text
    container.appendChild(p)
  })
}

const exercici4 = () => {

  const initList = () => {
    const form = document.querySelector('#ex4-form')
  
    const list = new Map()
  
    form.addEventListener('submit', (e) => {
      e.preventDefault()
  
      const { item } = Object.fromEntries(new FormData(form))
  
      if (!item || item === '' || item.trim() === '') return
  
      const itemId = Symbol()
      list.set(itemId, { itemId, itemText: item })
  
      renderList(list)
      clearFormInput(form)
    })
  }
  
  const renderList = (list) => {
    const domList = document.querySelector('#ex4-list')
  
    domList.replaceChildren()
  
    list.forEach((item) => {
      const itemContainer = document.createElement('div')
      const listItem = document.createElement('li')
      const itemWrapper = document.createElement('div')
      const itemDescription = document.createElement('span')
      const buttonsWrapper = document.createElement('div')
      const deleteBtn = document.createElement('button')
      const markAsDoneBtn = document.createElement('button')

      if (item.isDone) {
        itemContainer.classList.add('done')
        itemDescription.style.textDecoration = 'line-through'
      }
  
      itemContainer.classList.add('item-container')
      itemWrapper.classList.add('item-wrapper')
      buttonsWrapper.classList.add('buttons-wrapper')
      deleteBtn.classList.add('delete-btn')
      markAsDoneBtn.classList.add('markAsDone-btn')
      
      itemDescription.textContent = item.itemText
      deleteBtn.textContent = 'Borrar'
      markAsDoneBtn.textContent = item.isDone ? 'Marcar com a pendent' : 'Marcar com a realitzat'
  
      deleteBtn.addEventListener('click', () => deleteItem(item.itemId, list))
      markAsDoneBtn.addEventListener('click', () => markAsDone(item.itemId, list))
  
      buttonsWrapper.appendChild(markAsDoneBtn)
      buttonsWrapper.appendChild(deleteBtn)
      itemWrapper.appendChild(itemDescription)
      itemWrapper.appendChild(buttonsWrapper)
      listItem.appendChild(itemWrapper)
      itemContainer.appendChild(listItem)
      domList.appendChild(itemContainer)
    })
  
    if (list.size === 0) {
      const infoText = document.createElement('p')
      infoText.textContent = 'Encara no hi ha cap suggeriment...'
      domList.appendChild(infoText)
    }
  }
  
  const deleteItem = (itemId, list) => {
    list.delete(itemId)
    renderList(list)
  }


  const markAsDone = (itemId, list) => {
    const item = list.get(itemId)
    item.isDone = item.isDone ? false : true
    renderList(list)
  }
  
  const clearFormInput = (form) => {
    const input = form.querySelector('input')
    input.value = ''
  }
  
  initList()
  
}

init()
