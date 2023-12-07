// 'use strict'

// setTimeout, setInterval

// setTimeout(() => {
//   console.log('Hello')
// }, 1000)

/*
1. function declaration
2. function expression
3. arrow function

*/

// let i = 0

// function timerHandler() {
//   if (i === 5) {
//     clearInterval(timer)
//     return
//   }
//   console.log(`Hello #${i}`)
//   i++
// }

// const timer = setInterval(timerHandler, 500)

// Animation
const btn = document.querySelector('.btn'),
  box = document.querySelector('.box')

btn.addEventListener('click', () => {
  let pos = 0
  const myAnimation = () => {
    function moving() {
      box.style.left = pos + 'px'
      box.style.top = pos + 'px'
      pos += 5
    }

    if (pos <= 300) {
      moving()
    } else {
      clearInterval(timer)
    }
  }

  console.log('Animation')
  const timer = setInterval(myAnimation, 20)
})

// работа с Датами

// const birthday = new Date('2000-01-01T09:05:11')
// const ageMill = (dateNow - birthday) / 1000 / 3600 / 24 / 365
// const dateNow = new Date(-123412412412)
const date = new Date()
date.setFullYear(2022, 0, 28)
// console.log(Date.parse('2022-11-30T21:00:00.000Z'))

const massDays = ['вск', 'пон', 'вт', 'ср', 'чт', 'пят', 'суб']

// console.log(date.getDate())
// console.log(date.getUTCHours())
// console.log(date.getDay())
// console.log(massDays[date.getDay()])
// console.log(date.getFullYear())
// console.log(date.getTimezoneOffset())
// console.log(date.toDateString())
// console.log(date.getTime())
console.log(date)

btn.addEventListener('click', (event) => {
  console.log(event.target)
})
