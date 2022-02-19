import React, { useState } from "react";
import PropTypes from "prop-types";
import Quantity from "../common/quantity";
import Tooltip from "../common/tooltip/tooltip";

const QuantityProductPage = ({ quantity, setQuantity, maxQuantity }) => {
    const quantityMin = 1;
    const quantityMax = maxQuantity;
    const [showTip, setShowTip] = useState(false);

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
    const handleChange = (target) => {
        setQuantity(target.value);
    };
    return (
        <Tooltip
            content="Добавлено максимальное количество"
            direction="top"
            showTip={showTip}
        >
            <Quantity
                onChange={handleChange}
                onDecrement={decrementQuantity}
                onIncrement={incrementQuantity}
                value={quantity}
                min={quantityMin}
                max={quantityMax}
                setShowTip={setShowTip}
            />
        </Tooltip>
    );
};
QuantityProductPage.propTypes = {
    quantity: PropTypes.number,
    maxQuantity: PropTypes.number,
    setQuantity: PropTypes.func
};
export default QuantityProductPage;
