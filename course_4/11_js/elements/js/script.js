'use strict'

const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  wrapper = document.querySelector('.wrapper'),
  hearts = wrapper.getElementsByClassName('heart'),
  circles = document.querySelectorAll('.circle')

box.style.cssText = 'background: green'

for (let i = 0; i < btns.length; i++) {
  // btns[i].style.cssText = 'background: red; border: 2px solid black'
  btns[i].classList.toggle('black')
}

circles.forEach((circle) => {
  circle.style.background = 'black'
})

const div = document.createElement('div')
div.classList.add('black')
// wrapper.after(div)
wrapper.replaceWith(div)
const name = 'Anton'
div.innerHTML = `<h3>${name}</h3>`
div.textContent = `<h3>${name}</h3>`

//
const blackBtns = document.querySelectorAll('[data-blackBtn]')
/* querySelectorAll - возвращает псевдомассив, состоящий из HTMl-элементов
  Внутри - любой селектор  
*/

// . - поиск элемента по классу
// # - поиск элемента по id
// button - поиск элемемнта по тегу
// [] - поиск элемента по data-атрибуту

blackBtns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    // addEventListener - обработчик событий
    // console.log(e.target) // над ним произошло событие
    const target = e.target
    console.log(target.classList.toggle('example'))
    // add - добавляем класс
    // remove - удаляеи класс
    // contains - содержится ли класс в нашем элементе
    // toggle - переключает
  })
})
