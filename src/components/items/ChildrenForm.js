import React from 'react';
import '../../assets/css/childrenForm.scss';
import ChildNameInput from './ChildNameInput';
import { Link } from 'react-router-dom';

class ChildrenForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { childrenNames: ['', '', '', '', ''] };
        this.onNameChange = this.onNameChange.bind(this);
    }

    onNameChange(e, index) {
        let names = this.state.childrenNames
        names[index] = e.target.value
        this.setState({ childrenNames: names })
    }

    render() {

        const labels = ['First Child', 'Second Child', 'Third Child', 'Fourth Child', 'Fifth Child']

        const link = {
            pathname: "/carts",
            state: {
                childrenNames: this.state.childrenNames
            }
        }

        return (
            <div>
                <div id='form'>
                    {labels.map((label, index) => {
                        return <ChildNameInput
                            key={label}
                            label={label}
                            index={index}
                            onChange={this.onNameChange}
                        />
                    })}
                    <div className="form-item">
                        <Link to={link} className="get-carts-button">Get Carts</Link>
                    </div>
                </div>
            </div>
        );
    }
   
};


export default ChildrenForm