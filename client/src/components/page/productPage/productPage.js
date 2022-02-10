import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ProductHeader from "../../ui/productHeader";
import ProductAdvantages from "../../ui/productAdvantages";
import ProductDetails from "../../ui/productDetails";
import ProductImportant from "../../ui/productImportant";

import { getProductById } from "../../../store/products";

import { addItemsCart } from "../../../store/cartItems";
import Reviews from "../../ui/reviews";
import { getReviewsById } from "../../../store/reviews";

// получаем минимальную фасовку товара
const getInitialStatePrice = (arr) => {
    const newPriceId =
        arr && [...arr].sort((a, b) => a.price - b.price)[0].paintId;
    return { id: newPriceId };
};
const getCurrentPaintObj = (id, array) =>
    array.find((item) => item.paintId === id);

const ProductPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { category } = useParams();
    const product = useSelector(getProductById(category));

    const reviewsProduct = useSelector(getReviewsById(category));

    const [quantity, setQuantity] = useState(1);
    const [isAddCart, setAddCart] = useState(false);

    const [currentId, setCurrentId] = useState(() =>
        getInitialStatePrice(product.paints)
    );
    const numberOfRatings = reviewsProduct.length;

    const averageRating =
        numberOfRatings > 0
            ? Math.round(
                  reviewsProduct.reduce((total, curr) => total + curr.rate, 0) /
                      numberOfRatings
              )
            : 0;

    const handleChange = (target) => {
        setCurrentId((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
        // при изменении объема сбрасываем количество выбранного товара
        setQuantity(1);
        setAddCart(false);
    };

    // выводим стоимость товара в зависимости от выбранного объема
    const itemPrice = product.paints.find(
        (item) => item.paintId === currentId.id
    ).price;

    const handleAddPaintCart = () => {
        const { img, templateId } = product;
        const obj = getCurrentPaintObj(currentId.id, product.paints);
        const payload = { ...obj, quantity, img, templateId };

        dispatch(addItemsCart(payload));
        setAddCart(true);
    };
    const redirectToCart = () => {
        history.push("/basket");
    };

    return (
        <>
            {product ? (
                <div className="container my-3">
                    <ProductHeader
                        product={product}
                        itemPrice={itemPrice}
                        onChange={handleChange}
                        data={currentId}
                        quantity={quantity}
                        setQuantity={setQuantity}
                        onAddPaintCart={handleAddPaintCart}
                        redirectToCart={redirectToCart}
                        isAddCart={isAddCart}
                        numberOfRatings={numberOfRatings}
                        averageRating={averageRating}
                    />
                    <ProductAdvantages product={product} />
                    <ProductDetails product={product} />
                    {product.important && (
                        <ProductImportant product={product} />
                    )}
                    <Reviews />
                </div>
            ) : null}
        </>
    );
};

export default ProductPage;
