import httpService from "./http.service";

const allPaintsEndPoint = `paints/`;

const allPaintsService = {
    fetchAll: async () => {
        const { data } = await httpService.get(allPaintsEndPoint);
        return data;
    }
};
export default allPaintsService;
