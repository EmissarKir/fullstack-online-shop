import React from "react";
import PropTypes from "prop-types";

import ActiveFiltersSubitem from "./activeFiltersSubitem";

const ActiveFiltersItem = ({ filters, ...rest }) => {
    return (
        <div className="d-flex flex-wrap flex-row">
            {filters.map((item) => {
                return (
                    <ActiveFiltersSubitem item={item} {...rest} key={item} />
                );
            })}
        </div>
    );
};
ActiveFiltersItem.propTypes = {
    filters: PropTypes.array
};
export default ActiveFiltersItem;
