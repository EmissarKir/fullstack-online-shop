import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { getUserById } from "../../../store/users";
import ItemRate from "../itemRate";
import { timeConverter } from "../../../utils/timeConverter";

const Review = ({ review, created_at: created, userId, rate }) => {
    const user = useSelector(getUserById(userId));

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-md-4">
                    <div className="d-flex flex-row align-items-center">
                        <div>
                            <img
                                src={user.image}
                                className="rounded-circle me-3"
                                alt="avatar"
                                height="35"
                            />
                        </div>

                        <div>{user.name}</div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="d-flex flex-row">
                        <ItemRate rate={rate} />

                        <div className="ms-auto d-none d-sm-block">
                            {timeConverter(created)}
                        </div>
                    </div>

                    <div>{review}</div>
                </div>
            </div>
        </li>
    );
};
Review.propTypes = {
    review: PropTypes.string,
    edited_at: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    userId: PropTypes.string,
    onRemove: PropTypes.func,
    rate: PropTypes.number,
    user: PropTypes.object
};

export default Review;
