# Лекция 3

Структура лекции

1. позиционирование и выравнивание float`ами
2. специфичность селекторов (было с 3 курсом)
3. Технология flexbox (было с 3 курсом)
4. Normalize.css
5. Подключение шрифты на сайт - на след. занятии

---

### Выравнивание по вертикали. Float

Раньше страницы верстали таблицами. Например, до сих пор табличная верстка используется в письмах

`float` – используется в основном в IE.

> Cвойство `vertical-align` работает только тогда, когда мы задали `display: inline-block`

### Специфичность селекторов

По убыванию специфичности

1. селекторы по тегу
2. селекторы по классу (если несколько классов, то берется последний)
3. селекторы по id
4. инлайн стили. Это стили, которые задаются в атрибуте `style` в HTML

Также есть комбинации классов, тегов и id

### Flexbox-Технология

Рекомендую прочитать всю статью про [flex на Доке](https://doka.guide/css/flexbox-guide/)

### Normalize.css

Подключаем его, чтобы сбрасывались все стили, назначенные по дефолту браузерами (см. статью).
Подключить можно двумя способами

1. Перейти по [ссылке](https://necolas.github.io/normalize.css/), нажать на кнопку "Dowload". Вас перебросит на css файл, его нужно скачать через Ctrl + S и подключить этот CSS-файл в HTML
2. Подключить Normalize.css через [CDN сервер](https://cdnjs.com/libraries/normalize). Обязательно подключаем `normalize.min.css` (копируем ссылку и вставляем её в тег `link` в HTML)

## Подключение шрифтов

Есть три типа подключени шрифтов

1. Использование локальных шрифтов с компьютеров. Рассказать про serif, sans-serif
2. С помощью (Google Fonts)[https://fonts.google.com/] (подключаем через тег `link`)
Пример
<code>
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700;900&display=swap"
  rel="stylesheet"
/>
</code>

3. локальное подключение. Создаем файл font.css и туда вставляем все конструкции css кода, которые с помощью директивы font-face используют локальные шрифты

```css
@font-face {
  font-family: 'Roboto';
  src: url('Roboto-Regular.eot');
  src: url('Roboto-Regular.eot?#iefix') format('embedded-opentype'), url('Roboto-Regular.woff')
      format('woff'), url('Roboto-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
```

Очень важно подключать общее семейство шрифтов в font-family, в а font-weight прописывать нужное начертание ( на [сайте](https://webfonts.pro/base-web-fonts/) нажимаем на кнопку “web”, копируем сss код и обязателььно изменяем св-ва font-family и font-weight )

4. Можно использовать [сервис](https://transfonter.org/) для скачивания шрифтов в разных форматах (сейчас обычно используются только woff and woff 2). После скачивания также локально подключаем шрифты (в них правильно прописаны параметры font-family и font-weight)

## Материалы урока

### Как работает веб или основные понятия

1. **[Специфичность селекторов](https://doka.guide/css/specificity/)** - рекомендую прочитать!
1. [Ещё про специфичность селекторов](https://learn.javascript.ru/css-selectors)
1. [Каскадность селекторов](https://doka.guide/css/cascade/)
1. [Flexbox технология](https://doka.guide/css/flexbox-guide/)
1. [Шпаргалка по Flexbox ](https://habr.com/ru/articles/313938/)
1. [Свойство background](https://doka.guide/css/background/)
1. [Сервис для конвертации шрифтов](https://transfonter.org/) - рекомендую к использованию, если у вас будут специфичные шрифты на проектах
1. [Найти и скачать шрифт](https://webfonts.pro/) - здесь можно скачать и подключить локально шрифты
1. [Свойство background](https://doka.guide/css/background/)
