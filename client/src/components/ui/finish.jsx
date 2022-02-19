import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "../../store/users";

const Finish = () => {
    const userId = useSelector(getCurrentUserId());

    return (
        <div className="container">
            <div className="row justify-content-center text-center mt-3">
                <div className="col-md-8">
                    <h3 className="bg-success p-md-5 m-md-5 p-1 m-1 border">
                        Благодарим за заказ! В течение получаса с вами свяжется
                        наш менеджер для уточнения деталей. Статус выполнения
                        заказа вы можете отслеживать в личном кабинете.
                    </h3>
                    <div>
                        <Link className="text-muted" to={`/user/${userId}`}>
                            Перейти в личный кабинет
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Finish;
