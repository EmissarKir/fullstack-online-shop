import React from "react";
import { useSelector } from "react-redux";
import { getBrandList } from "../../store/products";

import data from "../../data/productsFilterData.json";

import FilterItem from "./filterItem";

const ProductsFilter = () => {
    const brands = useSelector(getBrandList());
    const itemsWithActuallyBrands = data.map((item) =>
        item.value === "brand"
            ? {
                  ...item,
                  submenu: item.submenu.filter((x) => brands.includes(x.value))
              }
            : item
    );

    return (
        <section>
            <ul className="categories d-flex  flex-column flex-md-row justify-content-md-center nav mb-md-4 mb-2">
                {itemsWithActuallyBrands.map((item) => (
                    <FilterItem item={item} key={item.id} />
                ))}
            </ul>
        </section>
    );
};

export default ProductsFilter;
