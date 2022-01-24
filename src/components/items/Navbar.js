import React from 'react';
import { _navs } from './_navs';
import { Link } from 'react-router-dom';

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

