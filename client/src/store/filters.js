import { createSlice } from "@reduxjs/toolkit";
import history from "../utils/history";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        entities: {},
        sortBy: { asc: true },
        search: "",
        isLoading: false,
        isEmpty: true,
        error: null
    },
    reducers: {
        filterAdded: (state, action) => {
            if (Object.keys(action.payload.data).length !== 0) {
                if (!state.entities[action.payload.parent]) {
                    state.entities[action.payload.parent] = [];
                }
                state.entities[action.payload.parent] = action.payload.data;
                state.isEmpty = false;
            }
        },
        filterRemoved: (state, action) => {
            const key = state.entities[action.payload.title];
            key[action.payload.value] = false;
        },
        filterAllRemoved: (state) => {
            state.entities = {};
            state.isEmpty = true;
        },
        sortSwitched: (state, action) => {
            state.sortBy = action.payload;
        },
        searchAdded: (state, action) => {
            state.search = action.payload.search;
        },
        searchCleared: (state) => {
            state.search = "";
        }
    }
});

const { actions, reducer: filterReducer } = filterSlice;
const {
    filterAdded,
    filterRemoved,
    filterAllRemoved,
    sortSwitched,
    searchAdded,
    searchCleared
} = actions;

export const addFilter = (payload) => async (dispatch) => {
    dispatch(filterAdded(payload));
};
export const addSearch = (payload) => async (dispatch) => {
    dispatch(searchAdded(payload));
    history.push("/products");
};
export const clearSearchStore = () => async (dispatch) => {
    dispatch(searchCleared());
};

export const removeFilter = (payload) => (dispatch) => {
    dispatch(filterRemoved(payload));
};
export const removeAllFilters = () => (dispatch) => {
    dispatch(filterAllRemoved());
};
export const switchSortBy = (payload) => (dispatch) => {
    dispatch(sortSwitched(payload));
};
// селекторы
export const getFilterByParent = (parent) => (state) => {
    return state.filter.entities[parent];
};

export const getActiveFilters = () => (state) => {
    const createArray = (obj) => {
        return obj && Object.keys(obj).filter((key) => !!obj[key]);
    };
    const filters = state.filter.entities;
    return Object.entries(filters).map((item) => [
        item[0],
        createArray(item[1])
    ]);
};

export const getFilterStatus = () => (state) => {
    return state.filter.isEmpty;
};
export const getSearch = () => (state) => {
    return state.filter.search;
};

export default filterReducer;
