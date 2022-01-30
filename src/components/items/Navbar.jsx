import React from 'react';
import { Link } from 'react-router-dom';
import _navs from '../../utils/_navs';


const Navbar = () => {
    return (
        <section className="navigation">
            <div className="nav-container">
                <div className="brand">
                    <Link to="/"> Droppe Xmas </Link>
                </div>
                <nav>
                    <ul className="nav-list">
                        {_navs.map(nav => <li key={nav.path}> <Link to={nav.path}> {nav.name} </Link> </li> )}
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default Navbar

