import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./tooltip.css";

const Tooltip = ({ children, direction, content, showTip }) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(showTip);
    }, [showTip]);

    const hideTip = () => {
        setActive(false);
    };
    return (
        <div className="Tooltip-Wrapper" onMouseLeave={hideTip}>
            {children}
            {active && (
                <div className={`Tooltip-Tip ${direction || "top"}`}>
                    {content}
                </div>
            )}
        </div>
    );
};
Tooltip.propTypes = {
    children: PropTypes.object,
    direction: PropTypes.string,
    content: PropTypes.string,
    showTip: PropTypes.bool
};
export default Tooltip;
