const { CAKE_ORDERED, CAKE_RESTOCKED } = require('../action/types')

const initialState = {
  numOfCake: 20
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCake: state.numOfCake - action.payload.quantity
      }
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCake: state.numOfCake + action.payload.quantity
      }
    default:
      return state
  }
}

module.exports = {
  cakeReducer
}