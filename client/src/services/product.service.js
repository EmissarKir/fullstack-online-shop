import httpService from "./http.service";

const productEndPoint = `product/`;

const productService = {
    fetchAll: async () => {
        const { data } = await httpService.get(productEndPoint);
        return data;
    }
};
export default productService;
