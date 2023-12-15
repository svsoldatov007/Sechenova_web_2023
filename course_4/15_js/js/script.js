// 'use strict'

// setTimeout, setInterval

// setTimeout(function () {
//   console.log('Hello')
// }, 3000)

let i = 0

// const timer = setInterval(timerHandler, 500)

function timerHandler() {
  if (i === 9) {
    clearInterval(timer)
  }
  // calculate data and fetch from back
  console.log(`${i}`)
  i++
}

/* 
  1. function declaration
  2. function expression
  3. arrow function
  
*/

// Animation
const btn = document.querySelector('.btn'),
  box = document.querySelector('.box')

btn.addEventListener('click', () => {
  let pos = 0 // px
  const animationTimer = setInterval(myAnimation, 30)

  function myAnimation() {
    box.style.top = pos + 'px'
    box.style.left = pos + 'px'
    // stop
    if (pos === 300) {
      clearInterval(animationTimer)
    }
    pos += 10
    console.log(pos)
  }
})

// работа с Датами

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
