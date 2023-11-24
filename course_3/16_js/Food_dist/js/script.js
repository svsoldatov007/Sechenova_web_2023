'use strict'

// Tabs

document.addEventListener('DOMContentLoaded', (e) => {
  const tabs = document.querySelectorAll('.tabheader__item'),
    tabsWrapper = document.querySelector('.tabheader__items'),
    tabContents = document.querySelectorAll('.tabcontent'),
    tabActive = 'tabheader__item_active'

  /* 3 Задачи
    1. Скрыть все элементы
    2. Показать тот элемент (там, фотка и опписание), который нам нужен
    3. Обработчик событий
*/

  function hideContent() {
    tabContents.forEach((content) => {
      content.style.display = 'none'
    })
  }

  function showContent(i) {
    tabContents[i].style.display = 'block'
  }

  hideContent()
  showContent(0)

  tabsWrapper.addEventListener('click', (e) => {
    e.keyCode
    const target = e.target
    console.log(target)
    if (target && target.classList.contains('tabheader__item')) {
      // нажали на таб
      hideContent()
      tabs.forEach((tab, ind) => {
        tab.classList.remove(tabActive)
        if (tab === target) {
          showContent(ind)
        }
      })
      target.classList.add(tabActive)
    }
  })
})

// Modal
/*
1. базовое открытие\закрывание окна при нажатии на одну кнопку
2. использование toggle
3. overflow
4. открытие\закрывание окна при нажатии на все триггеры
5. закрытие окна при нажатии на плашку + при нажатии на ESC
6. работа в функциях
*/
