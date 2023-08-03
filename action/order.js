const { COFFEE_ORDERED } = require('./types')

const orderCoffee = (quantity, income) => {
  return {
    type: COFFEE_ORDERED,
    payload: {
      quantity: quantity,
      income: income
    }
  }
}

module.exports = {
  orderCoffee,
}

