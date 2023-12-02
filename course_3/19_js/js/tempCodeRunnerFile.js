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

console.log(ivan.isStudent);
console.log(alex.isStudent);