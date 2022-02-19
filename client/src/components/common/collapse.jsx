import React, { useEffect, useRef, useState } from "react";
import { Collapse as BsCollapse } from "bootstrap";
import PropTypes from "prop-types";
import { timeConverter } from "../../utils/timeConverter";

const CollapseWrapper = ({ children, data, title, amountPayable, status }) => {
    const [display, setDisaplay] = useState(false);
    const collapseRef = useRef();
    const toggleDisplay = () => {
        setDisaplay((prevState) => !prevState);
    };
    useEffect(() => {
        const newCollapse = new BsCollapse(collapseRef.current, {
            toggle: false
        });
        display ? newCollapse.show() : newCollapse.hide();
    }, [display]);

    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex flex-column flex-sm-row justify-content-sm-between ">
                    <div>
                        Статус:
                        <span
                            className={
                                "badge ms-2 " +
                                (status === "isWorking"
                                    ? "bg-danger"
                                    : "bg-success")
                            }
                        >
                            {status}
                        </span>
                    </div>

                    <span className="">Сумма заказа: {amountPayable}</span>
                    <div>
                        <span className="me-2 d-none d-md-inline-block">
                            {timeConverter(data)}
                        </span>
                        <i
                            className={
                                "bi bi-chevron-" + (!display ? "down" : "up")
                            }
                            onClick={toggleDisplay}
                        ></i>
                    </div>
                </div>
                <div className="collapse mt-3" ref={collapseRef} id={data}>
                    {children}
                </div>
            </div>
        </div>
    );
};
CollapseWrapper.defaultProps = {
    title: "Информация"
};
CollapseWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    title: PropTypes.string,
    name: PropTypes.string,
    data: PropTypes.string,
    amountPayable: PropTypes.number,
    status: PropTypes.string
};

export default CollapseWrapper;
