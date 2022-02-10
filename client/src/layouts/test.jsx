import React from "react";
import paints from "../mockData/finishMutableData.json";
import templates from "../mockData/endTemplateData.json";
import { addNewProperties } from "../utils/addNewProperties";
import { mergeArrayOfObjects } from "../utils/mergeArrayOfObjects";

const Test = () => {
    function createProducts(paints, templates) {
        const paintsModifed = addNewProperties(paints);
        const allProducts = mergeArrayOfObjects(templates, paintsModifed);
        const allProductsFiltred = allProducts.filter(
            (item) => item.paints.length !== 0
        );
        return allProductsFiltred.map((product) => {
            const lower = product.paints.sort((a, b) => a.price - b.price)[0]
                .price;
            return { ...product, lowestPrice: lower };
        });
    }
    const array = createProducts(paints, templates);
    console.log("array", array);
    return <h2>Tests</h2>;
};

export default Test;
