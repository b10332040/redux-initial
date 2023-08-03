const { combineReducers } = require('redux')
const { orderReducer } = require('./orderReducer')

// 整合定義好的 reducer 函式
const reducers = combineReducers({
  orderReducer
})

module.exports = {
  reducers
}