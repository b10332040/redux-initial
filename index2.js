/**
 * 參考 30 天深入淺出 Redux 系列第 5 篇
 * https://ithelp.ithome.com.tw/articles/10288053
 * 
 * 拆分 action, reducer, store
 */
const { orderCoffee, orderCoffeeObj, orderCoffeeByNum } = require('./action/order')
const { store } = require('./store')

console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('更新', store.getState()))

store.dispatch(orderCoffee())
store.dispatch(orderCoffeeObj)
store.dispatch(orderCoffeeByNum(2))

unsubscribe()

/**
結果：
state 多了一個 key 為 orderReducer，是因為利用了 combineReducers

initial state {
  orderReducer: { numOfCoffee: 20, numOfCoffeeBean: 20, numOfCake: 20 }
}
更新 {
  orderReducer: { numOfCoffee: 19, numOfCoffeeBean: 20, numOfCake: 20 }
}
更新 {
  orderReducer: { numOfCoffee: 18, numOfCoffeeBean: 20, numOfCake: 20 }
}
更新 {
  orderReducer: { numOfCoffee: 16, numOfCoffeeBean: 20, numOfCake: 20 }
}
 */