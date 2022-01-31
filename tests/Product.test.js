import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Product from '../src/components/items/Product.jsx';
import { carts, products } from './dummy.js';

const middlewares = []
const mockStore = configureStore(middlewares)

describe("Product - Connected React-Redux Component", () => {

    let store;
    let component;
    let props;

    beforeEach(() => {

        let cart = carts.find(c => c.id === 1)
        let product = products.find(p => p.id === 1)

        store = mockStore({ carts: carts });
        store.dispatch = jest.fn();

        props = {
            cart: cart,
            ...product
        }

        component = (
            <Provider store={store}>
                <Product {...props} />
            </Provider>
        );
    });

    it('should render product component with correct data', () => {
        // mount the component
        const wrapper = mount(component);

        // product title
        expect(wrapper.find('.title').text()).toBe(`${props.title}  (${props.category})`)

        // product description
        expect(wrapper.find('.description').text()).toBe(` ${props.description} `)

        // product price
        expect(wrapper.find('.price').text()).toBe(` $ ${props.price?.toFixed(2)} `)

        // product preview image
        expect(wrapper.find('.preview').prop('src')).toBe(props.image)

    });

    it('should dispatch substractQuantity action on FontAwesome icon click', () => {
        // mount the component
        const wrapper = mount(component);

        // check that the icon exists
        expect(wrapper.find('[data-test="sub-icon"]').at(1)).toHaveLength(1);

        // simulate icon click, check that action was dispatched, it wont change the mock store
        wrapper.find('[data-test="sub-icon"]').at(1).simulate('click')
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        
    });

    it('should dispatch addQuantity action on FontAwesome icon click', () => {
        // mount the component
        const wrapper = mount(component);

        // check that the icon exists
        expect(wrapper.find('[data-test="add-icon"]').at(1)).toHaveLength(1);

        // simulate icon click, check that action was dispatched, it wont change the mock store
        wrapper.find('[data-test="add-icon"]').at(1).simulate('click')
        expect(store.dispatch).toHaveBeenCalledTimes(1);

    });

    it('should dispatch delete product action on FontAwesome icon click', () => {
        // mount the component
        const wrapper = mount(component);

        // check that the icon exists
        expect(wrapper.find('[data-test="delete-icon"]').at(1)).toHaveLength(1);

        // simulate icon click, check that action was dispatched, it wont change the mock store
        wrapper.find('[data-test="delete-icon"]').at(1).simulate('click')
        expect(store.dispatch).toHaveBeenCalledTimes(1);

    });

})

