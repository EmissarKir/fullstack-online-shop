import React from "react";
import Breadcrumb from "./breadcrumbs";
import Search from "./search";

const BreadcrumbsAndSearchBar = () => {
    return (
        <section className="bg-dark navbar-dark">
            <div className="container">
                <div className="row d-flex align-items-baseline justify-content-between">
                    <div className="col-md-6">
                        <Breadcrumb />
                    </div>
                    <div className="col-md-6">
                        <Search />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BreadcrumbsAndSearchBar;
