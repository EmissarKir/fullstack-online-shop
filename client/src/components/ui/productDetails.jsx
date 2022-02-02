import React from "react";
import PropTypes from "prop-types";

import { templateProperties } from "../../constants/templateProperties";

const ProductDetails = ({ product }) => {
    const values = [];
    Object.keys(product).forEach((key) =>
        templateProperties.map((item) => {
            if (key === item[0]) {
                return values.push([item[1], product[key]]);
            }
            return null;
        })
    );

    return (
        <div className="row ">
            <div className="col-md-9 mx-auto">
                <table className="table">
                    <tbody>
                        {values.map((item) => (
                            <tr key={item}>
                                <th scope="row">{item[0]}</th>
                                <td className="text-end">{item[1]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
ProductDetails.propTypes = {
    product: PropTypes.object
};
export default ProductDetails;
