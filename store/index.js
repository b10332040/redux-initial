const { createStore, applyMiddleware } = require('redux')
const { reducers } = require('../reducer')
const thunk = require('redux-thunk').default
const { composeWithDevTools } = require('redux-devtools-extension')

const middleware = [thunk]
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
)

module.exports = {
  store
}