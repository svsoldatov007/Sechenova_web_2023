'use strict'

const container = document.querySelector('.container'),
  btn = container.querySelector('[data-tariff="standart"]'),
  link = container.querySelector('.link'),
  tariffBtns = container.querySelectorAll('[data-tariff]')

// console.log(tariffBtns)

let width = 180

const resizeBtnWidth = (event) => {
  event.target.style.width = `${width}px`
  // width = width - 20
  width -= 20
  if (width < 160) {
    // всегда внутри колбэк функции обработчика событий
    btn.removeEventListener('click', resizeBtnWidth)
  }
}

// btn.addEventListener('click', resizeBtnWidth)

link.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('удалили дефолтное поведение')
})

btn.addEventListener('click', (event) => {
  console.log(event.currentTarget)
  console.log('btn is clicked')
})

// container.addEventListener('click', (event) => {
//   console.log(event.currentTarget)
//   console.log('container is clicked')
// })

console.log(btn.previousElementSibling)
