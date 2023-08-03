const { COFFEE_RESTOCKED } = require('./types')

const restockCoffee = (quantity, pay) => {
  return {
    type: COFFEE_RESTOCKED,
    payload: {
      quantity: quantity,
      pay: pay
    }
  }
}

module.exports = {
  restockCoffee
}