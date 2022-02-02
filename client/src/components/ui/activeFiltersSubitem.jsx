import React from "react";
import PropTypes from "prop-types";

const ActiveFiltersSubitem = ({ item, findName, handleRemove }) => {
    const [title, list] = item;

    if (list.length === 0) return null;
    return (
        <div
            key={title}
            className="d-flex flex-wrap flex-row align-items-baseline mb-3"
        >
            <p className="me-2">{findName(title)}</p>
            {list.map((name) => (
                <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm me-2"
                    onClick={() => handleRemove(title, name)}
                    key={name}
                >
                    {name} <i className="bi bi-x-lg ms-1"></i>
                </button>
            ))}
        </div>
    );
};
ActiveFiltersSubitem.propTypes = {
    item: PropTypes.array,
    findName: PropTypes.func,
    handleRemove: PropTypes.func
};
export default ActiveFiltersSubitem;
