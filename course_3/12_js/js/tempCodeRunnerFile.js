const movies = [
  {
    name: 'Marvel 1',
    mark: 5.6,
  },
  // {
  //   name: 'Marvel 2',
  //   mark: 7.6,
  // },
  {
    name: 'Барби',
    mark: 8.6,
  },
  {
    name: 'Головоломка',
    mark: 4.1,
  },
  {
    name: 'Карате-пацан',
    mark: 6.6,
  },
]

const newMovies = movies.filter((movie) => movie.name.includes('Marvel'))

console.log(newMovies)