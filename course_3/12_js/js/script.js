'use strict'

const nameOfTeacher = 'Semen'
const surname = 'Soldatov'
const age = 25

// "name surname. My age is age"
// интерполяция
// console.log(`${nameOfTeacher} ${surname}. My age is ${age}`)

// условия

if (age) {
  console.log('True condition')
} else {
  console.log('False condition')
}

switch (age) {
  case 20:
    console.log('10')
    break
  case 30:
    console.log('30')
    break
  default:
    console.log('default')
    break
}

const mass = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(mass[101])

// циклы

let i = 0

do {
  console.log(i)
  i++
} while (i < 5)

const massName = ['Sem', 'Anton', 'Ivan', 'Katya']
const name = 'Ivan'

for (let i = 0; i < massName.length; i++) {
  if (massName[i] === name) {
  } else {
  }
  console.log(massName[i])
}

function sum(a, b) {
  console.log(`sum of ${a} and ${b}: ${a + b}`)
}

sum(1, 5)

const printMass = function (mass) {
  console.log(mass)
}

printMass([1, 2, 'mum'])

const massStudents = [
  {
    name: 'Semen',
    surname: 'Soldatov',
  },
  {
    name: 'Ivan',
    surname: 'Ivanov',
  },
  {
    name: 'Katya',
    surname: 'Katya',
  },
]

const sumElements = (a, b) => a + b

console.log(sumElements(2, 5))

// методы строк

const greeting = 'Hello world!'
const numberOfFilms = 10

console.log(numberOfFilms.toString())

// console.log(nickname.toUpperCase())
// console.log(nickname.toLowerCase())
// console.log(nickname.includes('a'))
// console.log(nickname.startsWith('Semen'))
// console.log(nickname.endsWith('Soldatov'))

const movies = [
  {
    name: 'Marvel 1',
    mark: 5.6,
  },
  // {
  //   name: 'Marvel 2',
  //   mark: 7.6,
  // },
  {
    name: 'Барби',
    mark: 8.6,
  },
  {
    name: 'Головоломка',
    mark: 4.1,
  },
  {
    name: 'Карате-пацан',
    mark: 6.6,
  },
]

const newMovies = movies.filter((movie) => movie.name.includes('Marvel'))

console.log(newMovies)

console.log(movies)
