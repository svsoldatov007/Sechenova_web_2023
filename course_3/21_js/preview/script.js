'use strict'

// console.log(window)
// console.log(document)

// Параметры документа, окна
const box = document.querySelector('.box'),
  btn = document.querySelector('button')

// console.log(box.scrollHeight)

// console.log(box.offsetTop)
btn?.addEventListener('click', (e) => {
  console.log(box?.scrollTop)
})

// rest-оператор и параметры по умолчанию

// spread-оператор
const mas1 = [1, 2, 3, 4]
const mas2 = [5, 6, 7, 8]

const mas3 = [...mas1, ...mas2]

function calc(obj, ...args) {
  // args - массив из всевозможного числа передаемых праматеров
  console.log(args)
}
const obj = { a: 10, b: 15 }
// calc(obj, 12, 15, 1)

const renderCard = function (width, height, text, color = 'black') {
  return `<div style="width: ${width}; height:${height}; color: ${color}">${text}</div>`
}

// console.log(renderCard(100, 50, 'Hello!'))

// JSON формат и глубокое копирование

const student = {
  name: 'Anton',
  age: 24,
  parents: {
    mom: 'Olga',
    dad: 'Mike',
  },
}

const studentCopy = JSON.parse(JSON.stringify(student))
student.parents.dad = 'Viktor'

console.log(student)
console.log(studentCopy)

// классы (ES6)
class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.massive = [0, 0]
  }

  calcSquare() {
    return this.width * this.height
  }

  sumArgs(callBack) {}
}

class ColorRectangleWihtText extends Rectangle {
  constructor(width, height, color, text) {
    super(width, height) // метод constructor родителя
    this.color = color
    this.text = text
  }

  renderText() {
    return `<div style="color: ${this.color}">${this.text}</div>`
  }
}

const rect = new Rectangle(100, 57)
const colorRect = new ColorRectangleWihtText(100, 20, 'red', 'Hello, world!')

console.log(colorRect.renderText())
