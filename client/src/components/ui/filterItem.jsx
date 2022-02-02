import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

import FilterSubmenu from "./filterSubmenu";
import SortSubmenu from "./sortSubmenu";

const FilterItem = ({ item }) => {
    const [show, setShow] = useState(false);

    const toggleDropdown = () => {
        setShow((prevState) => !prevState);
    };
    const categoriesRef = useRef();

    const handleOutsideClick = (e) => {
        if (!e.path.includes(categoriesRef.current)) {
            setShow(false);
        }
    };

    useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick);
        return () =>
            document.body.removeEventListener("click", handleOutsideClick);
    }, []);

    return (
        <li className="nav-item dropdown me-5" ref={categoriesRef}>
            <a
                type="button"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                onClick={toggleDropdown}
            >
                {item.title}
            </a>
            {item.submenu && item.value === "sort" ? (
                <SortSubmenu
                    submenu={item.submenu}
                    parent={item.value}
                    show={show}
                />
            ) : (
                <FilterSubmenu
                    submenu={item.submenu}
                    parent={item.value}
                    show={show}
                />
            )}
        </li>
    );
};
FilterItem.propTypes = {
    item: PropTypes.object
};
export default FilterItem;
