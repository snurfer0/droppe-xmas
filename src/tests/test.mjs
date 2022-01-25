import { carts, products } from "./data.mjs"
import _ from 'lodash'

const calculateFinalPrice = (carts, stateProducts) => {

    let total = 0
    let idsChecked = []

    let products_list = carts.map(c => c.products)

    let matches = stateProducts.map(sp => {
        if (!idsChecked.includes(sp.id)) {
            let match = 0
            idsChecked.push(sp.id)
            products_list.forEach(pl => {
                let arr = pl.filter(_p => _p.productId === sp.id)
                if (arr.length > 0) match ++
            })
            return { product: sp, count: match }
        }
    }).filter(m => m.count > 1)

    products_list.forEach(pl => {
        pl.forEach(p => {
            let sp = stateProducts.find(_sp => _sp.id === p.productId)
            total += sp.price
        })
    })

    matches.forEach(match => {
        let { product } = match
        let productsPriceTotal = product.price * match.count
        total -= productsPriceTotal * (0 + match.count / 10)
    })

    return total
}

const calculateCartFinalPrice = (cartId, carts, stateProducts) => {
    let total = 0
    let idsChecked = []

    let products_list = carts.filter(c => c.id === cartId).map(c => c.products)

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

    products_list.forEach(pl => {
        pl.forEach(p => {
            let sp = stateProducts.find(_sp => _sp.id === p.productId)
            total += sp.price
        })
    })

    matches.forEach(match => {
        let { product } = match
        let productsPriceTotal = product.price * match.count
        total -= productsPriceTotal * (0 + match.count / 10)
    })
    console.log(total);
    return total
}

calculateCartFinalPrice(1, carts, products)

