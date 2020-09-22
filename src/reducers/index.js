import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import shoppingList from './shoppingList'

const rootReducer = combineReducers({
  shoppingList,
  form: formReducer
})

export default rootReducer