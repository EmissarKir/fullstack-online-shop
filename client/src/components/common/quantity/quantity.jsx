import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "./quantity.css";

const Quantity = ({
    onDecrement,
    onIncrement,
    value,
    onChange,
    name,
    min,
    max,
    setShowTip
}) => {
    const quantityMin = min || 1;
    const quantityMax = max || 199;

    const isMaxCount = value === quantityMax;

    const handleChange = ({ target }) => {
        if (target.value >= quantityMin && target.value < quantityMax) {
            const value = Number(target.value);
            onChange({ value: value, name: target.name });
        }
    };

    useEffect(() => {
        if (isMaxCount) {
            setShowTip(true);
        } else {
            setShowTip(false);
        }
    }, [isMaxCount]);

    return (
        <div className="quantityCart  mb-3 mb-lg-0">
            <div className="border d-flex align-items-center">
                <button
                    className="btn"
                    onClick={name ? () => onDecrement(name) : onDecrement}
                >
                    <i className="bi bi-dash-lg mx-auto"></i>
                </button>
                <input
                    type="number"
                    value={value}
                    onChange={handleChange}
                    name={name}
                    min={quantityMin}
                    max={quantityMax}
                />
                <button
                    className="btn"
                    onClick={name ? () => onIncrement(name) : onIncrement}
                    disabled={isMaxCount}
                >
                    <i className="bi bi-plus-lg mx-auto"></i>
                </button>
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
    max: PropTypes.number,
    setShowTip: PropTypes.func
};
export default Quantity;
