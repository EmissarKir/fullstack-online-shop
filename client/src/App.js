import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "./components/ui/navbar/navBar";
import Breadcrumb from "./components/ui/breadcrumbs";
import ProtectedRoute from "./components/common/protectedRoute";

import routes from "./routes";

import { getIsLoggedIn, loadUsers } from "./store/users";
import { loadProductsList } from "./store/products";

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
        dispatch(loadProductsList());
        if (isLoggedIn) {
            dispatch(loadUsers());
        }
    }, [isLoggedIn]);

    return (
        <>
            <NavBar />
            <Breadcrumb />
            <Switch>
                <Switch>{getRoutes(routes)}</Switch>
            </Switch>
        </>
    );
}

export default App;
