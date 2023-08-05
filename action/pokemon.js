const axios = require('axios')
const { POKEMON_PENDING, POKEMON_SUCCESSED, POKEMON_FAILED } = require('./types')

const fetchPokeRequest = () => {
  return {
    type: POKEMON_PENDING
  }
}

const fetchPokeSuccess = (pokemons) => {
  return {
    type: POKEMON_SUCCESSED,
    payload: pokemons
  }
}

const fetchPokeFailure = (error) => {
  return {
    type: POKEMON_FAILED,
    payload: error
  }
}

const fetchPokemons = (url) => {
  // redux-thunk 安裝之後可以回傳 function 並保留 dispatch 的功能
  // 可以直接在 return function 內做使用
  return function (dispatch) {
    dispatch(fetchPokeRequest())
    axios
      .get(url)
      .then((response) => {
        const pokesData = response.data // 包含上下頁的 url 和 result
        dispatch(fetchPokeSuccess(pokesData))
      })
      .catch((error) => {
        dispatch(fetchPokeFailure(error.message))
      })
  }
}

module.exports = {
  fetchPokeRequest,
  fetchPokeSuccess,
  fetchPokeFailure,
  fetchPokemons
}