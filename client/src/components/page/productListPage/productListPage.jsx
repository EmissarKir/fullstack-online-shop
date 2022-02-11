import React from "react";
import PropTypes from "prop-types";

import ProductCard from "../../ui/productCard/productCard";
import ProductsFilter from "../../ui/productsFilter";
import ActiveFilters from "../../ui/activeFilters";
import Pagination from "../../common/pagination";
import { usePagination } from "../../../hooks/usePagination";
import { useSelector } from "react-redux";
import { getAverageRate } from "../../../store/reviews";

const ProductListPage = ({ items }) => {
    const reviewsObj = useSelector(getAverageRate());
    const pageSize = 20;

    const { dataCrop, currentPage, pages, handlePageChange } = usePagination({
        contentPerPage: pageSize,
        count: items
    });

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <ProductsFilter />
                    <ActiveFilters />
                </div>
            </div>
            <div className="row">
                {dataCrop.map((item) => {
                    const rate = reviewsObj[item.templateId]
                        ? reviewsObj[item.templateId].averageRate
                        : 0;

                    return (
                        <ProductCard
                            key={item.templateId}
                            item={item}
                            rate={rate}
                        />
                    );
                })}
            </div>
            <div className="d-flex justify-content-center">
                <Pagination
                    pages={pages}
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
};
ProductListPage.propTypes = {
    items: PropTypes.array
};
export default ProductListPage;
