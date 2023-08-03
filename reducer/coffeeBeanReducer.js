const { COFFEEBEAN_ORDERED, COFFEEBEAN_RESTOCKED } = require('../action/types')

const initialState = {
  numOfCoffeeBean: 20
}

const coffeeBeanReducer = (state = initialState, action) => {
  switch (action.type) {
    case COFFEEBEAN_ORDERED:
      return {
        ...state,
        numOfCoffeeBean: state.numOfCoffeeBean - action.payload.quantity
      }
    case COFFEEBEAN_RESTOCKED:
      return {
        ...state,
        numOfCoffeeBean: state.numOfCoffeeBean + action.payload.quantity
      }
    default:
      return state
  }
}

module.exports = {
  coffeeBeanReducer
}