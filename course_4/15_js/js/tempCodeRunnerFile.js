const date = new Date()
// const dateBirthday = new Date('2002-05-04')
// const age = (date - dateBirthday) / 1000 / 3600 / 24 / 365
// date.setFullYear(2018, 4, 25) // счет месцев идёт от нуля
// console.log(date)
// console.log(Date.parse(date))

const massDays = ['вск', 'пон', 'вт', 'ср', 'чт', 'пят', 'суб']

// console.log(date.getDate())
// console.log(date.getHours())
// console.log(date.getDay()) // 0 - это вск
// console.log(massDays[date.getDay()])
// console.log(date.getFullYear())
// console.log(date.getTimezoneOffset())
// console.log(date.toString())
console.log(date.getTime())
console.log(Date.parse(date))