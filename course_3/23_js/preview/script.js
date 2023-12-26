'use strict'

// localStorage
// localStorage.setItem('name', 'John')
// localStorage.setItem('surname', 'Smirnov')
// console.log(localStorage.getItem('name'))
// localStorage.removeItem('name')
// localStorage.clear()

/*
Задачи
1. сохрание фио 
2. сохранение чекбокса
3. сохранение измененного цвета формы
*/

const form = document.querySelector('.form-signin'),
  input = form.querySelector('.form-control'),
  checkbox = form.querySelector('#checkbox'),
  changeColorBtn = document.querySelector('#color')

if (
  localStorage.getItem('checkbox') &&
  localStorage.getItem('checkbox') !== 'false'
) {
  checkbox.checked = true
}

if (localStorage.getItem('fio')) {
  input.value = localStorage.getItem('fio')
}

if (
  !localStorage.getItem('colorForm') ||
  localStorage.getItem('colorForm') === 'white'
) {
  form.style.background = 'white'
} else if (localStorage.getItem('colorForm') === 'red') {
  form.style.background = 'red'
}

checkbox.addEventListener('change', function (e) {
  localStorage.setItem('checkbox', e.target.checked)
})

input.addEventListener('input', function (e) {
  localStorage.setItem('fio', e.target.value)
})

console.log(changeColorBtn)
changeColorBtn.addEventListener('click', () => {
  if (localStorage.getItem('colorForm') !== 'red') {
    form.style.background = 'red'
    localStorage.setItem('colorForm', 'red')
  } else {
    form.style.background = 'white'
    localStorage.setItem('colorForm', 'white')
  }
})

// Object in localStorage
const obj = {
  name: 'John',
  surname: 'Smith',
  age: 23,
}

localStorage.setItem('user', JSON.stringify(obj))
console.log(JSON.parse(localStorage.getItem('user')))
