'use strict'

const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  wrapper = document.querySelector('.wrapper'),
  hearts = wrapper.getElementsByClassName('heart'),
  circles = document.querySelectorAll('.circle')

// box.style.width = '100%'
// box.style.backgroundColor = 'green'
box.style.cssText = 'background-color: green; width: 500px'

// for (let i = 0; i < circles.length; i++) {
//   circles[i].style.backgroundColor = 'aqua'
// }
circles.forEach((circle) => {
  //   circle.style.backgroundColor = 'aqua'
  circle.classList.add('black')
})

circles[0].classList.toggle('black')

const div = document.createElement('div')
div.classList.add('black')
const text = document.createTextNode('Hello world!')

wrapper.after(div)

// btns[4].remove()
btns[4].replaceWith(div)

const name = 'Anton'

// wrapper.innerHTML = `<h1>${name}</h1>`
// wrapper.textContent = `<h1>${name}</h1>`

// wrapper.insertAdjacentHTML('beforebegin', 'Hello!')
