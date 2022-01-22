import React from 'react';
import '../../assets/scss/childrenForm.scss';
import { CHILDREN_INPUT_LABELS } from '../../utils/Constants';
import { DUMMY_NAMES } from '../../utils/Constants';
import { connect } from 'react-redux';
import { fetchCarts, storeChildrenInState } from '../../store/actions';

const ChildNameInput = ({ placeholder,  onChange, value }) => <input type="text" name="childName" onChange={onChange} placeholder={placeholder} value={value} required />
const ChildNameButton = ({ childName, onClick }) => <input className='grow_on_hover' type="submit" onClick={onClick} value={childName} />

const ChildrenForm = ({ setCartVisibleId, formSubmitted, setFormSubmitted, fetchCarts, storeChildrenInState }) => {

    const [childrenNames, setChildrenNames] = React.useState(DUMMY_NAMES)

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

    const viewChildProductWishes = e => {
        e.preventDefault()
        let index = childrenNames.indexOf(e.target.value)
        console.log(index);
        setCartVisibleId(index + 1)
    }

    return (
        <form className="form-inline" onSubmit={onFormSubmit} >
            {!formSubmitted ?
                CHILDREN_INPUT_LABELS.map((label, index) =>
                    <ChildNameInput key={index} placeholder={label} value={childrenNames[index]} onChange={e => onNameChange(e, index)} />)
                : childrenNames.map((childName, index) => <ChildNameButton childName={childName} key={index} onClick={viewChildProductWishes} />)
            }
            {!formSubmitted && <button type="submit">Get Carts</button>}
        </form>
    );

};



const mapStateToProps = state => {
    return {  };
};

export default connect(
    mapStateToProps,
    { fetchCarts, storeChildrenInState }
)(ChildrenForm);