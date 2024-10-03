const init = () => {
  // Exercici 1
  const buttonEx1 = document.querySelector('#ex1-btn')
  const containerEx1 = document.querySelector('#ex1-container')
  buttonEx1.addEventListener("click", () => printToDom({ container: containerEx1, text: exercici1() }))
  
  // Exercici 2
  const buttonEx2 = document.querySelector('#ex2-btn')
  const containerEx2 = document.querySelector('#ex2-container')
  buttonEx2.addEventListener("click", () => printToDom({ container: containerEx2, text: exercici2() }))

  // Exercici 3
  const buttonEx3 = document.querySelector('#ex3-btn')
  const containerEx3 = document.querySelector('#ex3-container')
  buttonEx3.addEventListener("click", () => printToDom({ container: containerEx3, text: exercici3() }))

  // Exercici 4
  const buttonEx4 = document.querySelector('#ex4-btn')
  const containerEx4 = document.querySelector('#ex4-container')
  buttonEx4.addEventListener("click", () => printToDom({ container: containerEx4, text: exercici4() }))

  // Exercici 5
  const buttonEx5 = document.querySelector('#ex5-btn')
  const containerEx5 = document.querySelector('#ex5-container')
  buttonEx5.addEventListener("click", () => printToDom({ container: containerEx5, text: exercici5() }))

  // Exercici 6
  const ex6Form = document.querySelector('#ex6-form')
  const containerEx6 = document.querySelector('#ex6-container')

  ex6Form.addEventListener("submit", (e) => {
    e.preventDefault()
    const productProperties = Object.fromEntries(new FormData(ex6Form))
    printToDom({ container: containerEx6, text: exercici6(productProperties) })
  })

  // Exercici 7
  const buttonEx7 = document.querySelector('#ex7-btn')
  const containerEx7 = document.querySelector('#ex7-container')
  buttonEx7.addEventListener("click", () => printToDom({ container: containerEx7, text: exercici7() }))
}

const printToDom = ({ container, text }) => {
  const result = document.createElement('p')
  result.textContent = text
  container.appendChild(result)
}

const exercici1 = () => {
  const estudiant = {
    nom: 'Joan',
    edat: 20,
    notes: {
        matematiques: 8,
        programacio: 9,
        fisica: 7
    }
  }

  const { nom, edat, notes } = estudiant
  const { matematiques: notaMatematiques } = notes

  return `${nom} té ${edat} anys i ha tret un ${notaMatematiques} en matemàtiques.`
}

const exercici2 = () => {
  const coordenades = [12, 5, 8]

  const [x, y, z] = coordenades

  return `Les coordenades són x=${x}, y=${y}, z=${x}.`
}

const exercici3 = () => {
  const preus = [100, 200, 300, 400]

  const newPreus = preus.map(preu => parseInt(preu * 1.1))

  return newPreus.join(', ')
}

const exercici4 = () => {
  const edats = [16, 21, 18, 24, 12, 30]

  const over18 = edats.filter(edat => edat >= 18)

  return over18.join(', ')
}

const exercici5 = () => {
  const notes = [7, 9, 5, 10, 8]

  const average = notes.reduce((acumulator, current) => acumulator + current, 0) / notes.length

  return average
}

const exercici6 = (productProperties) => {
  const product = {...productProperties}
  product.price *= .95
  const { name, price, amount } = product

  console.log(product)

  return `{ nom: '${name}', preu: ${price}, quantitat: ${amount} }`
}

const exercici7 = () => {
  const cotxe = {
    marca: 'Tesla',
    model: 'Model S',
    preu: 80000
  }

  cotxe.any = 2024

  console.log(cotxe)

  return `{ marca: '${cotxe.marca}', model: '${cotxe.model}', preu: ${cotxe.preu}, any: ${cotxe.any} }`
}

init()
