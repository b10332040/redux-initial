/**
 * 參考 30 天深入淺出 Redux 系列第 6 篇
 * https://ithelp.ithome.com.tw/articles/10288210
 */
const { orderCoffee } = require('./action/order')
const { restockCoffee } = require('./action/restock')
const { store } = require('./store')

console.log('initial state', store.getState())

const unsubscribe = store.subscribe(() => console.log('更新', store.getState()))

store.dispatch(orderCoffee(2, 20))
store.dispatch(restockCoffee(20, 10))

unsubscribe()

/**
結果：
initial state {
  orderReducer: { numOfCoffee: 20, numOfCoffeeBean: 20, numOfCake: 20, assets: 1000 }
}
更新 {
  orderReducer: { numOfCoffee: 18, numOfCoffeeBean: 20, numOfCake: 20, assets: 1020 }
}
更新 {
  orderReducer: { numOfCoffee: 38, numOfCoffeeBean: 20, numOfCake: 20, assets: 1010 }
}
 */

