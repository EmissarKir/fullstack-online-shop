import React, { useState } from "react";
import PropTypes from "prop-types";
import RadioField from "../common/form/radioField";

const SortSubmenu = ({ submenu, show }) => {
    const [data, setData] = useState({ sort: "asc" });

    console.log("data", data);

    const newArray = submenu.map((item) => ({ ...item, name: item.title }));

    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    return (
        <ul
            className={"categories-menu dropdown-menu " + (show ? " show" : "")}
        >
            <li>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <RadioField
                            options={newArray}
                            value={data.sort || ""}
                            onChange={handleChange}
                            name="sort"
                        />
                    </div>
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
