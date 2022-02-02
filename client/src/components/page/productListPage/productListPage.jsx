import React from "react";
import PropTypes from "prop-types";

import ProductCard from "../../ui/productCard/productCard";
import ProductsFilter from "../../ui/productsFilter";
import ActiveFilters from "../../ui/activeFilters";
import Pagination from "../../common/pagination";
import { usePagination } from "../../../hooks/usePagination";

const ProductListPage = ({ items }) => {
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
                {dataCrop.map((item) => (
                    <ProductCard key={item.templateId} item={item} />
                ))}
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
