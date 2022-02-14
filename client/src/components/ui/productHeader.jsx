import React from "react";
import PropTypes from "prop-types";

import imgPlaceHold from "../../assets/images/img-placehold.jpg";
import RadioForm from "../ui/radioForm/radioForm";
import ItemRate from "../common/itemRate";
import { getNoun } from "../../utils/getNoun";
import QuantityProductPage from "./quantityProductPage";

const ProductHeader = ({
    product,
    itemPrice,
    onChange,
    data,
    quantity,
    setQuantity,
    onAddPaintCart,
    redirectToCart,
    isAddCart,
    countReviewsByProduct,
    averageRateByProduct
}) => {
    const str = getNoun(countReviewsByProduct, "отзыв", "отзыва", "отзывов");
    return (
        <div className="row my-3">
            <div className="col-md-6">
                <img
                    className="w-100 p-5"
                    src={product.img ? product.img : imgPlaceHold}
                    alt="product"
                />
            </div>

            <div className="col-md-6">
                <div className="row mb-2">
                    <div className="col-12 mb-2">
                        <h2 className="">{product.sortName}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="d-flex flex-row">
                            <ItemRate rate={averageRateByProduct} />
                            {countReviewsByProduct > 0 ? (
                                <span className="ms-2">
                                    {`${countReviewsByProduct} ${str}`}
                                </span>
                            ) : (
                                <span className="ms-2">отзывов нет</span>
                            )}
                        </div>
                    </div>
                    {product.countryOfOrigin && (
                        <div className="col-lg-6 text-lg-end">
                            <p>
                                <small>место производства: </small>&nbsp;
                                {product.countryOfOrigin}
                            </p>
                        </div>
                    )}
                </div>
                <div className="row">
                    <div className="col-12">
                        <RadioForm
                            array={product.paints}
                            onChange={onChange}
                            data={data}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-12 mb-3">
                        <div className="d-flex flex-column flex-lg-row align-items-center">
                            <div className="me-lg-2 mb-lg-0 mb-2">
                                Количество
                            </div>
                            <QuantityProductPage
                                quantity={quantity}
                                setQuantity={setQuantity}
                            />
                            <div className="display-5 ms-lg-auto">
                                <strong className="text-nowrap">
                                    {itemPrice && itemPrice * quantity} ₽
                                </strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mx-auto mb-2 mb-lg-0">
                        {!isAddCart ? (
                            <button
                                className="btn btn-primary btn-lg rounded-0  w-100"
                                onClick={onAddPaintCart}
                            >
                                КУПИТЬ
                            </button>
                        ) : (
                            <button
                                className="btn btn-danger btn-lg rounded-0  w-100"
                                onClick={redirectToCart}
                            >
                                ОФОРМИТЬ
                            </button>
                        )}
                    </div>
                    {product.linkTTX && (
                        <div className="col-lg-6 mx-auto">
                            <a
                                className="btn btn-outline-primary btn-lg rounded-0 w-100"
                                href={product.linkTTX}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                тех спецификация
                            </a>
                        </div>
                    )}
                </div>

                <div>
                    {product.description ? (
                        product.description
                    ) : (
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            eli ione quam iusto nostrum natus itaque, veritatis
                            molestiae cumque illum voluptate quasi optio est ab!
                            Consequuntur illum, a obcaecati fugit ad tempore,
                            eaque nisi est voluptatum cumque mollitia?
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};
ProductHeader.propTypes = {
    product: PropTypes.object,
    itemPrice: PropTypes.number,
    onChange: PropTypes.func,
    data: PropTypes.object,
    quantity: PropTypes.number,
    setQuantity: PropTypes.func,
    onAddPaintCart: PropTypes.func,
    redirectToCart: PropTypes.func,
    isAddCart: PropTypes.bool,
    countReviewsByProduct: PropTypes.number,
    averageRateByProduct: PropTypes.number
};
export default ProductHeader;
