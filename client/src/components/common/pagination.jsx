import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ pages, onPageChange, currentPage }) => {
    if (pages.length === 1) {
        return null;
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination ">
                {pages.map((page) => (
                    <li
                        className={
                            "page-item " +
                            (page === currentPage ? "active" : "")
                        }
                        key={page}
                    >
                        <button
                            className="page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
Pagination.propTypes = {
    pages: PropTypes.array.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;
