import { createAction, createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import usersService from "../services/users.service";
import history from "../utils/history";

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          isLoading: true,
          error: null,
          auth: { userId: localStorageService.getUserId() },
          isLoggedIn: true,
          dataLoaded: false
      }
    : {
          entities: null,
          isLoading: false,
          error: null,
          auth: null,
          isLoggedIn: false,
          dataLoaded: false
      };

const usersSLice = createSlice({
    name: "users",
    initialState,
    reducers: {
        usersRequested: (state) => {
            state.isLoading = true;
        },
        usersReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
            state.dataLoaded = true;
        },
        usersRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        authRequestSuccess: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        userCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        userLoggedOut: (state) => {
            state.entities = null;
            state.isLoggedIn = false;
            state.auth = null;
            state.dataLoaded = false;
        },
        authRequested: (state) => {
            state.error = null;
        },
        userUpdateSuccessed: (state, action) => {
            state.entities[
                state.entities.findIndex(
                    (item) => item._id === action.payload._id
                )
            ] = action.payload;
        }
    }
});

const { reducer: usersReducer, actions } = usersSLice;
const {
    usersRequested,
    usersReceived,
    usersRequestFailed,
    authRequestSuccess,
    userLoggedOut,
    authRequested,
    authRequestFailed,
    userUpdateSuccessed
} = actions;
const userUpdateFailed = createAction("users/userUpdateFailed");
const userUpdateRequested = createAction("users/userUpdateRequested");
export const signUp = (payload) => async (dispatch) => {
    dispatch(authRequested());
    try {
        const data = await authService.register(payload);
        localStorageService.setTokens(data);
        dispatch(authRequestSuccess({ userId: data.userId }));
        // history.push("/");
    } catch (error) {
        dispatch(authRequestFailed(error.message));
    }
};

export const login =
    ({ data, redirect }) =>
    async (dispatch) => {
        const { email, password } = data;
        dispatch(authRequested());
        try {
            const content = await authService.login({ email, password });
            localStorageService.setTokens(content);
            dispatch(authRequestSuccess({ userId: content.userId }));
            history.push(redirect);
        } catch (error) {
            dispatch(authRequestFailed(error.message));
        }
    };

export const loadUsers = () => async (dispatch) => {
    dispatch(usersRequested());
    try {
        const { content } = await usersService.fetch();
        dispatch(usersReceived(content));
    } catch (error) {
        dispatch(usersRequestFailed(error.message));
    }
};

export const logOut = () => (dispatch) => {
    localStorageService.removeAuthData();
    dispatch(userLoggedOut());
    history.push("/");
};

export const updateUser = (payload) => async (dispatch) => {
    dispatch(userUpdateRequested());
    try {
        const { content } = await usersService.update(payload);
        dispatch(userUpdateSuccessed(content));
    } catch (error) {
        dispatch(userUpdateFailed(error.message));
    }
};

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;
export const getDataStatus = () => (state) => state.users.dataLoaded;

export const getCurrentUserData = () => (state) => {
    if (state.users.auth) {
        return state.users.entities
            ? state.users.entities.find(
                  (item) => item._id === state.users.auth.userId
              )
            : null;
    } else {
        return {};
    }
};
export const getCurrentUserId = () => (state) => state.users.auth.userId;

export const getUserById = (userId) => (state) => {
    if (state.users.entities) {
        return state.users.entities.find((item) => item._id === userId);
    }
};

export default usersReducer;
