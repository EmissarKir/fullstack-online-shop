import { createSlice } from "@reduxjs/toolkit";
import productService from "../services/product.service";
import { pipe } from "../utils/withoutLodash";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        entities: [],
        isLoading: false,
        error: null,
        dataLoaded: false
    },
    reducers: {
        productsRequested: (state) => {
            state.isLoading = true;
        },
        productsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
            state.dataLoaded = true;
        },
        productsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { actions, reducer: productsReducer } = productsSlice;
const { productsRequested, productsReceived, productsRequestFailed } = actions;

export const loadProductsList = (category) => async (dispatch) => {
    dispatch(productsRequested());
    if (category) {
        try {
            const { content } = await productService.fetchByCategory(category);
            dispatch(productsReceived(content));
        } catch (error) {
            dispatch(productsRequestFailed(error.message));
        }
    } else {
        try {
            const { content } = await productService.fetchAll();
            dispatch(productsReceived(content));
        } catch (error) {
            dispatch(productsRequestFailed(error.message));
        }
    }
};

// Селекторы
export const getProducts = () => (state) => state.products.entities;

export const getFiltredProducts = () => (state) => {
    const filters = state.filter.entities;
    const allProducts = state.products.entities;
    const search = state.filter.search;
    const createArray = (obj) => {
        return obj && Object.keys(obj).filter((key) => !!obj[key]);
    };
    function tranformValues(array, value) {
        return createArray(array[value]);
    }

    function filterbyValue(initialArray, value, obj) {
        const arrayValues = tranformValues(obj, value);
        return arrayValues && arrayValues.length !== 0
            ? initialArray.filter((item) => arrayValues.includes(item[value]))
            : initialArray;
    }
    function searchByValue(initialArray, value, str) {
        return str
            ? initialArray.filter((item) =>
                  item[value].toLowerCase().includes(str.toLowerCase().trim())
              )
            : initialArray;
    }

    // фильтр по брэнду
    function filterByBrand(array) {
        return filterbyValue(array, "brand", filters);
    }
    // фильтр по использованию внутри / снаружи
    function filterByUse(array) {
        return filterbyValue(array, "FIoEU", filters);
    }
    // фильтр по использованию полю Search
    function filterBySearchField(array) {
        return searchByValue(array, "sortName", search);
    }

    return pipe(filterByBrand, filterByUse, filterBySearchField)(allProducts);
};

export const getProductsLoadingStatus = () => (state) =>
    state.products.isLoading;

export const getProductById = (id) => (state) => {
    if (state.products.entities) {
        return state.products.entities.find((item) => item.templateId === id);
    }
};
export const getProductArrayPaints = (id) => (state) => {
    if (state.products.entities) {
        const arrPaints = state.products.entities.find(
            (item) => item.templateId === id
        ).paints;

        const arrObj = {};
        for (let i = 0; i < arrPaints.length; i++) {
            arrObj[arrPaints[i].base]
                ? arrObj[arrPaints[i].base].push(arrPaints[i])
                : (arrObj[arrPaints[i].base] = [arrPaints[i]]);
        }
        return arrObj;
    }
};
export const getDataStatus = () => (state) => state.products.dataLoaded;

// получить список всех брендов
export const getBrandList = () => (state) => {
    if (state.products.entities) {
        const arr = state.products.entities.map((item) => item.brand);
        return [...new Set(arr)];
    }
};

export default productsReducer;
