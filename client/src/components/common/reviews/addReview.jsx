import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import TextAreaField from "../form/textAreaField";

import { createReview } from "../../../store/reviews";
import useForm from "../../../hooks/useForm";
import StarRating from "../starRating/starRating";
import { getCurrentUserData } from "../../../store/users";

const AddReview = ({ templateId, onClose }) => {
    const user = useSelector(getCurrentUserData());
    const dispatch = useDispatch();
    const [rate, setRate] = useState(null);

    const handleRating = useCallback((rateValue) => {
        setRate(rateValue);
    }, []);

    const closeForm = () => {
        onClose(false);
    };
    const onSubmit = (form) => {
        dispatch(createReview({ ...form, templateId, rate }));
        closeForm();
    };

    const validatorConfig = {
        review: {
            isRequired: {
                message: "Поле <Отзыв> обязательно для заполнения"
            },
            min: {
                message: "Поле <Отзыв> должено состоять минимум из 5 символов",
                value: 5
            }
        }
    };

    const { form, handleChange, handleSubmit, errors, isValid } = useForm(
        {},
        onSubmit,
        validatorConfig
    );

    return (
        <div className="card mb-2">
            <div className="card-body ">
                <div>
                    <h5 className="mb-3">Написать отзыв</h5>
                    <span>Ваше имя: {user.name}</span>{" "}
                    <div className="d-flex flex-row align-items-center flex-wrap">
                        <span className="me-3">Оцените товар:</span>{" "}
                        <StarRating onRating={handleRating} rate={rate} />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <TextAreaField
                            value={form.review}
                            name="review"
                            onChange={handleChange}
                            label="Ваш отзыв"
                            rows="3"
                            error={errors.review}
                        />
                        <div className="d-flex justify-content-end">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={!rate || !isValid}
                            >
                                Опубликовать
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
AddReview.propTypes = {
    user: PropTypes.object,
    templateId: PropTypes.string,
    onClose: PropTypes.func
};
export default AddReview;
