import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import Loader from "../components/common/loader";
import ProductListPage from "../components/page/productListPage";
import ProductPage from "../components/page/productPage";
import { getDataStatus, getFiltredProducts } from "../store/products";

const Products = () => {
    const params = useParams();
    const { paintId } = params;

    const products = useSelector(getFiltredProducts());
    const dataStatus = useSelector(getDataStatus());

    if (!dataStatus) return <Loader />;

    return (
        <section>
            {paintId ? (
                <ProductPage userId={paintId} />
            ) : (
                <ProductListPage items={products} />
            )}
        </section>
    );
};

export default Products;
