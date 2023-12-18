
const req = new Promise((resolve, reject) => {
  const obj = {
    name: 'Anton',
    birthay: '2001-11-03',
  }
  setTimeout(() => {
    const age = new Date(obj.birthay)
    obj.age = Math.floor((Date.now() - age) / 1000 / 3600 / 24 / 365)
    console.log(obj)
    resolve(obj)
  }, 2000)
})

req.then((data) => {
  const div = document.createElement('div')
  div.textContent = data.age

  return data
})
.then((data) => {
  const body = document.querySelector('body')
  body.append(div)
  return data
})