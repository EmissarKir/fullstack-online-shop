import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getActiveFilters,
    getFilterStatus,
    removeAllFilters,
    removeFilter
} from "../../store/filters";

import { templateProperties } from "../../constants/templateProperties";
import ActiveFiltersItem from "./activeFiltersItem";

const ActiveFilters = () => {
    const dispatch = useDispatch();
    const isEmptyFilter = useSelector(getFilterStatus());
    const filters = useSelector(getActiveFilters());

    // смена названия
    function findName(name) {
        return templateProperties.find(
            (item) => item[0] === name && item[1]
        )[1];
    }

    const handleRemove = (title, value) => {
        dispatch(removeFilter({ title, value }));
    };
    const clearFilter = () => {
        dispatch(removeAllFilters());
    };
    if (isEmptyFilter) return null;
    return (
        <div className="mb-3">
            <div className="d-flex flex-row mb-md-4 mb-2">
                <h5>Выбранные фильтры</h5>
                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm ms-3 "
                    onClick={clearFilter}
                >
                    Сбросить фильтры <i className="bi bi-x-lg ms-1"></i>
                </button>
            </div>
            <ActiveFiltersItem {...{ filters, findName, handleRemove }} />
        </div>
    );
};

export default ActiveFilters;
