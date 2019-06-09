import { BASKET_ADD_ITEM, BASKET_REMOVE_ITEM, BASKET_REMOVE_ALL } from "../actions/basket";

const basket = (state = [], action) => {
    switch (action.type) {
        case BASKET_ADD_ITEM: {

            const { item } = action;
            const items = [...state];
            item.qty = item.qty || 1

            if (items.includes(item)) {
                item.qty = item.qty + 1
            } else {
                items.push(item);
            }

            return items;
        }


        case BASKET_REMOVE_ITEM: {

            const { item } = action;
            const items = [...state];

            const index = items.findIndex(i => i.code === item.code);

            if (items[index].qty > 1) {
                items[index].qty = items[index].qty - 1;
            } else {
                item.qty = 0;
                items.splice(index, 1);
            }

            return items;

        }

        case BASKET_REMOVE_ALL: {

            const items = [...state]

            items.forEach(item => {
                item.qty = 0;
            })

            items.splice(0);

            return items;

        }


        default:
            return state;

    }
}

export default basket