/**
 * 參考 30 天深入淺出 Redux 系列第 6-9 篇
 * https://ithelp.ithome.com.tw/articles/10288210
 */
const { orderCoffee, orderCoffeeBean, orderCake } = require('./action/order')
const { restockCoffee, restockCoffeeBean, restockCake } = require('./action/restock')
const { store } = require('./store')

console.log('initial state', store.getState())

const unsubscribe = store.subscribe(() => console.log('更新', store.getState()))

store.dispatch(orderCoffee(2, 20))
store.dispatch(restockCoffee(20, 10))
store.dispatch(orderCoffeeBean(3, 15))
store.dispatch(restockCoffeeBean(10, 10))
store.dispatch(orderCake(2, 30))
store.dispatch(restockCake(5, 25))

unsubscribe()