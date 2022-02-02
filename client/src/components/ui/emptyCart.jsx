import React from "react";
import { Link } from "react-router-dom";
import EmptyGif from "../../assets/images/empty-basket.gif";

const EmptyCart = () => {
    return (
        <div className="container">
            <div className="row mt-5 d-flex align-items-center justify-content-center">
                <div className="col-md-6 text-center">
                    <img
                        src={EmptyGif}
                        alt="пустая корзина"
                        className="img-fluid"
                    />
                    <h2 className=" text-muted mb-4">Корзина пуста</h2>
                    <Link className="text-muted" to="/products">
                        Перейти к выбору товаров
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EmptyCart;
