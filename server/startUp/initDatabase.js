const mergeArrayOfObjects = require("../utils/mergeArrayOfObjects");
const addNewProperties = require("../utils/addNewProperties");

const Product = require("../models/Product");
const Template = require("../models/Template");

const paintsMock = require("../mock/paints.json");
const templatesMock = require("../mock/templates.json");

function createProducts(paints, templates) {
  const paintsModifed = addNewProperties(paints);
  const arrayFull = mergeArrayOfObjects(templates, paintsModifed);
  return arrayFull.filter((item) => item.paints.length !== 0);
}

module.exports = async () => {
  const templates = await Template.find();
  if (templates.length !== templatesMock.length) {
    await createInitialEntity(Template, templatesMock);
  }

  const productsMock = createProducts(paintsMock, templatesMock);
  const products = await Product.find();
  if (products.length !== productsMock.length) {
    await createInitialEntity(Product, productsMock);
  }
};
async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (error) {
        return error;
      }
    })
  );
}
