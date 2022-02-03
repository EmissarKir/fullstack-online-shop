import httpService from "./http.service";

const templatePaintEndPoint = `templates/`;

const templatePaintService = {
    update: async (content) => {
        const { data } = await httpService.patch(
            templatePaintEndPoint + content.templateId, // при MONGO заменить на _id
            content
        );
        return data;
    },
    get: async (id) => {
        const { data } = await httpService.get(templatePaintEndPoint + id);
        return data;
    },
    fetchAll: async () => {
        const { data } = await httpService.get(templatePaintEndPoint);
        return data;
    },
    create: async (id, content) => {
        const { data } = await httpService.put(
            templatePaintEndPoint + id,
            content
        );
        return data;
    },
    delete: async (id) => {
        const { data } = await httpService.delete(templatePaintEndPoint + id);
        return data;
    }
};
export default templatePaintService;
