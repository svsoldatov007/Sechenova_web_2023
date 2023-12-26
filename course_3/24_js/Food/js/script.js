// import { _apiURL as api, obj } from './modules/testES'
import * as data from './modules/testES'
import sayHello from './modules/testES'
import calculator from './modules/calculator'
import menuCardsShow from './modules/cards'
import postingRequest from './modules/forms'
import modal from './modules/modal'
import slider from './modules/slider'
import tabsBlock from './modules/tabs'
import timerFunc from './modules/timer'

window.addEventListener('DOMContentLoaded', function () {
  // CommonJS
  // const sayHelloFunc = require('./modules/test')
  // sayHelloFunc()

  // ES6
  // console.log(data._apiURL)
  // sayHello()

  calculator()
  menuCardsShow()
  postingRequest()
  modal()
  slider()
  tabsBlock()
  timerFunc()
})
