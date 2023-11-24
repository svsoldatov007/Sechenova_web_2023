/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

const movieDB = {
  movies: [
    'Логан',
    'Лига справедливости',
    'Ла-ла лэнд',
    'Одержимость',
    'Скотт Пилигрим против...',
  ],
}

const { movies } = movieDB

const filmsList = document.querySelector('.promo__interactive-list')

// for (let i = 0; i < movies.length; i++) {
//   const li = document.createElement('li')
//   // <li></li>

//   li.classList.add('promo__interactive-item')
//   li.innerHTML = `${movies[i]} <div class="delete"></div>`
//   filmsList.append(li)
// }

let contentOfFilms = ''
for (let i = 0; i < movies.length; i++) {
  contentOfFilms += ` <li class="promo__interactive-item">${i + 1}. ${movies[i]}
                        <div class="delete"></div>
                      </li>`
}
filmsList.innerHTML = contentOfFilms
