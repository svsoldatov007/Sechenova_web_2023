export const _apiURL = 'https://api'

const sayHello = function () {
  console.log('Hello')
}

export const obj = {
  name: 'John',
}

// export { _apiURL, obj } // именованный экспорт
export default sayHello // дефолтный экспорт
