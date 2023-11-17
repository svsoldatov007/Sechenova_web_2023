'use strict'
// callback function

const func1 = (message) => {
  setTimeout(() => {
    console.log(message)
  }, 1000)
}

const func2 = (message) => {
  // calc
  console.log(message)
}

func2('world')
func1('Hello')
func2('John')
func2('John 2')

const massName = ['John', 'Peter', 'Sem', 'Mary']

massName.map((name, ind, arr) => {
  console.log(`${ind}. ${name} in ${arr}`)
})

// объекты
const obj = {
  name: 'John',
  age: 36,
  isMarried: true,
  pets: {
    cat: 'John 2',
    dog: 'John 3',
  },
  hello: function (message) {
    console.log(message)
  },
}

const { name, pets, hello } = obj
const { cat, dog } = pets

console.log(`${cat}, ${dog}`)

obj.hello('asdasdasdas')

obj['name'] = 'Peter'
obj.age = 20

obj.surname = 'Smith'

// delete obj.isMarried

let counter = 0
for (let key in obj) {
  const value = obj[key]
  console.log(`${key}: ${value}`)
  counter++
}

const arrKeys = Object.keys(obj)
console.log(arrKeys)

// передача по ссылке и по значению

let a = 5,
  b = a

a = 10

console.log(a)
console.log(b)

const object = {
  name: 'John',
  age: 36,
  pets: {
    cat: 'John 2',
    dog: 'John 3',
  },
}

const c = object

const newObj = {}

// check
// for (let key in object) {
//   if (typeof object[key] === 'object') {
//     for (let subKey in object[key]) {
//       newObj[key][subKey] = object[key][subKey]
//     }
//   } else {
//     newObj[key] = object[key]
//   }
// }

object.age = 42
// console.log(newObj)

const newOobj = Object.assign({}, object)

console.log(newOobj)

const array = [1, 2, 3, 4]
const array2 = [5, 6, 7]
const newArray = [...array, ...array2]

console.log(newArray)

const d = {
  d: 'foo',
}

const e = {
  e: 'bar',
  f: 'baz',
}

const newDE = { ...d, ...e }

console.log(newDE)

const sum = (a, b, c) => {
  return a + b + c
}

const massForSum = [1, 2, 3]
console.log(sum(...massForSum))
