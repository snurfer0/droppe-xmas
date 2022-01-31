import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DUMMY_NAMES } from '../../utils/constants';
import { CHILDREN_INPUT_LABELS } from '../../utils/constants';
import { fetchCarts, storeChildrenInState } from '../../store/actions';

const NameInput = ({ placeholder,  onChange }) => <input type="text" name="childName" onChange={onChange} placeholder={placeholder} required />
const NameButton = ({ childName, onClick }) => <button className='grow_on_hover' type='submit' onClick={onClick}>{childName}</button>

const ChildNameInputs = ({ childrenNames, onNameChange }) => {
    return CHILDREN_INPUT_LABELS.map((label, index) =>
        <NameInput key={index} placeholder={label} value={childrenNames[index]} onChange={e => onNameChange(e, index)} />)
}

const ChildNameButtons = ({ childrenNames, viewChildProducts }) => {
    return childrenNames.map((childName, index) =>
        <NameButton key={index} childName={childName} onClick={viewChildProducts} />)
}

const ChildrenForm = ({ setCartVisibleId, formSubmitted, setFormSubmitted, fetchCarts, storeChildrenInState }) => {

    const [childrenNames, setChildrenNames] = useState(DUMMY_NAMES)

    const onNameChange = (e, index) => {
        let names = childrenNames
        names[index] = e.target.value
        setChildrenNames(names)
    }

    const onFormSubmit = e => {
        e.preventDefault()
        setFormSubmitted(true)
        storeChildrenInState(childrenNames)
        fetchCarts()
    }

    const viewChildProducts = e => {
        e.preventDefault()
        let index = childrenNames.indexOf(e.target.innerText)
        setCartVisibleId(index + 1)
    }

    return (
        <form className="form-inline" onSubmit={onFormSubmit}>
            {!formSubmitted ? <ChildNameInputs {...{ childrenNames, onNameChange } } /> : <ChildNameButtons {...{ childrenNames, viewChildProducts } } /> }
            {!formSubmitted && <button className='mt-1' type="submit">Get Carts</button>}
        </form>
    );

};

export default connect(null, { fetchCarts, storeChildrenInState })(ChildrenForm);