import React from "react";
import PropTypes from "prop-types";

import { useHistory } from "react-router-dom";

import "./productCard.css";

import imagePlaceholder from "../../../assets/images/img-placehold.jpg";
import ItemRate from "../../common/itemRate";

const ProductCard = ({ item, rate }) => {
    const history = useHistory();

    const handelClick = (item) => history.push(`/products/${item.templateId}`);

    return (
        <div className="col-xl-3  col-md-4 col-sm-6 d-flex align-items-stretch">
            <div
                className="product-card card mb-3 shadow"
                onClick={() => handelClick(item)}
            >
                <div className="product-wrap">
                    <img
                        src={item.img || imagePlaceholder}
                        className="p-4"
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
                    <h6 className="card-title text-center">{item.sortName}</h6>

                    <div className="mt-auto ">
                        <div className="d-flex align-items-baseline justify-content-between">
                            <div className="fw-bold fs-5 m-0">{`от ${item.lowestPrice} ₽`}</div>
                            <ItemRate rate={rate} mode="single" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
ProductCard.propTypes = {
    item: PropTypes.object,
    rate: PropTypes.number
};
export default ProductCard;
