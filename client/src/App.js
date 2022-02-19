import React, { useEffect } from "react";
import { Route, Switch } from "react-router";

import NavBar from "./components/ui/navbar/navBar.jsx";
import ProtectedRoute from "./components/common/protectedRoute";

import routes from "./routes";
import { getIsLoggedIn, loadUsers } from "./store/users.js";
import { useDispatch, useSelector } from "react-redux";
import { loadReviewsList } from "./store/reviews.js";
import Footer from "./components/ui/footer.jsx";
import BreadcrumbsAndSearchBar from "./components/ui/breadcrumbsAndSearchBar.jsx";

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
                <BreadcrumbsAndSearchBar />
                <Switch>
                    <Switch>{getRoutes(routes)}</Switch>
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

export default App;
