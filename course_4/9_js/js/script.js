'use strict'

// интерполяция

// console.log(`${age} years old, ${surname} has ${numberOfFilms} films.`)

// alert(`Error loading page`)
// const name = prompt('Введите ваше имя')
// const answer = confirm('Ты завтракал?')

// условия
// 0 < 16 && 16 <= 18 && 18 < 50
const age = 16
if (age < 16) {
  console.log('true')
} else if (age <= 18) {
  console.log('false')
} else {
}

switch (age) {
  case 16:
    console.log('16')
    break
  case 17:
    console.log('17')
    break
  default:
    console.log('default')
    break
}

// операторы
// && - И
// || - ИЛИ
// = - присваивает значение
// == - нестрогое сравнение (сравнение по значению, а не типу)
// === - строгое сравнение
// инкремент, декремент
// +=, -=, *=, /=, %=,
// унарный плюс
// ! - отрицание

// тернарный оператор
let money = age >= 18 ? 10 : 5

// циклы

let i = 0

do {
  console.log(i)
  i += 1
} while (i < 10)

const massName = ['Sem', 'Anton', 'Ivan', 'Katya']
const surname = 'Ivan'
for (let i = 0; i < massName.length; i++) {
  if (massName[i] === surname) {
    continue
  }
  console.log(massName[i])
}

const resultOfSum = sum(1, 5)
console.log(resultOfSum)

// функция
// const sum = function (a, b) {
//   console.log(`sum of ${a} and ${b}: ${a + b}`)
//   return a + b
// }

const sum = (a, b) => a + b

// методы работы со строками

const students = [
  {
    name: 'Semen',
    surname: 'Soldatov',
    age: 20,
    pet: 'bird',
  },
  {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 18,
    pet: 'cat',
  },
  {
    name: 'Larisa',
    surname: 'Smirnova',
    age: 22,
    pet: 'dog',
  },
  {
    name: 'Anton',
    surname: 'Soldatov',
    age: 19,
    pet: 'dog',
  },
]

const filteredMass = students.filter((student) => student.age > 20)

console.log(filteredMass)
// console.log(students)

/*

Написать программу, выводящую построчно от 1 до 10 звездочек. Использовать циклы, не использовать массивы.
*
**
***
****
*****
******

*/
