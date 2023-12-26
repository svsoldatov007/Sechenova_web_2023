window.addEventListener('DOMContentLoaded', function () {
  // Tabs

  let tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items')

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add('hide')
      item.classList.remove('show', 'fade')
    })

    tabs.forEach((item) => {
      item.classList.remove('tabheader__item_active')
    })
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade')
    tabsContent[i].classList.remove('hide')
    tabs[i].classList.add('tabheader__item_active')
  }

  hideTabContent()
  showTabContent()

  tabsParent.addEventListener('click', function (event) {
    const target = event.target
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent()
          showTabContent(i)
        }
      })
    }
  })

  // Timer

  const deadline = '2024-06-11'

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24)

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    }
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return '0' + num
    } else {
      return num
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000)

    updateClock()

    function updateClock() {
      const t = getTimeRemaining(endtime)

      days.innerHTML = getZero(t.days)
      hours.innerHTML = getZero(t.hours)
      minutes.innerHTML = getZero(t.minutes)
      seconds.innerHTML = getZero(t.seconds)

      if (t.total <= 0) {
        clearInterval(timeInterval)
      }
    }
  }

  setClock('.timer', deadline)

  // Modal

  const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]')

  modalTrigger.forEach((btn) => {
    btn.addEventListener('click', openModal)
  })

  function closeModal() {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
  }

  function openModal() {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
    // clearInterval(modalTimerId)
  }

  modalCloseBtn.addEventListener('click', closeModal)

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal()
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal()
    }
  })

  // const modalTimerId = setTimeout(openModal, 3000);
  // Закомментировал, чтобы не отвлекало

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal()
      window.removeEventListener('scroll', showModalByScroll)
    }
  }
  //   window.addEventListener('scroll', showModalByScroll)

  // Отправление данные с формы (модалки) на сервер

  const formModal = modal.querySelector('form')

  // открытие модального окна (благодарность или ошабка)
  const showCustomModal = (text) => {
    const customModal = document.createElement('div')
    const body = document.querySelector('body')
    customModal.innerHTML = `
    <div class="modal show modal__custom">
        <div class="modal__dialog">
            <div class="modal__content">
                <div class="modal__close" data-close>&times;</div>
                <div class="modal__title">${text}</div>
            </div>
        </div>
    </div>
    `
    const closeDiv = customModal.querySelector('[data-close]')
    closeDiv.addEventListener('click', () => {
      body.removeChild(customModal)
    })
    body.append(customModal)
  }

  const postRequest = async (url, data) => {
    const response = await fetch(url, {
      method: 'POST', // GET, POST, PUT, PATCH, DELETE
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })

    return response.json() // возвращаем промис
  }

  // обработка сабмита формы
  formModal.addEventListener('submit', (e) => {
    e.preventDefault()
    const objData = {}
    const formData = new FormData(formModal)
    formData.forEach((value, key) => {
      objData[key] = value
    })

    postRequest('http://localhost:3000/requests', objData)
      .then((data) => {
        // success response
        console.log(data)
        e.preventDefault()
        closeModal()
        showCustomModal('Спасибо, мы скоро с вами свяжемся')
      })
      .catch((error) => console.log(error))
  })

  // Работа с карточками
  const getResouse = async (url) => {
    const response = await fetch(url)
    return response.json() // возвращаем промис
  }

  // Вариант 1 - класс
  class MenuCard {
    constructor(img, altimg, title, descr, price, parentSelector, ...classes) {
      this.img = img
      this.altimg = altimg
      this.title = title
      this.descr = descr
      this.price = price * 90
      this.parentSelector = parentSelector
      this.classes = classes
    }

    // convertDollarsToRUB(price) {
    //   return price * 90
    // }

    render() {
      const parent = document.querySelector(this.parentSelector)
      const card = document.createElement('div')

      // доп. классы
      if (this.classes.length > 0) {
        this.classes.forEach((className) => {
          card.classList.add(className)
        })
      }
      // обязательный класс
      card.classList.add('menu__item')

      card.innerHTML = `
      <img src=${this.img} alt=${this.altimg}>
      <h3 class="menu__item-subtitle">${this.title}</h3>
      <div class="menu__item-descr">${this.descr}</div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
      </div>
      `
      parent.append(card)
    }
  }

  // Вариант 2 - функция
  const renderMenuCard = function (cardObj, parentSelector, ...classes) {
    const { img, altimg, title, descr, price } = cardObj
    const parent = document.querySelector(parentSelector)
    const card = document.createElement('div')

    // доп. классы
    if (classes.length > 0) {
      classes.forEach((className) => {
        card.classList.add(className)
      })
    }
    // обязательный класс
    card.classList.add('menu__item')

    card.innerHTML = `
    <img src=${img} alt=${altimg}>
    <h3 class="menu__item-subtitle">${title}</h3>
    <div class="menu__item-descr">${descr}</div>
    <div class="menu__item-divider"></div>
    <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${price * 90}</span> руб/день</div>
    </div>
    `
    parent.append(card)
  }

  // getResouse('http://localhost:3000/menu')
  axios.get('http://localhost:3000/menu').then((response) => {
    console.log(response)
    const dataMenu = response.data
    dataMenu.forEach((cardInfo) => {
      const { img, altimg, title, descr, price } = cardInfo
      renderMenuCard(cardInfo, '.menu__field .container')
      // new MenuCard(
      //   img,
      //   altimg,
      //   title,
      //   descr,
      //   price,
      //   '.menu__field .container'
      // ).render()
    })
  })
})
