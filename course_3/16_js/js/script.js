'use strict'
const btns = document.querySelectorAll('.btn'),
  wrapperBtns = document.querySelector('.wrapper-btns')

btns[0].classList.toggle('black')

wrapperBtns.addEventListener('click', (event) => {
  const target = event.target

  if (target && target.classList.contains('btn')) {
    if (target.classList.contains('black')) {
      target.classList.remove('black')
    } else {
      target.classList.add('black')
    }
  }
})
