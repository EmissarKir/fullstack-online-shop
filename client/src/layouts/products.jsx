import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import Loader from "../components/common/loader";
import ProductListPage from "../components/page/productListPage";
import ProductPage from "../components/page/productPage";
import {
    getFiltredProducts,
    getProductsLoadingStatus,
    loadProductsList
} from "../store/products";

const productCategory = {
    paint: "краска",
    enamel: "эмаль",
    primer: "грунтовка",
    varnish: "лак",
    oilAndWaxes: "масло и воск",
    woodFinish: "лазурь"
};

const Products = () => {
    const dispatch = useDispatch();
    const { category } = useParams();
    const products = useSelector(getFiltredProducts());
    const isLoading = useSelector(getProductsLoadingStatus());

    useEffect(() => {
        // if /products или /products/paint,/products/enamel..., not /products/974e97f2-549d-48d1-8f10-151c1bd316c8
        if (!category || productCategory[category]) {
            dispatch(loadProductsList(category));
        }
    }, [category]);

    if (isLoading) return <Loader />;

    return (
        <>
            {category && !productCategory[category] ? (
                <ProductPage userId={category} />
            ) : (
                <ProductListPage items={products} />
            )}
        </>
    );
};

export default Products;
