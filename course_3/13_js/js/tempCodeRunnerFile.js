const dataFromBackend = [1, 2, 3]

function updateData(a, b, c) {
  console.log(a)
  console.log(b)
  console.log(c)
}

updateData(...dataFromBackend)