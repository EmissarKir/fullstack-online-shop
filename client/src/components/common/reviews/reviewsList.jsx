import React from "react";
import PropTypes from "prop-types";

import Review from "./review";

const ReviewsList = ({ reviews }) => {
    return (
        <div className="card mb-3">
            <div className="card-body ">
                <ul className="list-group list-group-flush">
                    {reviews.map((review) => (
                        <Review key={review._id} {...review} />
                    ))}
                </ul>
            </div>
        </div>
    );
};
ReviewsList.propTypes = {
    reviews: PropTypes.array
};

export default ReviewsList;
