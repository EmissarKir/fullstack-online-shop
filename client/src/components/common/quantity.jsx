import React from "react";
import PropTypes from "prop-types";

const Quantity = ({ quantity, setQuantity }) => {
    const quantityMin = 1;
    const quantityMax = 199;

    const handleChange = ({ target }) => {
        if (target.value >= quantityMin && target.value < quantityMax) {
            const value = Number(target.value);
            setQuantity(value);
        }
    };
    const incrementQuantity = () => {
        if (quantity < quantityMax) {
            setQuantity((prevState) => prevState + 1);
        }
    };
    const decrementQuantity = () => {
        if (quantity > quantityMin) {
            setQuantity((prevState) => prevState - 1);
        }
    };
    return (
        <div className="quantityCart d-flex align-items-center mb-3 mb-lg-0 ">
            <div className="border">
                <span>
                    <i
                        className="bi bi-dash-lg ms-3"
                        onClick={decrementQuantity}
                    ></i>
                </span>
                <input type="number" value={quantity} onChange={handleChange} />
                <span>
                    <i
                        className="bi bi-plus-lg me-3"
                        onClick={incrementQuantity}
                    ></i>
                </span>
            </div>
        </div>
    );
};
Quantity.propTypes = {
    quantity: PropTypes.number,
    setQuantity: PropTypes.func
};
export default Quantity;
