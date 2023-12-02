// 1
const data = { a: 1, b: 2, c: 3 }


const without = (obj, ...massiveOfKeys) => {
  console.log(massiveOfKeys)
}
console.log(without(data, 'b', 'c')) // { a: 1 }