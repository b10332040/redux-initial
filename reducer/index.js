const { combineReducers } = require('redux')
const { assetsReducer } = require('./assetsReducer')
const { coffeeReducer } = require('./coffeeReducer')
const { coffeeBeanReducer } = require('./coffeeBeanReducer')
const { cakeReducer } = require('./cakeReducer')
const { pokemonReducer } = require('./pokemonReducer')

// 整合定義好的 reducer 函式
const reducers = combineReducers({
  coffeeReducer,
  coffeeBeanReducer,
  cakeReducer,
  assetsReducer,
  pokemonReducer
})

module.exports = {
  reducers
}