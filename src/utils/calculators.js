export const getMatches = (carts, stateProducts) => {

    let idsChecked = []
    let products_list = carts.map(c => c.products)

    let matches = stateProducts.map(sp => {
        if (!idsChecked.includes(sp.id)) {
            let match = 0
            idsChecked.push(sp.id)
            products_list.forEach(pl => {
                let arr = pl.filter(_p => _p.productId === sp.id)
                if (arr.length > 0) match++
            })

            return { product: sp, count: match }
        }
    }).filter(m => m.count > 1)

    return matches.length ? matches : null
}

export const calculateCartFinalPrice = (id, carts, stateProducts) => {
    let total = 0
    let cartProducts = carts.find(c => c.id === id).products

    cartProducts.forEach(product => {
        let stateProduct = stateProducts.find(p => p.id === product.productId)
        total += stateProduct.price * product.quantity
    })

    return total.toFixed(2)
}

export const calculateFinalPrice = (carts, stateProducts) => {

    let total = 0
    let rawTotal = 0
    
    let products_list = carts.map(c => c.products)
    let matches = getMatches(carts, stateProducts)

    products_list.forEach(pl => {
        pl.forEach(p => {
            let sp = stateProducts.find(_sp => _sp.id === p.productId)
            total += sp.price * p.quantity
            rawTotal += sp.price * p.quantity
        })
    })

    if (matches) {
        matches.forEach(match => {
            let { product } = match
            let productsPriceTotal = product.price * match.count
            total -= productsPriceTotal * (0 + match.count / 10)
        })
    }
    
    return { total: total.toFixed(2), rawTotal: rawTotal.toFixed(2)}
}


