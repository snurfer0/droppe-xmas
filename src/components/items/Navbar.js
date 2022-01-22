import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className="navigation">
            <div className="nav-container">
                <div className="brand">
                    <Link to="/"> Droppe Xmas </Link>
                </div>
                <nav>
                    <div className="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
                    <ul className="nav-list">
                        <li>
                            <Link to="/"> Home </Link>
                        </li>
                        <li>
                            <Link to="/purchased-items"> Orders </Link>
                        </li>
                        <li>
                            <Link to="/checkout"> Checkout </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default Navbar

