// классы (ES6)
class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.massive = [0, 0]
  }

  calcSquare() {
    return this.width * this.height
  }

  sumArgs(callBack) {}
}

class ColorRectangleWihtText extends Rectangle {
  constructor(width, height, color, text) {
    super(width, height) // метод constructor родителя
    this.color = color
    this.text = text
  }

  renderText() {
    return `<div style="color: ${this.color}">${this.text}</div>`
  }
}

const rect = new Rectangle(100, 57)
const colorRect = new ColorRectangleWihtText(100, 20, 'red', 'Hello, world!')

console.log(colorRect.renderText())