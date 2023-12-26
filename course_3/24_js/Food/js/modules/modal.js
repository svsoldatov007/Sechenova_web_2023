export function closeModal() {
  modal = document.querySelector('.modal')
  modal.classList.add('hide')
  modal.classList.remove('show')
  document.body.style.overflow = ''
}

export function openModal() {
  modal = document.querySelector('.modal')
  modal.classList.add('show')
  modal.classList.remove('hide')
  document.body.style.overflow = 'hidden'
  // clearInterval(modalTimerId)
}

function modal() {
  // Modal

  const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal')

  modalTrigger.forEach((btn) => {
    btn.addEventListener('click', openModal)
  })

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal()
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal()
    }
  })

  //   const modalTimerId = setTimeout(openModal, 300000)
  // Изменил значение, чтобы не отвлекало

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal()
      window.removeEventListener('scroll', showModalByScroll)
    }
  }
  window.addEventListener('scroll', showModalByScroll)
}

export default modal
