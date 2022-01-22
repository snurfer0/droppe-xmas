import _ from 'lodash'

export const productIdsFromCarts = carts => {
    let ids = carts.map(cart => cart.products.map(p => p.productId));
    ids = ids.reduce((previousValue, currentValue) => previousValue.concat(currentValue), [])
    return _.uniq(ids)
}

export const userIdsFromCarts = carts => {
    let ids = carts.map(cart => cart.userId);
    ids = ids.reduce((previousValue, currentValue) => previousValue.concat(currentValue), [])
    return _.uniq(ids)
}


export const checkPriceForDiscount = (carts, products, productId) => {
    let matches = 0
    let product = products.find(p => p.id === productId)
    let cartProducts = carts.map(c => c.products)
    cartProducts.forEach(pl => {
        pl.forEach(p => {
            if(p.productId === productId && p.quantity > 0) matches += 1
        })
    });
    if (matches > 1) {
        let discountedPriceSum = matches / 10 * product.price * matches
        return {
            productID: productId,
            discounted: true,
            discountInPercentage: matches * 10,
            finalPrice: discountedPriceSum / matches,
            matches: matches,
            rawPrice: product.price
        }
    }
    return { discounted: false }

}

export const totalDiscount = (carts, products) => {

}


let products = [
    {
        "id": 1,
        "price": 109.95,
    },
    {
        "id": 2,
        "price": 22.3,
    }
]