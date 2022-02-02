import React from "react";
import PropTypes from "prop-types";

const ProductAdvantages = ({ product }) => {
    return (
        <div className="row">
            <div className="col-md-12">
                {product.advantages && product.advantages !== " " ? (
                    <ul>
                        {product.advantages.split("//").map((item, index) => {
                            return <li key={index + 1}>{item}</li>;
                        })}
                    </ul>
                ) : null}
            </div>
        </div>
    );
};
ProductAdvantages.propTypes = {
    product: PropTypes.object
};
export default ProductAdvantages;
