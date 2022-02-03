import httpService from "./http.service";

const templatePaintEndPoint = `template/`;

const templatePaintService = {
    update: async (content) => {
        const { data } = await httpService.patch(
            templatePaintEndPoint + content._id, // при MONGO заменить на _id
            content
        );
        return data;
    },
    // get: async (id) => {
    //     const { data } = await httpService.get(templatePaintEndPoint + id);
    //     return data;
    // },
    fetchAll: async () => {
        const { data } = await httpService.get(templatePaintEndPoint);
        return data;
    },
    create: async (content) => {
        const { data } = await httpService.post(templatePaintEndPoint, content);
        return data;
    },
    delete: async (id) => {
        const { data } = await httpService.delete(templatePaintEndPoint + id);
        return data;
    }
};
export default templatePaintService;
