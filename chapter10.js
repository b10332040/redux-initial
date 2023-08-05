const { fetchPokemons } = require('./action/pokemon')
const { store } = require('./store')

console.log('initial state', store.getState())

store.subscribe(() => console.log('更新', store.getState()))

store.dispatch(fetchPokemons(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`))