import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
    decrementQuantity,
    getCartItems,
    getTotalSum,
    incrementQuantity,
    removeCart,
    removeItemCart,
    updateQuantityInput
} from "../../../store/cartItems";
import { buyProducts } from "../../../store/products";
import { getIsLoggedIn } from "../../../store/users";
import CartItem from "../../ui/cartItem";
import EmptyCart from "../../ui/emptyCart";
import Finish from "../../ui/finish";

const BasketPage = () => {
    const { pathname } = useLocation();
    const freeShippingCondition = 30000;
    const dispatch = useDispatch();
    const cartItems = useSelector(getCartItems());
    const totalSum = useSelector(getTotalSum());
    const costOfDelivery = totalSum >= freeShippingCondition ? 0 : 1500;
    const amountPayable = totalSum + costOfDelivery;
    const [finishMessage, setFinishMessage] = useState(false);

    const isLoggedIn = useSelector(getIsLoggedIn());

    const handleChange = (target) => {
        dispatch(updateQuantityInput(target));
    };
    const handleIncrementQuantity = (id) => {
        dispatch(incrementQuantity(id));
    };
    const handleDecrementQuantity = (id) => {
        dispatch(decrementQuantity(id));
    };

    const handleRemove = (paintId) => {
        if (
            window.confirm("Вы действительно хотите удалить товар из корзины?")
        ) {
            dispatch(removeItemCart(paintId));
        }
    };

    const handleBuy = () => {
        dispatch(buyProducts({ goodsSold: cartItems, amountPayable }));
        dispatch(removeCart());
        setFinishMessage(true);
    };

    useEffect(() => {
        if (finishMessage) {
            setFinishMessage(false);
        }
    }, [pathname]);
    if (cartItems.length === 0 && !finishMessage) return <EmptyCart />;
    if (finishMessage) return <Finish />;
    return (
        <section>
            <div className="container">
                <div className="row mb-2">
                    <div className="col-12">
                        <h1>Корзина</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.paintId}
                                item={item}
                                onChange={handleChange}
                                onIncrementQuantity={handleIncrementQuantity}
                                onDecrementQuantity={handleDecrementQuantity}
                                onRemove={handleRemove}
                            />
                        ))}
                    </div>
                    <div className="col-md-4">
                        <div className="card p-2 mb-4">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Товары на сумму</td>
                                        <td className="text-end">
                                            {totalSum} ₽
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Стоимость доставки</td>
                                        <td className="text-end">
                                            {costOfDelivery === 0
                                                ? "Бесплатно"
                                                : `${costOfDelivery} ₽`}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Итого</td>
                                        <td className="text-end">
                                            {amountPayable} ₽
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {!isLoggedIn ? (
                                <p>
                                    Оформить заказ могут только
                                    зарегистрированные пользователи. Пожалуйста
                                    &nbsp;
                                    <Link to="/login" className="text-muted">
                                        войдите
                                    </Link>
                                    &nbsp; или &nbsp;
                                    <Link to="/register" className="text-muted">
                                        зарегистрируйтесь.
                                    </Link>
                                </p>
                            ) : (
                                <button
                                    className="btn btn-danger w-100"
                                    onClick={handleBuy}
                                >
                                    Оформить
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BasketPage;
