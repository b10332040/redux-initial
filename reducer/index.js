const { combineReducers } = require('redux')
const { assetsReducer } = require('./assetsReducer')
const { coffeeReducer } = require('./coffeeReducer')
const { coffeeBeanReducer } = require('./coffeeBeanReducer')
const { cakeReducer } = require('./cakeReducer')

// 整合定義好的 reducer 函式
const reducers = combineReducers({
  coffeeReducer,
  coffeeBeanReducer,
  cakeReducer,
  assetsReducer
})

module.exports = {
  reducers
}