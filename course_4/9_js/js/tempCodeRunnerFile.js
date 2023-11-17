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