export const offers = {

    "FR1": (product, quantity) => {
        return Math.ceil(quantity/2) * product.price
    },

    "SR1": (product, quantity) => {
        return quantity >= 3 ? quantity * 4.50 : quantity * product.price
    },

    "CF1": (product, quantity) => { return product.price * quantity}
    
}