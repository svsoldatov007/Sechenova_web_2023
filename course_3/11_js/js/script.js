'use strict'

const widthContentPart1 = '100px'
const b = '150px' // так не делаем
const THEME_COLOR = 'RED'
const _apiKey = 'https://www.durak.ru'

/*
1. snake_case
2. UPPER_SNAKE_CASE
3. kebab-case
4. camelCase
5. PascalCase

*/

// let asd = `И сказал гордо: "я люблю веб-разработку"`
// const isStudent = false
let dad

// console.log(dad)

const student = {
  name: 'Ivan',
  birtday: new Date('05.04.2007'),
  studyHW: function () {},
  date_joined: '05.04.2007',
}

const customBirthday = '5 May'

const massStudents = [2, true, 'srt']
// console.log(student.birtday)
// console.log(massStudents[0])
// alert('Error 404: Not Found')
// const result = confirm('Ты студент?')
// const answer = prompt('Сколько часов вы потратили на ДЗ2', 100)
// console.log(typeof answer)

/*
Задание:
Задать юзеру 3 вопроса, получить ответы, занести в массив и вывестт массив в консоль
1. Как тебя зовут?
2. Соклько тебе лет?
3. Любишь кашу по утрам?
*/

console.log(typeof null)
// or, and
// ||, &&
const str = +'5'
let i = 1
console.log((7 || 8 == 2 * 4) && null)
