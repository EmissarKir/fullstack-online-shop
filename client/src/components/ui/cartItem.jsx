import React, { useState } from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import imgPlaceHold from "../../assets/images/img-placehold.jpg";
import { getSumItem, getVolumeItem } from "../../store/cartItems";
import Quantity from "../common/quantity";
import Tooltip from "../common/tooltip/tooltip";

const CartItem = ({
    item,
    onChange,
    onIncrementQuantity,
    onDecrementQuantity,
    onRemove
}) => {
    const itemSum = useSelector(getSumItem(item.paintId));
    const itemVolume = useSelector(getVolumeItem(item.paintId));

    const [showTip, setShowTip] = useState(false);

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={item.img ? item.img : imgPlaceHold}
                        className="img-fluid p-2 p-lg-3"
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
                            <h6 className="card-title text-decoration-none text-muted">
                                {item.name}
                            </h6>
                        </Link>

                        <div className="d-flex flex-column align-items-center flex-lg-row justify-content-lg-between ">
                            <div className="mb-2">
                                <strong className="fs-3 me-2 text-nowrap">
                                    {itemSum} ₽
                                </strong>

                                <strong className="fs-5 text-muted me-lg-auto text-nowrap">
                                    за &nbsp;{itemVolume}
                                    {item.volume}
                                </strong>
                            </div>

                            <Tooltip
                                content="Добавлено максимальное количество"
                                direction="top"
                                showTip={showTip}
                            >
                                <Quantity
                                    onChange={onChange}
                                    onDecrement={onDecrementQuantity}
                                    onIncrement={onIncrementQuantity}
                                    value={item.quantity}
                                    max={item.count}
                                    name={item.paintId}
                                    setShowTip={setShowTip}
                                />
                            </Tooltip>
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
