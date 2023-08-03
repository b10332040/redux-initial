const { COFFEE_ORDERED } = require('../action/types')

const initialState = {
  numOfCoffee: 20,
  numOfCoffeeBean: 20,
  numOfCake: 20
}

const orderReducer = (state = initialState, action) => {
  switch(action.type) {
    case COFFEE_ORDERED:
      return {
        ...state,
        numOfCoffee: state.numOfCoffee - action.payload
      }
    default:
      return state
  }
}

module.exports = { orderReducer }