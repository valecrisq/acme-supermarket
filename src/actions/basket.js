export const BASKET_ADD_ITEM = "BASKET_ADD_ITEM";
export const BASKET_REMOVE_ITEM = 'BASKET_REMOVE_ITEM';

export const basketAddItem = item => ({
  type: BASKET_ADD_ITEM,
  item
})


export const basketRemoveItem = item => ({
  type: BASKET_REMOVE_ITEM,
  item
})
