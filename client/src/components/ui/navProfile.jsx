import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserData } from "../../store/users";

const NavProfile = () => {
    const currentUser = useSelector(getCurrentUserData());
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };

    if (!currentUser) return "Loading...";
    return (
        <div className="dropdown " onClick={toggleMenu}>
            <div className="btn dropdown-toggle  d-flex align-items-center">
                <i className="bi bi-person-check nav-link"></i>
                <div className="text-white nav-link">{currentUser.name}</div>
            </div>
            <div className={`w-100 dropdown-menu ` + (isOpen ? "show" : "")}>
                <Link
                    to={`/users/${currentUser._id}`}
                    className="dropdown-item"
                >
                    Profile
                </Link>
                <Link to="/logout" className="dropdown-item">
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default NavProfile;
