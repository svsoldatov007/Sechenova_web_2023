function createCounter() {
  let counter = 0

  const increaseCounter = () => {
    counter += 1
    return counter
  }
  return increaseCounter
}

const counter = createCounter()
const c1 = counter()
const c2 = counter()
const c3 = counter()
console.log(c1, c2, c3)