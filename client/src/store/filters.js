import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        entities: {},
        sortBy: { asc: true },
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
        }
    }
});

const { actions, reducer: filterReducer } = filterSlice;
const { filterAdded, filterRemoved, filterAllRemoved, sortSwitched } = actions;

export const addFilter = (payload) => async (dispatch) => {
    dispatch(filterAdded(payload));
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
export default filterReducer;
