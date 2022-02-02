import React from "react";
import PropTypes from "prop-types";

import { useHistory } from "react-router-dom";

import "./productCard.css";

import imagePlaceholder from "../../../assets/images/img-placehold.jpg";

const ProductCard = ({ item }) => {
    const history = useHistory();

    const lowestPrice = item.paints
        .map((item) => item.price)
        .sort((a, b) => a - b)[0];

    const handelClick = (item) => history.push(`/products/${item.templateId}`);

    return (
        <div className="col-xl-3 col-lg-4 col-md-6 d-flex align-items-stretch">
            <div
                className="product-card card mb-3 shadow"
                onClick={() => handelClick(item)}
            >
                <div className="product-wrap">
                    <img
                        src={item.img || imagePlaceholder}
                        className="card-img-top p-4"
                        alt="product-card"
                    />
                    <div className="product-caption">
                        <div className="product-description">
                            <div className="product-description-wrap">
                                <div className="product-title d-flex flex-column justify-content-around">
                                    <ul>
                                        <li>
                                            Надолго защищает пол от износа и
                                            механических повреждений
                                        </li>
                                        <li>
                                            Эффектно подчеркивает натуральную
                                            красоту дерева
                                        </li>
                                        <li>Быстро сохнет</li>
                                    </ul>
                                    <a
                                        role="button"
                                        className="btn btn-danger w-100"
                                    >
                                        КУПИТЬ
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center">{item.sortName}</h5>
                    <p className="card-text"></p>
                    <div className="fw-bold fs-5 mt-auto align-self-start">
                        {`от ${lowestPrice} ₽`}
                    </div>
                </div>
            </div>
        </div>
    );
};
ProductCard.propTypes = {
    item: PropTypes.object
};
export default ProductCard;
