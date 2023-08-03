const { COFFEE_ORDERED, COFFEEBEAN_ORDERED, CAKE_ORDERED } = require('./types')

const orderCoffee = (quantity, income) => {
  return {
    type: COFFEE_ORDERED,
    payload: {
      quantity: quantity,
      income: income
    }
  }
}

const orderCoffeeBean = (quantity, income) => {
  return {
    type: COFFEEBEAN_ORDERED,
    payload: {
      quantity: quantity,
      income: income
    }
  }
}

const orderCake = (quantity, income) => {
  return {
    type: CAKE_ORDERED,
    payload: {
      quantity: quantity,
      income: income
    }
  }
}

module.exports = {
  orderCoffee,
  orderCoffeeBean,
  orderCake
}

