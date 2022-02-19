import { createSlice } from "@reduxjs/toolkit";
import ordersService from "../services/order.service";

// import templatePaintService from "../services/templatePaint.services";
// import history from "../utils/history";

const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        entities: null,
        isLoading: false,
        error: null
    },
    reducers: {
        ordersRequested: (state) => {
            state.isLoading = true;
        },
        ordersReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        ordersRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { actions, reducer: ordersReducer } = ordersSlice;
const { ordersRequested, ordersReceived, ordersRequestFailed } = actions;

export const loadOrdersList = () => async (dispatch) => {
    dispatch(ordersRequested());
    try {
        const { content } = await ordersService.getOrders();
        dispatch(ordersReceived(content));
    } catch (error) {
        dispatch(ordersRequestFailed(error.message));
    }
};
export const getOrders = () => (state) => state.orders.entities;
export const getOrdersLoadingStatus = () => (state) => state.orders.isLoading;

export default ordersReducer;
