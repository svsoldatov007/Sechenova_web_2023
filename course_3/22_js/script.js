// const product = {
//   shirt: 'Something',
//   size: 'M',
// }

// setTimeout(() => {
//   product.order = 'Succeeded'
//   console.log(product)
// }, 1000)

// Promise

// const req = new Promise((resolve, reject) => {
//   const product = {
//     shirt: 'Something',
//     size: 'M',
//   }
//   setTimeout(() => resolve(product), 1500)
// })

// req
//   .then((data) => {
//     data.order = 'Succeeded'
//     return data
//   })
//   .then((data) => {
//     data.year = 2023
//     return data
//   })
//   .then((data) => {
//     // console.log(data)
//   })

// const req = new Promise((resolve, reject) => {
//   const obj = {
//     name: 'Anton',
//     birthay: '1999-12-31',
//     // birthay: '',
//   }
//   setTimeout(() => {
//     if (obj.birthay) {
//       const age = new Date(obj.birthay)
//       obj.age = Math.floor((Date.now() - age) / 1000 / 3600 / 24 / 365)
//       console.log(obj)
//       resolve(obj)
//     } else {
//       reject(obj)
//     }
//   }, 2000)
// })

// req
//   .then((data) => {
//     const div = document.createElement('div')
//     div.textContent = data.age
//     return div
//   })
//   .then((div) => {
//     const body = document.querySelector('body')
//     body.append(div)
//     return div
//   })
//   .catch((data) => {
//     console.log(data)
//     console.error(`Произошла ошибка`)
//   })
//   .finally(() => {
//     console.log('Show modal')
//   })

// setTimeout(() => console.log(req), 2100)

// Fetch API
// 1. From client send request to server
// 2. From server send response to client
fetch('https://jsonplaceholder.typicode.com/todos/2')
  .then((response) => {
    console.log(response)
    if (response.ok) {
      return response.json()
    } else {
    }
  })
  .then((json) => console.log(json))
  .catch((error) => console.log(error))
