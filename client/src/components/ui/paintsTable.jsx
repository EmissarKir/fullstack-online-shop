import React from "react";
import PropTypes from "prop-types";

import Table, { TableBody, TableHeader } from "../common/table";
import Button from "../common/button";

const PaintsTable = ({ users, onSort, selectedSort, onEdit, onDelete }) => {
    const columns = {
        name: {
            path: "sortName",
            name: "Имя"
        },
        brand: {
            path: "brand",
            name: "Брэнд"
        },
        FIoEU: {
            path: "FIoEU",
            name: "Применение"
        },
        productCategory: {
            path: "productCategory",
            name: "Категория"
        },
        edit: {
            component: (paint) => (
                <Button
                    color="success"
                    icon="edit"
                    end
                    onClick={() => onEdit(paint._id)}
                >
                    Edit
                </Button>
            )
        },
        delete: {
            component: (paint) => (
                <Button
                    color="danger"
                    icon="delete"
                    end
                    onClick={() => onDelete(paint._id)} // при MONGO заменить на _id
                >
                    Delete
                </Button>
            )
        }
    };
    return (
        <Table {...{ onSort, selectedSort, columns, data: users }}>
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ columns, data: users }} />
        </Table>
    );
};
PaintsTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    currentSort: PropTypes.object,
    selectedSort: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func
};

export default PaintsTable;
