const { mergeArrayOfObjects } = require("../utils/mergeArrayOfObjects");
const { addNewProperties } = require("../utils/addNewProperties");

function createProducts(paints, templates) {
  const paintsModifed = addNewProperties(paints);
  const allProducts = mergeArrayOfObjects(templates, paintsModifed);
  const allProductsFiltred = allProducts.filter(
    (item) => item.paints.length !== 0
  );
  return allProductsFiltred.map((product) => {
    const lower = product.paints.sort((a, b) => a.price - b.price)[0].price;
    return { ...product, lowestPrice: lower };
  });
}

module.exports = { createProducts };
