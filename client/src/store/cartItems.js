import { createSlice } from "@reduxjs/toolkit";

const cartItemsSlice = createSlice({
    name: "cartItems",
    initialState: {
        entities: [],
        isLoading: false,
        error: null
    },
    reducers: {
        cartItemsRequested: (state) => {
            state.isLoading = true;
        },
        cartItemsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        cartItemsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        cartItemsAdded: (state, action) => {
            const index = state.entities.findIndex((x) => {
                return x.paintId === action.payload.paintId;
            });
            if (index === -1) {
                state.entities.push(action.payload);
            } else {
                state.entities[index].quantity =
                    state.entities[index].quantity + action.payload.quantity;
            }
        },
        cartQuantityIncremented: (state, action) => {
            const item = state.entities.find(
                (x) => x.paintId === action.payload
            );
            item.quantity++;
        },
        cartQuantityDecremented: (state, action) => {
            const item = state.entities.find(
                (x) => x.paintId === action.payload
            );
            item.quantity--;
        },
        cartQuantityInputUpdated: (state, action) => {
            const item = state.entities.find(
                (x) => x.paintId === action.payload.name
            );
            item.quantity = action.payload.value;
        },
        cartItemRemove: (state, action) => {
            const items = state.entities.filter(
                (item) => item.paintId !== action.payload
            );
            state.entities = items;
        }
    }
});

const { actions, reducer: cartItemsReducer } = cartItemsSlice;
const {
    cartItemsAdded,
    cartQuantityIncremented,
    cartQuantityDecremented,
    cartQuantityInputUpdated,
    cartItemRemove
} = actions;

export const addItemsCart = (payload) => (dispatch) => {
    dispatch(cartItemsAdded(payload));
};
export const incrementQuantity = (paintId) => (dispatch) => {
    dispatch(cartQuantityIncremented(paintId));
};
export const decrementQuantity = (paintId) => (dispatch, getState) => {
    const paint = getState().itemsCart.entities.find(
        (item) => item.paintId === paintId
    );
    if (paint.quantity > 1) {
        dispatch(cartQuantityDecremented(paintId));
    } else {
        dispatch(cartItemRemove(paintId));
    }
};
export const updateQuantityInput = (value) => (dispatch) => {
    dispatch(cartQuantityInputUpdated(value));
};
export const removeItemCart = (paintId) => (dispatch) => {
    dispatch(cartItemRemove(paintId));
};

// селекторы
export const getCartItems = () => (state) => state.itemsCart.entities;
export const getSumItem = (paintId) => (state) => {
    if (state.itemsCart.entities) {
        const item = state.itemsCart.entities.find(
            (item) => item.paintId === paintId
        );
        return item.price * item.quantity;
    } else {
        return [];
    }
};
export const getVolumeItem = (paintId) => (state) => {
    if (state.itemsCart.entities) {
        const item = state.itemsCart.entities.find(
            (item) => item.paintId === paintId
        );
        return (item.size * item.quantity).toFixed(1);
    } else {
        return [];
    }
};

export const getTotalSum = () => (state) => {
    if (state.itemsCart.entities) {
        return state.itemsCart.entities.reduce(
            (sum, curr) => sum + curr.price * curr.quantity,
            0
        );
    }
};
export const getCartCount = () => (state) => {
    if (state.itemsCart.entities) {
        return state.itemsCart.entities.reduce(
            (total, curr) => total + curr.quantity,
            0
        );
    }
};

export default cartItemsReducer;
