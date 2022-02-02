import React from "react";
import { Link, useLocation } from "react-router-dom";
import routes from "../../routes";

function Breadcrumb() {
    const location = useLocation().pathname;
    const crumbs = location.split("/").filter((item) => item);

    return (
        <div className="container">
            <nav className="row mt-4 ms-1">
                <ol className="breadcrumb">
                    {crumbs.length > 0 ? (
                        <li className="breadcrumb-item">
                            <Link to={`/`} className="text-muted">
                                Главная
                            </Link>
                        </li>
                    ) : (
                        <li className="breadcrumb-item text-muted">Главная</li>
                    )}

                    {crumbs.map((crumb, i) => {
                        const routeTo = `/${crumbs.slice(0, i + 1).join("/")}`;
                        const pathName = routes.find(
                            (item) => item.path === routeTo
                        );

                        const isLast = i === crumbs.length - 1;
                        return isLast ? (
                            <li key={i} className="breadcrumb-item text-muted">
                                {pathName ? pathName.name : crumb}
                            </li>
                        ) : (
                            <li key={i} className="breadcrumb-item">
                                <Link className="text-muted" to={routeTo}>
                                    {pathName ? pathName.name : crumb}
                                </Link>
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </div>
    );
}

export default Breadcrumb;
