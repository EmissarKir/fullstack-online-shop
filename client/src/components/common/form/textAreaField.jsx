import React from "react";
import PropTypes from "prop-types";

const TextAreaField = ({ label, name, value, rows, onChange, error }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };
    return (
        <div className="mb-1 mb-md-4">
            {label && (
                <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                >
                    {label}
                </label>
            )}
            <textarea
                className={getInputClasses()}
                name={name}
                value={value}
                id="exampleFormControlTextarea1"
                onChange={handleChange}
                rows={rows}
            />
            {error && <div className="invalid-feedback ">{error}</div>}
        </div>
    );
};
TextAreaField.propTypes = {
    label: PropTypes.string,
    rows: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default React.memo(TextAreaField);
