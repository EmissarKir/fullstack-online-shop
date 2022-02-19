import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const productEndPoint = `product/`;

const productService = {
    fetchAll: async () => {
        const { data } = await httpService.get(productEndPoint);
        return data;
    },
    fetchByCategory: async (category) => {
        const { data } = await httpService.get(productEndPoint + category);
        return data;
    },
    update: async (payload) => {
        const userId = localStorageService.getUserId();
        const { data } = await httpService.post(productEndPoint, {
            ...payload,
            userId
        });
        return data;
    }
};
export default productService;
