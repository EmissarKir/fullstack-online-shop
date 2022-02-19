import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const ordersEndPoint = `order/`;

const ordersService = {
    getOrders: async () => {
        const userId = localStorageService.getUserId();
        const { data } = await httpService.get(ordersEndPoint, {
            params: {
                orderBy: "userId",
                equalTo: `${userId}`
            }
        });
        return data;
    }
};
export default ordersService;
