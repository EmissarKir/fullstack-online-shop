import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./navBar.css";

import NavProfile from "../navProfile";
import routes from "../../../routes.js";
import { getIsLoggedIn } from "../../../store/users";
import { getCartCount } from "../../../store/cartItems";

const NavBar = () => {
    const location = useLocation().pathname;
    const [collapse, setCollapse] = useState(false);

    const countCartItems = useSelector(getCartCount());

    const isLoggedIn = useSelector(getIsLoggedIn());
    const handleClick = () => setCollapse(!collapse);
    const closeMobileMenu = () => {
        setCollapse(false);
    };

    return (
        <nav className="navbar navbar-expand-md  navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
                    <i className="bi bi-github me-2 text-danger"></i>My Paints
                </Link>
                <button className="navbar-toggler" onClick={handleClick}>
                    <i
                        className={
                            collapse ? "bi bi-x-lg" : "navbar-toggler-icon"
                        }
                    />
                </button>
                <div
                    className={
                        "collapse navbar-collapse" + (collapse ? " show" : "")
                    }
                >
                    <ul className="navbar-nav align-items-center">
                        {routes.map((prop, key) => {
                            if (prop.display !== false && !prop.rigthSide) {
                                return (
                                    <Link
                                        to={prop.path}
                                        key={key}
                                        className={
                                            "nav-link" +
                                            (prop.path === location
                                                ? " active"
                                                : "")
                                        }
                                    >
                                        {prop.name}
                                    </Link>
                                );
                            }
                            return null;
                        })}
                    </ul>
                    <ul className="navbar-nav align-items-center ms-auto">
                        {routes.map((prop, key) => {
                            if (
                                prop.display !== false &&
                                prop.rigthSide &&
                                (isLoggedIn ? prop.private : prop.public)
                            ) {
                                return (
                                    <Link
                                        to={prop.path}
                                        key={key}
                                        className={
                                            "nav-link position-relative" +
                                            (prop.path === location
                                                ? " active"
                                                : "")
                                        }
                                    >
                                        {prop.icon ? prop.icon : prop.name}
                                        {prop.name === "Корзина" &&
                                            countCartItems > 0 && (
                                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                    {countCartItems}
                                                    <span className="visually-hidden">
                                                        unread messages
                                                    </span>
                                                </span>
                                            )}
                                    </Link>
                                );
                            }
                            return null;
                        })}
                        {isLoggedIn && <NavProfile />}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
