'use strict'

// Tabs
/* 
  1. Получить элементы со страницы
  2. 2 функции: скрытие всех элементов, показывание нужного элемента tabcontent
  3. Обработчик событий при нажатии на табы
*/

const tabContents = document.querySelectorAll('.tabcontent'),
  tabsContainer = document.querySelector('.tabheader__items'),
  tabs = document.querySelectorAll('.tabheader__item')

const tabActiveClass = 'tabheader__item_active',
  hideClass = 'hide',
  showClass = 'show'

function hideContents(arrContents) {
  arrContents.forEach((content) => {
    content.classList.add(hideClass)
    content.classList.remove(showClass)
  })
}

function showContent(ind) {
  tabContents.forEach((content, i) => {
    if (i === ind) {
      // нашёл контент, который соответствует нажатому табу
      content.classList.remove(hideClass)
      content.classList.remove(showClass)
    }
  })
}

tabs.forEach((tab, ind) => {
  tab.addEventListener('click', (event) => {
    // убираю класс активности у всех табов
    tabs.forEach((tab) => {
      tab.classList.remove(tabActiveClass)
    })

    hideContents(tabContents) // скрываю весь контент на странице
    showContent(ind) // показываю только тот контент, который соответствует моему табу по номеру (это в html)
    tab.classList.add(tabActiveClass) // назначаю класс активности нужному табу
  })
})

// при первом рендеринге страницы
hideContents(tabContents)
showContent(0)

// Modal
/*
Нуэно сделать модельное окно по пунктам
1. базовое открытие\закрывание окна при нажатии на одну кнопку
2. использование toggle
3. overflow
4. открытие\закрывание окна при нажатии на все триггеры
5. закрытие окна при нажатии на плашку + при нажатии на ESC
6. работа в функциях
*/
