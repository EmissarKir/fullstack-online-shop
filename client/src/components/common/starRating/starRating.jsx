import React from "react";
import PropTypes from "prop-types";
import "./starRating.css";

const StarRating = ({ rate, onRating }) => {
    return (
        <div className="star-rating d-flex flex-nowrap">
            {[...Array(5)].map((star, index) => {
                const rateValue = index + 1;
                const color =
                    rateValue <= rate ? "text-warning" : "text-secondary";
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="ratio"
                            value={rateValue}
                            onClick={() => onRating(rateValue)}
                        />
                        <i className={`bi bi-star-fill ${color}`}></i>
                    </label>
                );
            })}
        </div>
    );
};
StarRating.propTypes = {
    rate: PropTypes.number.isRequired,
    onRating: PropTypes.func
};
export default React.memo(StarRating);
