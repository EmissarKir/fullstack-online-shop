import { useState, useEffect } from "react";
import _ from "lodash";

import { paginate } from "../utils/paginate";

export const usePagination = ({ contentPerPage, count, initial }) => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [initial]);

    const dataCrop = paginate(count, currentPage, contentPerPage);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const pageCount = Math.ceil(count.length / contentPerPage);

    const pages = _.range(1, pageCount + 1);

    return { dataCrop, currentPage, pages, handlePageChange, pageCount };
};
