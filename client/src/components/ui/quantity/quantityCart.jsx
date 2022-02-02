import React from "react";
import PropTypes from "prop-types";

const QuantityCart = ({
    count,
    id,
    onChange,
    onIncrementQuantity,
    onDecrementQuantity
}) => {
    const quantityMin = 1;
    const quantityMax = 199;

    const handleChange = ({ target }) => {
        if (target.value >= quantityMin && target.value < quantityMax) {
            const value = Number(target.value);
            onChange({ value: value, name: target.name });
        }
    };

    return (
        <div className="quantityCart d-flex align-items-center mb-3 mb-lg-0 ">
            <div className="border">
                <span>
                    <i
                        className="bi bi-dash-lg ms-3"
                        onClick={() => onDecrementQuantity(id)}
                    ></i>
                </span>
                <input
                    type="number"
                    value={count}
                    name={id}
                    onChange={handleChange}
                />
                <span>
                    <i
                        className="bi bi-plus-lg me-3"
                        onClick={() => onIncrementQuantity(id)}
                    ></i>
                </span>
            </div>
        </div>
    );
};
QuantityCart.propTypes = {
    count: PropTypes.number,
    id: PropTypes.string,
    onChange: PropTypes.func,
    onIncrementQuantity: PropTypes.func,
    onDecrementQuantity: PropTypes.func
};

export default QuantityCart;
