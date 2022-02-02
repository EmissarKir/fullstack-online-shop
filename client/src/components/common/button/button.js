import React from "react";
import PropTypes from "prop-types";

import "./button.css";

const Button = ({
    children,
    type,
    onClick,
    disabled,
    color,
    size,
    icon,
    end,
    start,
    otherStyles
}) => {
    const switchIcons = () => {
        const margin = start ? " me-0" : end ? " ms-2" : "";
        switch (icon) {
            case "edit":
                return <i className={"bi bi-pencil-square" + margin}></i>;
            case "delete":
                return <i className={"bi bi-trash" + margin}></i>;
            case "cart":
                return <i className={"bi bi-cart4" + margin}></i>;
            case "back":
                return <i className={"bi bi-caret-left" + margin}></i>;
            case "add":
                return <i className={"bi bi-plus-circle" + margin}></i>;
            default:
                return null;
        }
    };
    return (
        <button
            className={`btnCustom btnCustom-${color} btnCustom-${size} ${otherStyles}`}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {start ? switchIcons() : null}

            {children}
            {end ? switchIcons() : null}
        </button>
    );
};
Button.defaultProps = {
    type: "button",
    color: "primary",
    size: "middle"
};
Button.propTypes = {
    children: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    end: PropTypes.bool,
    start: PropTypes.bool,
    otherStyles: PropTypes.string
};
export default Button;
