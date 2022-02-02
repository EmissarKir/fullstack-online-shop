import React from "react";
import PropTypes from "prop-types";

const ProductImportant = ({ product }) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <h4 className="text-center">Важно!!!</h4>
                {product.important !== " " ? (
                    <ul>
                        {product.important.split("//").map((item, index) => {
                            return <li key={index + 1}>{item}</li>;
                        })}
                    </ul>
                ) : null}
            </div>
        </div>
    );
};
ProductImportant.propTypes = {
    product: PropTypes.object
};
export default ProductImportant;
