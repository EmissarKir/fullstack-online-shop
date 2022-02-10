import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { addSearch, clearSearchStore, getSearch } from "../../store/filters";
import TextField from "../common/form/textField";

const Search = () => {
    const dispatch = useDispatch();
    const searchStore = useSelector(getSearch());
    const { pathname } = useLocation();

    const onSubmit = (form) => {
        dispatch(addSearch(form));
    };

    useEffect(() => {
        if (searchStore && pathname !== "/products") {
            form.search = "";
            dispatch(clearSearchStore());
        }
    }, [pathname]);

    const validatorConfig = {};

    const { form, handleChange, handleSubmit } = useForm(
        {},
        onSubmit,
        validatorConfig
    );
    return (
        <form
            className="input-group mt-md-4 mb-4 mb-md-0"
            onSubmit={handleSubmit}
        >
            <TextField
                type="text"
                placeholder="Введите название товара"
                name="search"
                onChange={handleChange}
                value={form.search || ""}
            >
                <button
                    className="btn btn-outline-secondary bg-white border-start-0 border"
                    type="submit"
                >
                    <i className="fa fa-search"></i>
                </button>
            </TextField>
        </form>
    );
};

export default Search;
