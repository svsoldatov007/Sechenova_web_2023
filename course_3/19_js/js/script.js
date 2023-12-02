// 'use strict'

const str = 'name'
const strObj = new String(str)

// console.log(typeof str)
// console.log(typeof strObj)

console.dir([1, 2, 3])

const car = {
  wheels: 4,
  leftHandDrive: true,
  go: function () {
    console.log('go!')
  },
}

const carNew = {
  equipment: 2,
}

// carNew.__proto__ = car.prototype
Object.setPrototypeOf(carNew, car)
console.log(carNew.wheels)

class Car {
  wheels = 4
}

class BMW extends Car {
  wheels = 8
  leftHandDrive = true
}

const bmw1 = new BMW()
console.log(bmw1.wheels)

// функция-конструктор
function User(name, age) {
  this.name = name
  this.age = age
  this.isStudent = +age >= 18 && +age <= 24 ? true : false

  this.hello = function (anotherName) {
    console.log(`Hello, ${anotherName} from ${this.name}`)
  }
}

const ivan = new User('Ivan', '22')
const alex = new User('Alex', '30')

console.log(ivan.isStudent)
console.log(alex.isStudent)

console.log(ivan.hello('Sem'))
console.log(alex.hello('Anton'))
