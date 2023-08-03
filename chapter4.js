/**
 * 參考 30 天深入淺出 Redux 系列第 4 篇
 * https://ithelp.ithome.com.tw/articles/10288051
 * 
 * 把 store, action, reducer 寫在一起
 */
// createStore 後來被 configureStore 取代
// 為了理解怎麼將舊的 Redux 整理成與 redux-toolkit 結合採用舊的寫法
const createStore = require('redux').createStore

const COFFEE_ORDERED = 'COFFEE_ORDERED'

// 建立 Action
const orderCoffee = () => {
  return {
    type: COFFEE_ORDERED,
    payload: 1
  }
}
const orderCoffeeObj = {
  type: COFFEE_ORDERED,
  payload: 1
}
const orderCoffeeByNum = (num) => {
  return {
    type: COFFEE_ORDERED,
    payload: num
  }
}

// 狀態初始值
const initialState = {
  numOfCoffee: 20,
  numOfCoffeeBean: 20,
  numOfCake: 20
}
// 建立 Reducer
const reducer = (state = initialState, action) => {
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

const store = createStore(reducer)

// 取得初始狀態（initial state）
console.log('initial state', store.getState())

// subscribe 當狀態更新時可以觸發的 callback，回傳一個用來撤銷監聽狀態更新的函式
const unsubscribe = store.subscribe(() => console.log('更新', store.getState()))

store.dispatch(orderCoffee())
store.dispatch(orderCoffeeObj)
store.dispatch(orderCoffeeByNum(2))

// 停止監聽狀態更新
unsubscribe()

/**
結果： 
initial state { numOfCoffee: 20, numOfCoffeeBean: 20, numOfCake: 20 }
更新 { numOfCoffee: 19, numOfCoffeeBean: 20, numOfCake: 20 }
更新 { numOfCoffee: 18, numOfCoffeeBean: 20, numOfCake: 20 }
更新 { numOfCoffee: 16, numOfCoffeeBean: 20, numOfCake: 20 }
 */
