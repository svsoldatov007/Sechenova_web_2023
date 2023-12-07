const mas = [1, 2, 3, 4, 5, 7, 8, 9, 10]

// mas.every((elem) => elem > 5)
// ||
// equal
// ||
// mas.every((elem) => {
//   return elem > 5
// })

// console.log(mas.some((elem) => elem > 5))

// Tast 9

function find6(mass) {
  const isFind6 = mass.some((elem) => elem === 6)
  if (isFind6) {
    return mass.join('_')
  } else {
    return 'Not found 6'
  }
}

console.log(find6(mas))