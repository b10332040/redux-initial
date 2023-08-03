const { COFFEE_RESTOCKED, COFFEEBEAN_RESTOCKED, CAKE_RESTOCKED } = require('./types')

const restockCoffee = (quantity, pay) => {
  return {
    type: COFFEE_RESTOCKED,
    payload: {
      quantity: quantity,
      pay: pay
    }
  }
}

const restockCoffeeBean = (quantity, pay) => {
  return {
    type: COFFEEBEAN_RESTOCKED,
    payload: {
      quantity: quantity,
      pay: pay
    }
  }
}

const restockCake = (quantity, pay) => {
  return {
    type: CAKE_RESTOCKED,
    payload: {
      quantity: quantity,
      pay: pay
    }
  }
}

module.exports = {
  restockCoffee,
  restockCoffeeBean,
  restockCake
}