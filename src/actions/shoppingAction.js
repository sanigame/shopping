import { UPDATE_ITEM } from '../constants/actionTypes'

const addItem = (value) => {
  return (dispatch, getState) => {
    const list = getState().shoppingList.shoppingList
    const productItem = {
      title: value,
      isChecked: false
    }
    list.push(productItem)
    dispatch({type: UPDATE_ITEM, payload: list})
  }
}

export default addItem