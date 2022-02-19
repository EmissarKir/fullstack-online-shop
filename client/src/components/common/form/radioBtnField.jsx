import React from "react";
import PropTypes from "prop-types";

const RadioBtnField = ({ options, name, onChange, value, label }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="d-flex align-items-center  border-bottom my-1">
            <label className="form-label min-width-70 ">{label}</label>
            <div className="d-flex flex-wrap">
                {options.map((option) => (
                    <div
                        key={option.value}
                        className="form-check my-2 mx-2 px-0"
                    >
                        <input
                            className="btn-check"
                            type="radio"
                            name={name}
                            id={option.name + "_" + option.value}
                            checked={option.value === value}
                            value={option.value}
                            onChange={handleChange}
                            disabled={option.count < 1}
                        />
                        <label
                            className="btn btn-outline-secondary min-width-70"
                            htmlFor={option.name + "_" + option.value}
                        >
                            {option.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

RadioBtnField.propTypes = {
    options: PropTypes.array,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    label: PropTypes.string
};

export default RadioBtnField;
