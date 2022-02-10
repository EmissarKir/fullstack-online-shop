import { createAction, createSlice } from "@reduxjs/toolkit";
import reviewsService from "../services/reviews.service";

// import templatePaintService from "../services/templatePaint.services";
// import history from "../utils/history";

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

export const loadReviewsList = (templateId) => async (dispatch) => {
    dispatch(reviewsRequested());
    try {
        const { content } = await reviewsService.getReviewsById(templateId);
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

export default reviewsReducer;
