import React from "react";
import { Link } from "react-router-dom";
import useMockData from "../utils/mockData";

const AdminPage = () => {
    const { error, initialize, progress, status } = useMockData();
    const handleClick = () => {
        initialize();
    };

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
                    <h3>Add to Firebase</h3>
                    <button className="btn-primary" onClick={handleClick}>
                        Инициализация
                    </button>
                    <ul>
                        <li>Status: {status}</li>
                        <li>Progress: {progress}</li>
                        {error && <li>error: {error}</li>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
