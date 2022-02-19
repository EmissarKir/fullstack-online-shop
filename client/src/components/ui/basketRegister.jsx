import React from "react";
import PropTypes from "prop-types";
import TextField from "../common/form/textField";

const BasketRegister = ({ form, handleChange, errors, isLogged }) => {
    return (
        <div className="card mb-4">
            <div className="card-header">Ваши данные</div>
            <div className="card-body">
                <form>
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
                        value={form.email || ""}
                        error={errors.email}
                    />
                    {!isLogged && (
                        <TextField
                            label="Пароль"
                            type="password"
                            name="password"
                            value={form.password || ""}
                            onChange={handleChange}
                            error={errors.password}
                        />
                    )}
                </form>
            </div>
        </div>
    );
};
BasketRegister.propTypes = {
    form: PropTypes.object,
    handleChange: PropTypes.func,
    errors: PropTypes.object,
    isLogged: PropTypes.bool
};
export default BasketRegister;
