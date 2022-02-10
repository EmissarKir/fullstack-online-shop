import httpService from "./http.service";

const productEndPoint = `product/`;

const productService = {
    fetchAll: async () => {
        const { data } = await httpService.get(productEndPoint);
        return data;
    },
    fetchByCategory: async (category) => {
        const { data } = await httpService.get(productEndPoint + category);
        return data;
    }
};
export default productService;
