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
