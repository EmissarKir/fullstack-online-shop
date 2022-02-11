import httpService from "./http.service";

const reviewsEndPoint = `review/`;

const reviewsService = {
    fetchAll: async () => {
        const { data } = await httpService.get(reviewsEndPoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(reviewsEndPoint, payload);
        return data;
    }
    // getReviewsById: async (templateId) => {
    //     const { data } = await httpService.get(reviewsEndPoint, {
    //         params: {
    //             orderBy: "templateId",
    //             equalTo: `${templateId}`
    //         }
    //     });
    //     return data;
    // }
};
export default reviewsService;
