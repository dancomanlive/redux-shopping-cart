export const addToCart = (product, quantity, unitCost) => {
  return {
    type: 'ADD_TO_CART',
    payload: { product, quantity, unitCost }
  }
}

export const updateCart = (product, quantity, unitCost) => {
  return {
    type: 'UPDATE_CART',
    payload: {
      product,
      quantity,
      unitCost
    }
  }
}

export const deleteFromCart = (product) => {
  return {
    type: 'DELETE_FROM_CART',
    payload: {
      product
    }
  }
}