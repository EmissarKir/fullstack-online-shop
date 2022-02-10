import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
    getReviews,
    getReviewsLoadingStatus,
    loadReviewsList
} from "../../store/reviews";
import { getIsLoggedIn } from "../../store/users";
import ReviewsList, { AddReview } from "../common/reviews";

const Reviews = () => {
    const dispatch = useDispatch();
    const [showAddField, setShowAddField] = useState(false);
    const { category } = useParams();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const isLoading = useSelector(getReviewsLoadingStatus());

    const reviews = useSelector(getReviews());

    useEffect(() => {
        dispatch(loadReviewsList(category));
    }, [category]);

    const toggleAddCommentField = () => {
        setShowAddField(!showAddField);
    };

    return (
        <div className="mb-3">
            <h3>Отзывы</h3>
            <hr />
            {!isLoggedIn ? (
                <p>
                    Оставлять отзывы могут только зарегистрированные
                    пользователи. Пожалуйста &nbsp;
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
                    className="btn btn-danger ms-auto mb-3"
                    onClick={toggleAddCommentField}
                >
                    Написать отзыв
                </button>
            )}

            {showAddField && (
                <AddReview templateId={category} onClose={setShowAddField} />
            )}

            {!isLoading && reviews.length > 0 ? (
                <ReviewsList reviews={reviews} />
            ) : (
                <p>Отзывов ещё нет — ваш может стать первым.</p>
            )}
        </div>
    );
};

export default React.memo(Reviews);
