import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { switchSortBy } from "../../store/filters";
import CheckBoxField from "../common/form/checkBoxField";

const SortSubmenu = ({ submenu, show }) => {
    const dispatch = useDispatch();

    const [data] = useState({ asc: true });

    const items = [];
    for (let i = 0; i < submenu.length; i += 1) {
        items.push(submenu.slice(i, i + 1));
    }

    const handleChange = (target) => {
        // if ([target.name] === "desc") {
        //     setData({ [target.name]: true });
        // } else {
        //     setData({ [target.name]: true });
        // }
        // setData((prevState) => ({
        //   ...prevState,
        //   [target.name]: target.value,
        // }));
    };

    useEffect(() => {
        if (data) {
            dispatch(switchSortBy(data));
        }
    }, [data]);

    return (
        <ul
            className={"categories-menu dropdown-menu " + (show ? " show" : "")}
        >
            <li>
                <div className="row">
                    {items.map((val, i) => (
                        <div key={i} className={"col-menu col-lg-2"}>
                            <div className="content ">
                                <ul className="menu-col">
                                    {val.map((_, index) => {
                                        const checkValue = val[index].value;
                                        const checkTitle = val[index].title;
                                        return (
                                            <li key={index}>
                                                <CheckBoxField
                                                    name={checkValue}
                                                    onChange={handleChange}
                                                    value={
                                                        data[checkValue] ||
                                                        false
                                                    }
                                                >
                                                    {checkTitle}
                                                </CheckBoxField>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </li>
        </ul>
    );
};
SortSubmenu.propTypes = {
    submenu: PropTypes.array,
    show: PropTypes.bool
};
export default SortSubmenu;
