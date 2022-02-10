import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const userEndPoint = "user/";

const usersService = {
    fetch: async () => {
        const { data } = await httpService.get(userEndPoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(userEndPoint, payload);
        return data;
    },
    update: async (payload) => {
        const { data } = await httpService.patch(
            userEndPoint + localStorageService.getUserId(),
            payload
        );
        return data;
    }
};
export default usersService;
