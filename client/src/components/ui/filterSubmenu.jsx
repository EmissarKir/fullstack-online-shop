import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";

import { addFilter, getFilterByParent } from "../../store/filters";
import CheckBoxField from "../common/form/checkBoxField";

const FilterSubmenu = ({ submenu, show, parent }) => {
    const dispatch = useDispatch();
    const initialData = useSelector(getFilterByParent(parent));
    const [data, setData] = useState({});

    const items = [];

    for (let i = 0; i < submenu.length; i += 1) {
        items.push(submenu.slice(i, i + 1));
    }

    useEffect(() => {
        if (data) {
            dispatch(addFilter({ data, parent }));
        }
    }, [data]);

    useEffect(() => {
        if (initialData) {
            setData(initialData);
        } else {
            setData({});
        }
    }, [initialData]);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    return (
        <ul
            className={"categories-menu dropdown-menu " + (show ? " show" : "")}
        >
            <li>
                <div className="row">
                    {items.map((val, i) => (
                        <div
                            key={i}
                            className="col-menu col-lg-3 col-md-4 col-sm-6"
                        >
                            <div className="content">
                                <ul className="menu-col">
                                    {val.map((_, index) => {
                                        const checkNameValue = val[index].value;
                                        const checkNameTitle = val[index].title;
                                        return (
                                            <li key={index}>
                                                <CheckBoxField
                                                    name={checkNameValue}
                                                    onChange={handleChange}
                                                    value={
                                                        data[checkNameValue] ||
                                                        false
                                                    }
                                                >
                                                    {checkNameTitle}
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
FilterSubmenu.propTypes = {
    submenu: PropTypes.array,
    show: PropTypes.bool,
    parent: PropTypes.string
};
export default FilterSubmenu;
