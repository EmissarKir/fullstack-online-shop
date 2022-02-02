import React from "react";

import BasketPage from "./components/page/basketPage";
import CreateTemplatePage from "./components/page/createTemplatePage";
import EditTemplatePage from "./components/page/editTemplatePage";
import TemplateListPage from "./components/page/templateListPage";
import Products from "./layouts/products";
import AdminPage from "./layouts/adminPage";
import HomePage from "./layouts/homePage";
import Login from "./layouts/login";
import LogOut from "./layouts/logOut";

const routes = [
    {
        path: "/logout",
        name: "Выход",
        component: LogOut,
        display: false
    },
    {
        path: "/login",
        name: "Вход",
        component: Login,
        rigthSide: true,
        public: true
    },
    {
        path: "/register",
        name: "Регистрация",
        component: Login,
        rigthSide: true,
        public: true
    },

    {
        path: "/admin/templates/create",
        name: "Создание шаблона",
        component: CreateTemplatePage,
        display: false,
        protected: true
    },
    {
        path: "/admin/templates/:id",
        name: "Создание-карточки-товара",
        component: EditTemplatePage,
        display: false,
        protected: true
    },
    {
        path: "/admin/templates",
        name: "Шаблоны",
        component: TemplateListPage,
        display: false,
        protected: true
    },
    {
        path: "/admin",
        name: "Админ",
        component: AdminPage,
        rigthSide: true,
        private: true,
        protected: true
    },
    {
        path: "/basket",
        name: "Корзина",
        component: BasketPage,
        rigthSide: true,
        public: true,
        private: true,
        icon: <i className="bi bi-cart4"></i>
    },
    {
        path: "/products/:paintId",
        name: "Все товары",
        component: Products,
        display: false
    },
    {
        path: "/products",
        name: "Все товары",
        component: Products
    },
    { path: "/", name: "Главная", component: HomePage, display: false }
];
export default routes;
