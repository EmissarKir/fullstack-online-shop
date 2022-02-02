import { createAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import templatePaintService from "../services/templatePaint.services";
import history from "../utils/history";

const templatesSlice = createSlice({
    name: "templates",
    initialState: {
        entities: null,
        isLoading: false,
        error: null
    },
    reducers: {
        templatesRequested: (state) => {
            state.isLoading = true;
        },
        templatesReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        templatesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        updateTemplateReceived: (state, action) => {
            const index = state.entities.findIndex((x) => {
                return x.templateId === action.payload.templateId;
            });
            state.entities[index] = action.payload;
        },
        createTemplateReceived: (state, action) => {
            state.entities.push(action.payload);
        },
        removeTemplateReceived: (state, action) => {
            state.entities = state.entities.filter(
                (c) => c.templateId !== action.payload
            );
        }
    }
});

const { actions, reducer: templatesReducer } = templatesSlice;
const {
    templatesRequested,
    templatesReceived,
    templatesRequestFailed,
    updateTemplateReceived,
    createTemplateReceived,
    removeTemplateReceived
} = actions;
const updateTemplateRequested = createAction(
    "templates/updateTemplateRequested"
);
const createTemplateRequested = createAction(
    "templates/createTemplateRequested"
);
const removeTemplateRequested = createAction(
    "templates/removeTemplateRequested"
);

export const loadTemplatesList = () => async (dispatch) => {
    dispatch(templatesRequested());
    try {
        const { content } = await templatePaintService.fetchAll();
        dispatch(templatesReceived(content));
    } catch (error) {
        dispatch(templatesRequestFailed(error.message));
    }
};
export const createTemplate = (payload) => async (dispatch) => {
    dispatch(createTemplateRequested());
    try {
        const newContent = { ...payload, templateId: uuidv4() };
        const { content } = await templatePaintService.create(
            newContent.templateId,
            newContent
        );

        dispatch(createTemplateReceived(content));
        history.push(`/admin/templates`);
    } catch (error) {
        dispatch(templatesRequestFailed);
    }
};

export const updateTemplate = (payload) => async (dispatch) => {
    dispatch(updateTemplateRequested());
    try {
        const { content } = await templatePaintService.update(payload);
        dispatch(updateTemplateReceived(content));
        history.push(`/admin/templates`);
    } catch (error) {
        dispatch(templatesRequestFailed(error.message));
    }
};
export const removeTemplate = (templateId) => async (dispatch) => {
    dispatch(removeTemplateRequested());
    try {
        const { content } = await templatePaintService.delete(templateId);
        if (content === null) {
            dispatch(removeTemplateReceived(templateId));
        }
    } catch (error) {
        dispatch(templatesRequestFailed(error.message));
    }
};

export const getTemplates = () => (state) => state.templates.entities;
export const getTemplatesLoadingStatus = () => (state) =>
    state.templates.isLoading;

export const getTemplateById = (id) => (state) => {
    if (state.templates.entities) {
        return state.templates.entities.find((item) => item.templateId === id);
    }
};

export default templatesReducer;
