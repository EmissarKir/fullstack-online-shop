import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import TextField from "../common/form/textField";

import { validator } from "../../utils/validator";
import { login } from "../../store/users";

const LoginForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Электронная почта не корректна"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },
            isCapital: {
                message: "Пароль должен иметь одну заглавную букву"
            },
            isDigit: {
                message: "Пароль должен иметь одно число"
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        }
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    useEffect(() => {
        validate();
    }, [data]);

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const redirect = history.location.state
            ? history.location.state.from.pathname
            : "/";
        dispatch(login({ data, redirect }));
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="text"
                    label="Электронная почта"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    error={errors.email}
                />
                <TextField
                    type="password"
                    label="Пароль"
                    name="password"
                    onChange={handleChange}
                    value={data.password}
                    error={errors.password}
                />

                <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={!isValid}
                >
                    Отправить
                </button>
            </form>
        </>
    );
};

export default LoginForm;
