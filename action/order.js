const { COFFEE_ORDERED } = require('./types')

const orderCoffee = () => {
  return {
    type: COFFEE_ORDERED,
    payload: 1
  }
}
const orderCoffeeObj = {
  type: COFFEE_ORDERED,
  payload: 1
}
const orderCoffeeByNum = (num) => {
  return {
    type: COFFEE_ORDERED,
    payload: num
  }
}

module.exports = {
  orderCoffee,
  orderCoffeeObj,
  orderCoffeeByNum
}

