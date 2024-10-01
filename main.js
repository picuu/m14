function comparaNumeros (a, b) {
  console.log(a >= b ? a : b)
}

function suma1a100() {
  let count = 0
  for (let i = 0; i <= 100; i++) count += i
  console.log(count)
}

function PedraPaper() {
  for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log(i, 'Tisores')
    else if (i % 5 === 0) console.log(i, 'Paper')
    else if (i % 3 === 0) console.log(i, 'Pedra')
    else console.log(i)
  }
}

function esParell(num) {
  console.log(num % 2 === 0 ? true : false)
}

function revertirCadena(cadena) {
  console.log([...cadena].reverse().join(''))
}

function factorial(n) {
  if (n === 1) return n
  return n * factorial(n - 1)
}

function filtrarPositius(array) {
  console.log(array.filter(n => n >= 0))
}
