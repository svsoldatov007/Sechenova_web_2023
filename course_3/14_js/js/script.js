'use strict'
// let number = 5
// debugger

// function logNumner() {
//   let number = 4
//   debugger
//   console.log(number)
// }

// number = 6
// debugger
// logNumner()

// number = 10
// debugger
// logNumner()

function createCounter() {
  let counter = 0
  debugger

  const increaseCounter = () => {
    counter += 1
    debugger
    return counter
  }
  return increaseCounter
}

const counter = createCounter()
const c1 = counter()
debugger
const c2 = counter()
debugger
const c3 = counter()
debugger
console.log(c1, c2, c3)

// динамическая типизация
// const number2 = '14'
// const newNum = number2.toString()
// console.log(typeof number2)
// const fontSize = +number2 + 'px'
// const url = `https://likeadog.ru/dogs/${number2}`

Number(number2)

console.log(+'10px' + 5)

if (+'10px' + 5) {
  // console.log(true)
}

// const countofPages = 10

Boolean(countofPages)
// 0, '', null, undefined, false, NaN
if (countofPages) {
  // console.log(true)
}
