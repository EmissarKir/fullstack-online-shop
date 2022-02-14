import React from "react";
import PropTypes from "prop-types";
import Quantity from "../common/quantity";

const QuantityProductPage = ({ quantity, setQuantity }) => {
    const quantityMin = 1;
    const quantityMax = 199;

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
        <Quantity
            onChange={setQuantity}
            onDecrement={decrementQuantity}
            onIncrement={incrementQuantity}
            value={quantity}
            min={quantityMin}
            max={quantityMax}
        />
    );
};
QuantityProductPage.propTypes = {
    quantity: PropTypes.number,
    setQuantity: PropTypes.func
};
export default QuantityProductPage;
