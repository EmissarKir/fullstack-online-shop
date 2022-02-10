import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({
    type,
    label,
    placeholder,
    name,
    value,
    onChange,
    error,
    min,
    max,
    children
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const getInputClasses = () => {
        return "form-control " + (error ? "is-invalid" : "");
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="mb-1 mb-md-4 w-100">
            {label && (
                <label htmlFor={name} className="form-label">
                    {label}
                </label>
            )}

            <div className="input-group has-validation">
                <input
                    type={showPassword ? "text" : type}
                    className={getInputClasses()}
                    onChange={handleChange}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    error={error}
                    value={value}
                    min={min}
                    max={max}
                />
                {children}
                {type === "password" && (
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={toggleShowPassword}
                    >
                        <i
                            className={
                                "bi bi-eye" + (showPassword ? "-slash" : "")
                            }
                        ></i>
                    </button>
                )}
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    error: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    placeholder: PropTypes.string,
    children: PropTypes.object
};

export default TextField;
