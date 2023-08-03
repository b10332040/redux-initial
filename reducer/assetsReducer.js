const { COFFEE_ORDERED, COFFEE_RESTOCKED, COFFEEBEAN_ORDERED, COFFEEBEAN_RESTOCKED, CAKE_ORDERED, CAKE_RESTOCKED } = require('../action/types')

const initialState = {
  assets: 1000
}

const assetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COFFEE_ORDERED:
      return {
        ...state,
        assets: state.assets + action.payload.income
      }
    case COFFEE_RESTOCKED:
      return {
        ...state,
        assets: state.assets - action.payload.pay
      }
    case COFFEEBEAN_ORDERED:
      return {
        ...state,
        assets: state.assets + action.payload.income
      }
    case COFFEEBEAN_RESTOCKED:
      return {
        ...state,
        assets: state.assets - action.payload.pay
      }
    case CAKE_ORDERED:
      return {
        ...state,
        assets: state.assets + action.payload.income
      }
    case CAKE_RESTOCKED:
      return {
        ...state,
        assets: state.assets - action.payload.pay
      }

    default:
      return state
  }
}

module.exports = {
  assetsReducer
}