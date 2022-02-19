import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartItemsReducer from "./cartItems";
import filterReducer from "./filters";
import templatesReducer from "./templates";
import productsReducer from "./products";
import usersReducer from "./users";
import reviewsReducer from "./reviews";
import ordersReducer from "./orders";

const rootReducer = combineReducers({
    users: usersReducer,
    products: productsReducer,
    templates: templatesReducer,
    itemsCart: cartItemsReducer,
    filter: filterReducer,
    reviews: reviewsReducer,
    orders: ordersReducer
});

function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}

export default createStore;
