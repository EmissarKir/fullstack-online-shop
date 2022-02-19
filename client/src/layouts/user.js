import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TextField from "../components/common/form/textField";
import OrdersList from "../components/ui/ordersList";
import useForm from "../hooks/useForm";
import { getUserById, updateUser } from "../store/users";

const User = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const user = useSelector(getUserById(userId));

    const [isBlockFileds, setBlockFileds] = useState(true);

    const toggleBlock = () => {
        setBlockFileds(!isBlockFileds);
    };

    const validatorConfig = {
        name: {
            isRequired: {
                message: "Поле <Отзыв> обязательно для заполнения"
            },
            min: {
                message: "Поле <Отзыв> должено состоять минимум из 5 символов",
                value: 5
            }
        }
    };
    const onSubmit = (form) => {
        dispatch(updateUser(form));
        setBlockFileds(true);
    };

    const { form, handleChange, handleSubmit, errors } = useForm(
        { ...user },
        onSubmit,
        validatorConfig
    );

    return (
        <div className="container mb-2 min-vh-100">
            <div className="px-4 mt-4">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card mb-4 mb-xl-0">
                            <div className="card-header">Profile Picture</div>
                            <div className="card-body text-center">
                                <img
                                    className="img-account-profile  mb-2 w-100"
                                    src={user.image}
                                    alt="user"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="card mb-4 h-100">
                            <div className="card-header">Account Details</div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <fieldset disabled={isBlockFileds}>
                                        <TextField
                                            label="Имя"
                                            type="text"
                                            name="name"
                                            value={form.name || ""}
                                            onChange={handleChange}
                                            error={errors.name}
                                        />

                                        <TextField
                                            type="text"
                                            label="Электронная почта"
                                            name="email"
                                            onChange={handleChange}
                                            value={form.email}
                                            error={errors.email}
                                        />
                                        <TextField
                                            type="text"
                                            label="Аватар"
                                            name="image"
                                            onChange={handleChange}
                                            value={form.image}
                                            error={errors.image}
                                        />
                                    </fieldset>
                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                        onClick={toggleBlock}
                                    >
                                        Изменить
                                    </button>
                                    <button
                                        className=" ms-2 btn btn-success"
                                        type="submit"
                                        disabled={isBlockFileds}
                                    >
                                        Сохранить
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <OrdersList />
                </div>
            </div>
        </div>
    );
};

export default User;
