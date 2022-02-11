import React from "react";
import { useSelector } from "react-redux";
import { getBrandList } from "../../store/products";

import FilterItem from "./filterItem";

const items = [
    {
        title: "Брэнд",
        value: "brand",
        id: 1,
        submenu: [
            {
                _id: "БЫСТРОРЕМОНТ",
                title: "БЫСТРОРЕМОНТ",
                value: "БЫСТРОРЕМОНТ"
            },
            { _id: "DULUX", title: "DULUX", value: "DULUX" },
            { _id: "TIKKURILA", title: "TIKKURILA", value: "TIKKURILA" },
            { _id: "NEOMID", title: "NEOMID", value: "NEOMID" },
            { _id: "ALPINA", title: "ALPINA", value: "ALPINA" },
            { _id: "PINOTEX", title: "PINOTEX", value: "PINOTEX" },
            { _id: "FAKTURA", title: "FAKTURA ", value: "FAKTURA" },
            { _id: "MARSHALL", title: "MARSHALL", value: "MARSHALL" },
            { _id: "VINCENT", title: "VINCENT", value: "VINCENT" },
            { _id: "REMMERS", title: "REMMERS", value: "REMMERS" },
            { _id: "SIKKENS", title: "SIKKENS", value: "SIKKENS" },
            { _id: "HAMMERITE", title: "HAMMERITE", value: "HAMMERITE" },
            { _id: "CERESIT", title: "CERESIT", value: "CERESIT" },
            {
                _id: "ПЯТЬ МАСТЕРОВ",
                title: "ПЯТЬ МАСТЕРОВ",
                value: "ПЯТЬ МАСТЕРОВ"
            },
            { _id: "CAPAROL", title: "CAPAROL", value: "CAPAROL" },
            { _id: "VGT", title: "VGT", value: "VGT" },
            { _id: "НЕРЖАВЕЙ", title: "НЕРЖАВЕЙ", value: "НЕРЖАВЕЙ" },
            { _id: "FINNCOLOR", title: "FINNCOLOR", value: "FINNCOLOR" },
            {
                _id: "ЯРОСЛАВСКИЕ КРАСКИ",
                title: "ЯРОСЛАВСКИЕ КРАСКИ ",
                value: "ЯРОСЛАВСКИЕ КРАСКИ"
            },
            { _id: "BECKERS", title: "BECKERS", value: "BECKERS" },
            { _id: "СДЕЛАЙ ПОЛ", title: "СДЕЛАЙ ПОЛ", value: "СДЕЛАЙ ПОЛ" },
            { _id: "PETRI", title: "PETRI", value: "PETRI" }
        ]
    },
    {
        title: "Применение",
        value: "FIoEU",
        id: 2,
        submenu: [
            { title: "Для внутренних работ", id: 1, value: "внутри" },
            { title: "Для наружных работ", id: 2, value: "снаружи" },
            { title: "Универсальные", id: 3, value: "внутри, снаружи" }
        ]
    },
    {
        title: "Сортировка",
        value: "sort",
        id: 3,
        submenu: [
            { title: "По цене (по убыванию)", id: 1, value: "desc" },
            { title: "По цене (по возрастанию)", id: 2, value: "asc" }
        ]
    }
];

const ProductsFilter = () => {
    const brands = useSelector(getBrandList());
    const itemsWithActuallyBrands = items.map((item) =>
        item.value === "brand"
            ? {
                  ...item,
                  submenu: item.submenu.filter((x) => brands.includes(x.value))
              }
            : item
    );

    return (
        <div className="container ">
            <ul className="categories d-flex justify-content-center nav mb-5">
                {itemsWithActuallyBrands.map((item) => (
                    <FilterItem item={item} key={item.id} />
                ))}
            </ul>
        </div>
    );
};

export default ProductsFilter;
