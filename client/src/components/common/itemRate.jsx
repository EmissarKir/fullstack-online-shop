import React from "react";
import PropTypes from "prop-types";

const ItemRate = ({ rate, mode }) => {
    const starCount =
        rate === 0 ? [...Array(Math.round(5))] : [...Array(Math.round(rate))];
    const color = rate > 0 ? "text-warning" : "text-secondary";
    return (
        <div className="d-flex flex-nowrap">
            {mode === "single" ? (
                <>
                    <i className={`bi bi-star-fill ${color}`}></i>
                    <div className="ms-1">{rate}</div>
                </>
            ) : (
                starCount.map((_, index) => (
                    <i className={`bi bi-star-fill ${color}`} key={index}></i>
                ))
            )}
        </div>
    );
};
ItemRate.propTypes = {
    rate: PropTypes.number.isRequired,
    mode: PropTypes.string
};

export default ItemRate;
