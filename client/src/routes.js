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
import User from "./layouts/user";
import Tests from "./layouts/test";

const routes = [
    {
        path: "/tests",
        name: "TestComponent",
        component: Tests,
        display: false
    },
    {
        path: "/user/:userId",
        name: "User",
        component: User,
        display: false
    },
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
        path: "/products/:category",
        name: "Все товары",
        component: Products,
        display: false
    },
    {
        path: "/products",
        name: "Все товары",
        component: Products,
        display: false
    },
    {
        path: "/products/paint",
        name: "Краски",
        component: Products
    },
    {
        path: "/products/enamel",
        name: "Эмали",
        component: Products
    },
    {
        path: "/products/primer",
        name: "Грунтовки",
        component: Products
    },
    {
        path: "/products/woodFinish",
        name: "Лазури",
        component: Products
    },
    {
        path: "/products/oilAndWaxes",
        name: "Масла и воски",
        component: Products
    },

    {
        path: "/products/varnish",
        name: "Лаки",
        component: Products
    },

    { path: "/", name: "Главная", component: HomePage, display: false }
];
export default routes;
