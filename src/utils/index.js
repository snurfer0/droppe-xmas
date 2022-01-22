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