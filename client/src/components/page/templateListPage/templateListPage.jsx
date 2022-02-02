import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import _ from "lodash";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PaintsTable from "../../ui/paintsTable";
import Pagination from "../../common/pagination";
import Button from "../../common/button";
import { usePagination } from "../../../hooks/usePagination";

import {
    getTemplates,
    getTemplatesLoadingStatus,
    loadTemplatesList,
    removeTemplate
} from "../../../store/templates";
import Loader from "../../common/loader";

const TemplateListPage = () => {
    const dispatch = useDispatch();

    const history = useHistory();
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });

    const [searchQuery, setSearchQuery] = useState("");
    const pageSize = 40;

    useEffect(() => {
        console.log("loadTemplatesList!!!");
        dispatch(loadTemplatesList());
    }, []);
    const isLoadingTemplates = useSelector(getTemplatesLoadingStatus());

    const templates = useSelector(getTemplates());

    const filteredUsers =
        templates &&
        templates.filter(
            (paint) =>
                paint.sortName
                    .toLowerCase()
                    .indexOf(searchQuery.toLowerCase()) !== -1
        );

    const sortedPaints = _.orderBy(
        filteredUsers,
        [sortBy.path],
        [sortBy.order]
    );

    const { dataCrop, currentPage, pages, handlePageChange } = usePagination({
        contentPerPage: pageSize,
        count: sortedPaints,
        initial: searchQuery
    });

    const handleSort = (item) => {
        setSortBy(item);
    };

    const handleEdit = (id) => {
        history.push(`/admin/templates/${id}`);
    };
    const handleDelete = (id) => {
        if (window.confirm("Вы действительно хотите удалить шаблон?")) {
            dispatch(removeTemplate(id));
        }
    };

    const handleSearchQuery = ({ target }) => {
        setSearchQuery(target.value);
    };

    return (
        <div className="container-fluid">
            <div className="row mt-2">
                <div className="col-12">
                    <h1 className="text-center mt-5">Список шаблонов</h1>;
                </div>
            </div>

            <div className="row mt-2 justify-content-center">
                <div className="col-md-8">
                    <div className="d-flex flex-column flex-lg-row justify-content-center">
                        <div>
                            <input
                                type="text"
                                name="searchQuery"
                                className="form-control"
                                placeholder="Search..."
                                onChange={handleSearchQuery}
                                value={searchQuery}
                            />
                        </div>
                        <Link to="templates/create">
                            <Button
                                color="success"
                                otherStyles="ms-lg-5 mt-lg-0 mt-2"
                                icon="add"
                                end
                            >
                                Добавить
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            {!isLoadingTemplates ? (
                <>
                    <PaintsTable
                        users={dataCrop}
                        onSort={handleSort}
                        selectedSort={sortBy}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                    <Pagination
                        pages={pages}
                        onPageChange={handlePageChange}
                        currentPage={currentPage}
                    />
                </>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default TemplateListPage;
