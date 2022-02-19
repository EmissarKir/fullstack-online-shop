import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Finish = ({ userId }) => {
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
Finish.propTypes = {
    userId: PropTypes.string
};

export default Finish;
