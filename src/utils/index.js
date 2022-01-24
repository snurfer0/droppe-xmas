import _ from 'lodash'

export const checkItemForDiscount = (carts, product) => {
    let matches = 0
    let cartProducts = carts.map(c => c.products)
    cartProducts.forEach(pl => {
        pl.forEach(p => {
            if(p.productId === product.id && p.quantity > 0) matches += 1
        })
    });
    if (matches > 1) return { discounted: true, matches: matches }
    return { discounted: false, rawPrice: product.price }

}

// export const calculateTotalFinalPrice = (carts, products) => {

//     let total = 0

//     let products_list = carts.map(c => c.products)

//     let idsChecked = []

//     let res = products.map(p => {
//         if (!idsChecked.includes(p.id)) {
//             let match = 0
//             idsChecked.push(p.id)
//             products_list.forEach(pl => {
//                 let filter = pl.filter(_p => _p.id === p.id)
//                 if (filter.length > 0) {
//                     match++
//                 }
//             })
//             return { p, match }
//         }
//     })

//     console.log(res);
    
// }

export const calculateCartFinalPrice = (carts, products) => {

    let total = 0

    let products_list = carts.map(c => c.products)

    let idsChecked = []

    let res = products.map(p => {
        if (!idsChecked.includes(p.id)) {
            let match = 0
            idsChecked.push(p.id)
            products_list.forEach(pl => {
                let arr = pl.filter(_p => {
                    console.log(_p.productId, p.id);
                    return _p.id === p.id
                })
                console.log(arr);
                if (arr.length > 0) {
                    console.log("inc");
                    match += 1
                }
            })
            return { p, match }
        }
    })

    // console.log(res);
    console.log(idsChecked);

}