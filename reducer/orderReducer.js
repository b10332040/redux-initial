const { COFFEE_ORDERED, COFFEE_RESTOCKED } = require('../action/types')

const initialState = {
  numOfCoffee: 20,
  numOfCoffeeBean: 20,
  numOfCake: 20,
  assets: 1000
}

const orderReducer = (state = initialState, action) => {
  switch(action.type) {
    case COFFEE_ORDERED:
      // 買咖啡 => 咖啡庫存 -、營收 +
      return {
        ...state,
        numOfCoffee: state.numOfCoffee - action.payload.quantity,
        assets: state.assets + action.payload.income
      }
    case COFFEE_RESTOCKED:
      // 補貨（咖啡） => 咖啡庫存 +、營收 -
      return {
        ...state,
        numOfCoffee: state.numOfCoffee + action.payload.quantity,
        assets: state.assets - action.payload.pay
      }
    default:
      return state
  }
}

module.exports = { orderReducer }