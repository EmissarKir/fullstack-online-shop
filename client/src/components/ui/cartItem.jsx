import React from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import imgPlaceHold from "../../assets/images/img-placehold.jpg";
import { getSumItem, getVolumeItem } from "../../store/cartItems";
import QuantityCart from "./quantity/quantityCart";

const CartItem = ({
    item,
    onChange,
    onIncrementQuantity,
    onDecrementQuantity,
    onRemove
}) => {
    const itemSum = useSelector(getSumItem(item.paintId));
    const itemVolume = useSelector(getVolumeItem(item.paintId));

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={item.img ? item.img : imgPlaceHold}
                        className="img-fluid p-5"
                        alt="..."
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="text-end fs-6 mb-2">
                            <a
                                role="button"
                                className="text-decoration-none ms-2 text-danger"
                                onClick={() => onRemove(item.paintId)}
                            >
                                <i className="bi bi-trash me-3"></i>
                            </a>
                        </div>
                        <Link
                            to={`/products/${item.templateId}`}
                            className="text-decoration-none"
                        >
                            <h5 className="card-title text-decoration-none text-muted">
                                {item.name}
                            </h5>
                        </Link>

                        <div className="d-flex flex-column align-items-center flex-lg-row">
                            <div className="fs-3 me-lg-2">
                                <strong className="text-nowrap">
                                    {itemSum} ₽
                                </strong>
                            </div>
                            <div className="fs-5 text-muted me-lg-auto">
                                <strong className="text-nowrap">
                                    за &nbsp;{itemVolume}
                                    {item.volume}
                                </strong>
                            </div>
                            <QuantityCart
                                count={item.quantity}
                                id={item.paintId}
                                onChange={onChange}
                                onIncrementQuantity={onIncrementQuantity}
                                onDecrementQuantity={onDecrementQuantity}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
CartItem.propTypes = {
    item: PropTypes.object,
    onChange: PropTypes.func,
    onIncrementQuantity: PropTypes.func,
    onDecrementQuantity: PropTypes.func,
    onRemove: PropTypes.func
};
export default CartItem;
