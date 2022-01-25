export const products = [
        {
            id: 2,
            title: 'Mens Casual Premium Slim Fit T-Shirts ',
            price: 22.3,
            description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
            category: 'men\'s clothing',
            image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            rating: {
                rate: 4.1,
                count: 259
      }
        },
        {
            id: 3,
            title: 'Mens Cotton Jacket',
            price: 55.99,
            description: 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
            category: 'men\'s clothing',
            image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
            rating: {
                rate: 4.7,
                count: 500
      }
        },
        {
            id: 1,
            title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
            price: 109.95,
            description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
            category: 'men\'s clothing',
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            rating: {
                rate: 3.9,
                count: 120
      }
        },
        {
            id: 5,
            title: 'John Hardy Women\'s Legends Naga Gold & Silver Dragon Station Chain Bracelet',
            price: 695,
            description: 'From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean\'s pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.',
            category: 'jewelery',
            image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
            rating: {
                rate: 4.6,
                count: 400
      }
        },
        {
            id: 9,
            title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
            price: 64,
            description: 'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
            category: 'electronics',
            image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
            rating: {
                rate: 3.3,
                count: 203
      }
        },
        {
            id: 7,
            title: 'White Gold Plated Princess',
            price: 9.99,
            description: 'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine\'s Day...',
            category: 'jewelery',
            image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
            rating: {
                rate: 3,
                count: 400
      }
        },
        {
            id: 8,
            title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
            price: 10.99,
            description: 'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
            category: 'jewelery',
            image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
            rating: {
                rate: 1.9,
                count: 100
      }
        }
]
    


export const carts = [
        {
            id: 1,
            userId: 1,
            date: '2020-03-02T00:00:02.000Z',
            products: [
                {
                    productId: 1,
                    quantity: 4
                },
                {
                    productId: 2,
                    quantity: 1
                },
                {
                    productId: 3,
                    quantity: 6
                }
            ],
            __v: 0
        },
        {
            id: 2,
            userId: 1,
            date: '2020-01-02T00:00:02.000Z',
            products: [
                {
                    productId: 2,
                    quantity: 4
                },
                {
                    productId: 1,
                    quantity: 10
                },
                {
                    productId: 5,
                    quantity: 2
                }
            ],
            __v: 0
        },
        {
            id: 3,
            userId: 2,
            date: '2020-03-01T00:00:02.000Z',
            products: [
                {
                    productId: 1,
                    quantity: 2
                },
                {
                    productId: 9,
                    quantity: 1
                }
            ],
            __v: 0
        },
        {
            id: 4,
            userId: 3,
            date: '2020-01-01T00:00:02.000Z',
            products: [
                {
                    productId: 1,
                    quantity: 4
                }
            ],
            __v: 0
        },
        {
            id: 5,
            userId: 3,
            date: '2020-03-01T00:00:02.000Z',
            products: [
                {
                    productId: 7,
                    quantity: 1
                },
                {
                    productId: 8,
                    quantity: 1
                }
            ],
            __v: 0
        }
    ]