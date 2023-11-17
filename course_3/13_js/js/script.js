'use strict'

function sum1(a, b) {
  setTimeout(() => {
    console.log(`sum1: ${a + b}`)
  }, 1000)
}

function sum2(a, b) {
  console.log(`sum2: ${a + b}`)
}

sum1(10, 20)
sum2(10, 20)

const massNames = ['Peter', 'Ann', 'Alex', 'Linda']

const mapNames = (name) => {
  console.log(`map: ${name}`)
}

massNames.map((name, ind, arr) => {
  console.log(`${ind}: ${name} in array: ${arr}`)
})

// объекты

const object = {
  name: 'Peter',
  age: 30,
  city: 'Lisbon',
  children: {
    name: 'Alex',
    age: 5,
  },
  makeFriends: function () {
    console.log('friends')
  },
}

const { age, city } = object

console.log(`${age} ${city}`)
console.log(object)

object.makeFriends()

const ageOfObject = 'age'

object[ageOfObject] = 40
object.sex = 'female'

// delete object.age

let counter = 0

for (const key in object) {
  if (typeof object[key] === 'object') {
    counter++
    // console.log('obj')
    for (const i in object[key]) {
      console.log(`${i}: ${object[key][i]}`)
    }
  } else {
    console.log(`${key}: ${object[key]}`)
    counter++
  }
}

console.log(Object.keys(object).length)

// передача по ссылке и по значению

let a = 5,
  b = a

a = 10
console.log(a)
console.log(b)

const c = {
  par1: 1,
  par2: 20,
  par3: {
    var1: 'mum',
    var2: true,
  },
}

const newObj = {}

for (const key in c) {
  newObj[key] = c[key]
}

const newOobj = Object.assign({}, c)
c.par3.var1 = 'asdmasmdamsdka'
console.log(newOobj)

const arrayOfNames = [
  'Peter',
  {
    age: 10,
    city: 'Lisbon',
  },
  'Alex',
  'Linda',
]

const arrayOfSurnames = ['Ivanov', 'Smirnov', ...arrayOfNames]
console.log(arrayOfSurnames)

// const newArrayOfNames = arrayOfNames.slice()
// arrayOfNames[1].age = 42
// console.log(arrayOfNames)
// console.log(newArrayOfNames)

// spread operator

const abc = {
  a: {
    e: 'str',
  },
  b: 2,
  c: 3,
}

const dfg = {
  d: 4,
  f: 5,
  g: 6,
}

const newAbs = { ...abc, ...dfg }
abc.a.e = 'asd'
console.log(newAbs)

const dataFromBackend = [1, 2, 3]

function updateData(a, b, c) {
  console.log(a)
  console.log(b)
  console.log(c)
}

updateData(...dataFromBackend)
