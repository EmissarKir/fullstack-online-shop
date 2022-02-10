import { useEffect, useState, useCallback } from "react";
import { validator } from "../utils/validator";

const useForm = (initialState = {}, onSubmit, validatorConfig) => {
    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errors = validator(form, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    useEffect(() => {
        validate();
    }, [form]);

    const isValid =
        Object.keys(errors).length === 0 && Object.keys(form).length > 0;

    const handleChange = useCallback((target) => {
        setForm((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        onSubmit(form);
    };

    return { form, handleChange, handleSubmit, errors, isValid };
};
export default useForm;
