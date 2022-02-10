import React from "react";
import { Link } from "react-router-dom";

const AdminPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h1>Страница админа</h1>
                    <Link to="/admin/templates">
                        <button className="btn btn-outline-success">
                            Шаблоны красок
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
