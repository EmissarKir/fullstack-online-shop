import React, { useEffect } from "react";
import { Route, Switch } from "react-router";

import NavBar from "./components/ui/navbar/navBar.jsx";
import Breadcrumb from "./components/ui/breadcrumbs";
import ProtectedRoute from "./components/common/protectedRoute";

import routes from "./routes";
import Search from "./components/ui/search.jsx";
import { getIsLoggedIn, loadUsers } from "./store/users.js";
import { useDispatch, useSelector } from "react-redux";
import { loadReviewsList } from "./store/reviews.js";
import Footer from "./components/ui/footer.jsx";

const getRoutes = (routes) => {
    return routes.map((prop, key) => {
        if (prop.protected === true) {
            return (
                <ProtectedRoute
                    path={prop.path}
                    component={prop.component}
                    key={key}
                />
            );
        } else {
            return (
                <Route path={prop.path} component={prop.component} key={key} />
            );
        }
    });
};

function App() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());

    useEffect(() => {
        dispatch(loadReviewsList());
        dispatch(loadUsers());
    }, [isLoggedIn]);

    return (
        <div className="main-content">
            <NavBar />
            <main>
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

                <Switch>
                    <Switch>{getRoutes(routes)}</Switch>
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

export default App;
