import {createStore} from 'redux'
import myReducer from './reducer.js'
let myStore = createStore(myReducer)

export default myStore;