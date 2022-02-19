import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getOrders,
    getOrdersLoadingStatus,
    loadOrdersList
} from "../../store/orders";
import CollapseWrapper from "../common/collapse";
import Loader from "../common/loader";

const OrdersList = () => {
    const dispatch = useDispatch();
    const orders = useSelector(getOrders());
    const isLoading = useSelector(getOrdersLoadingStatus());
    console.log("orders", orders);
    useEffect(() => {
        dispatch(loadOrdersList());
    }, []);

    if (isLoading) return <Loader />;
    if (orders && orders.length === 0) return null;
    return (
        <div className="px-4 mt-4">
            <h2>История заказов</h2>

            {orders &&
                orders.map((order) => (
                    <React.Fragment key={order._id}>
                        <CollapseWrapper
                            data={order.created_at}
                            amountPayable={order.amountPayable}
                            status={order.status}
                        >
                            <div className="table-responsive-md">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">название</th>
                                            <th scope="col">количество</th>
                                            <th scope="col">цена</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {order.goodsSold.map((item, index) => (
                                            <tr key={index}>
                                                <td key={item.paintId}>
                                                    {item.name}
                                                </td>

                                                <td>{item.quantity}</td>
                                                <td>{item.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CollapseWrapper>
                    </React.Fragment>
                ))}
        </div>
    );
};

export default OrdersList;
