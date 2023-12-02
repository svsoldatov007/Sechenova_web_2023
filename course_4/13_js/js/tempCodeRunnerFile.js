const cylinderArr = [
  {
    r: 5,
    h: 10,
  },
  {
    r: 2.2,
    h: 14.2,
  },
  {
    r: 1,
    h: 100,
  },
]

// const countVolume = function (mass) {
//   const newMass = []

//   for (let i = 0; i < mass.length; i += 1) {
//     const { r, h } = mass[i]
//     const V = 3.14 * r * r * h
//     newMass.push(V)
//   }
//   return newMass
// }

const countVolume = function (mass) {
  const newMass = mass.map((value) => {
    const { r, h } = value
    const V = 3.14 * r * r * h
    return V
  })

  return newMass
}

console.log(countVolume(cylinderArr))