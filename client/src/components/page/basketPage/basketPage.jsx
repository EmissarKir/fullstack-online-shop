import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    decrementQuantity,
    getCartItems,
    getTotalSum,
    incrementQuantity,
    removeItemCart,
    updateQuantityInput
} from "../../../store/cartItems";
import CartItem from "../../ui/cartItem";
import EmptyCart from "../../ui/emptyCart";

const BasketPage = () => {
    const freeShippingCondition = 30000;
    const dispatch = useDispatch();
    const cartItems = useSelector(getCartItems());
    const totalSum = useSelector(getTotalSum());
    const costOfDelivery = totalSum >= freeShippingCondition ? 0 : 1500;
    const amountPayable = totalSum + costOfDelivery;

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
        console.log("cartItems", cartItems);
    };
    if (cartItems && cartItems.length === 0) return <EmptyCart />;
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
                        <div className="card p-2">
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

                            <button
                                className="btn btn-danger"
                                onClick={handleBuy}
                            >
                                Оформить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BasketPage;
