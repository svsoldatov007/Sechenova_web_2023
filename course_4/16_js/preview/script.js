'use strict'

// console.log(window)
// console.log(document)

// Параметры документа, окна
const box = document.querySelector('.box'),
  btn = document.querySelector('buttn')

// &&, ||, ==, ===
// btn?.textContent = 'New Button'

// console.log(box.offsetTop)
btn?.addEventListener('click', (e) => {
  console.log(box?.scrollTop)
})
// console.log('Hello')

// rest-оператор и параметры по умолчанию

// spread-оператор

const mas1 = [1, 2, 3, 4]
const mas2 = [5, 6, 7, 8]

const mas3 = [...mas1, ...mas2]
// console.log(mas3)

function calc(obj, ...args) {
  // console.log(args)
}
const obj = { a: 10, b: 15 }
calc(obj, 12, 15, 1, 44, 0.2)

const renderCard = function (width, height, text, color = 'black') {
  return `<div style="width: ${width}; height:${height}; color: ${color}">${text}</div>`
}

// console.log(renderCard(100, 50, 'Hello!', 'red'))

// JSON формат и глубокое копирование
let number = 3456
let newNumber = number
number = 0
console.log(newNumber)

const student = {
  name: 'Student',
  age: 20,
  parents: {
    mom: 'Student - Mom',
    dad: 'Student - Dad',
  },
}

// когда хотите скопировать массив, объект или другой встроенный класс (Date, Error etc)
const copyStudent = JSON.parse(JSON.stringify(student))

student.age = 35
student.parents.mom = 'New Mom'

console.log(copyStudent)

// классы (ES6)
class Car {
  constructor(countWheels, color, volumeEngine) {
    this.countWheels = countWheels
    this.color = color
    this.volumeEngine = volumeEngine
    this.x = 0
    this.y = 0
  }

  move(x, y) {
    this.x = x
    this.y = y
    console.log(`Car coordinates are ${this.x} and ${this.y}`)
  }
}

class Audi extends Car {
  constructor(countWheels, color, volumeEngine, equipment) {
    super(countWheels, color, volumeEngine)
    this.equipment = equipment
  }

  renderAudiCard() {
    return `<div class=""></div>`
  }
}

const car1 = new Car(4, 'black', 2)
const car2 = new Car(8, 'white', 5)
car1.color = 'red'
// console.log(car1.x)
// car1.move(100, 50)
// console.log(car1.x)
//
const audi = new Audi(4, 'red', 3, 'Top')
audi.move(1111, 222)
