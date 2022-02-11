import { createAction, createSlice } from "@reduxjs/toolkit";
import reviewsService from "../services/reviews.service";

const reviewsSlice = createSlice({
    name: "reviews",
    initialState: {
        entities: [],
        isLoading: false,
        error: null
    },
    reducers: {
        reviewsRequested: (state) => {
            state.isLoading = true;
        },
        reviewsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        reviewsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        createReviewReceived: (state, action) => {
            state.entities.push(action.payload);
        }
    }
});

const { actions, reducer: reviewsReducer } = reviewsSlice;
const {
    createReviewReceived,
    reviewsRequestFailed,
    reviewsRequested,
    reviewsReceived
} = actions;

const createReviewRequested = createAction("reviews/createReviewRequested");

export const loadReviewsList = () => async (dispatch) => {
    dispatch(reviewsRequested());
    try {
        const { content } = await reviewsService.fetchAll();
        dispatch(reviewsReceived(content));
    } catch (error) {
        dispatch(reviewsRequestFailed(error.message));
    }
};

export const createReview = (payload) => async (dispatch) => {
    dispatch(createReviewRequested());
    try {
        const { content } = await reviewsService.create(payload);
        dispatch(createReviewReceived(content));
    } catch (error) {
        dispatch(reviewsRequestFailed(error.message));
    }
};

export const getReviews = () => (state) => state.reviews.entities;
export const getReviewsLoadingStatus = () => (state) => state.reviews.isLoading;

export const getReviewsById = (id) => (state) => {
    if (state.reviews.entities) {
        return state.reviews.entities.filter((item) => item.templateId === id);
    }
};

export const getAverageRate = () => (state) => {
    if (state.reviews.entities) {
        const objReviews = state.reviews.entities.reduce((obj, curr) => {
            if (!obj[curr.templateId]) {
                obj[curr.templateId] = [];
            }
            obj[curr.templateId].push(curr.rate);
            return obj;
        }, {});
        const newObj = {};
        Object.keys(objReviews).forEach((key) => {
            const length = objReviews[key].length;
            const averageRate = Math.round(
                objReviews[key].reduce((total, curr) => total + curr, 0) /
                    length
            );
            return (newObj[key] = { averageRate, length });
        });
        return newObj;
    }
};

export default reviewsReducer;
