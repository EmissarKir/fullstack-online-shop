import { useEffect, useState } from "react";
import { validator } from "../utils/validator";

const useForm = (initialState = {}, onSubmit) => {
    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});

    const validatorConfig = {
        sortName: {
            isRequired: {
                message: "Поле <SortName> обязательно для заполнения"
            },
            min: {
                message:
                    "Поле <SortName> должено состоять минимум из 8 символов",
                value: 8
            }
        },
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязательна для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одно число"
            },
            min: {
                message: "Пароль должен состаять миниму из 8 символов",
                value: 8
            }
        }
    };

    const validate = () => {
        const errors = validator(form, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    useEffect(() => {
        validate();
    }, [form]);

    const isValid =
        Object.keys(errors).length === 0 && Object.keys(form).length > 5;

    const handleChange = (target) => {
        setForm((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        onSubmit(form);
    };

    return { form, handleChange, handleSubmit, errors, isValid };
};
export default useForm;
