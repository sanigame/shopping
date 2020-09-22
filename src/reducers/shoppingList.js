import { UPDATE_ITEM } from '../constants/actionTypes'

const initState = {
  shoppingList: []
}

const shoppingList = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_ITEM:
      return {
        ...state,
        // ...action.payload,
        shoppingList: action.payload
      }
    default:
      return state
  }
}

export default shoppingList