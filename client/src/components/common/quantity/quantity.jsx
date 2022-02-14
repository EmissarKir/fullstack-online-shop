import React from "react";
import PropTypes from "prop-types";

const Quantity = ({
    onDecrement,
    onIncrement,
    value,
    onChange,
    name,
    min,
    max
}) => {
    const quantityMin = min || 1;
    const quantityMax = max || 199;

    const handleChange = ({ target }) => {
        if (target.value >= quantityMin && target.value < quantityMax) {
            const value = Number(target.value);
            onChange({ value: value, name: target.name });
        }
    };
    return (
        <div className="quantityCart d-flex align-items-center mb-3 mb-lg-0">
            <div className="border">
                <span>
                    <i
                        className="bi bi-dash-lg ms-3"
                        onClick={name ? () => onDecrement(name) : onDecrement}
                    ></i>
                </span>
                <input
                    type="number"
                    value={value}
                    onChange={handleChange}
                    name={name}
                />
                <span>
                    <i
                        className="bi bi-plus-lg me-3"
                        onClick={name ? () => onIncrement(name) : onIncrement}
                    ></i>
                </span>
            </div>
        </div>
    );
};
Quantity.propTypes = {
    onDecrement: PropTypes.func.isRequired,
    onIncrement: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number
};
export default Quantity;
