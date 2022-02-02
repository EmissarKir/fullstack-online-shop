import React from "react";
import PropTypes, { oneOfType } from "prop-types";

const CheckBoxField = ({ name, value, onChange, children, error }) => {
    const handleChange = () => {
        onChange({ name: name, value: !value });
    };

    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                value={value}
                id={name}
                onChange={handleChange}
                checked={value}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                {children}
            </label>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};
CheckBoxField.propTypes = {
    name: PropTypes.string,
    error: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    children: oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default CheckBoxField;
