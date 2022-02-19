import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/palette.svg";
import paintRoller from "../../assets/paint-roller.svg";

const categoriesData = [
    {
        title: "Краски",
        icon: paintRoller,
        path: "/products/paint",
        id: 1
    },
    {
        title: "Эмали",
        icon: logo,
        path: "/products/enamel",
        id: 2
    },
    {
        title: "Грунтовки",
        icon: paintRoller,
        path: "/products/primer",
        id: 3
    },
    {
        title: "Лазури",
        icon: paintRoller,
        path: "/products/woodFinish",
        id: 4
    },
    {
        title: "Масла и воски",
        icon: paintRoller,
        path: "/products/oilAndWaxes",
        id: 5
    },
    {
        title: "Лаки",
        icon: paintRoller,
        path: "/products/varnish",
        id: 6
    }
];

const Categories = () => {
    return (
        <div className="container my-5">
            <div className="row">
                {categoriesData.map((category) => (
                    <div className="col-sm-6 col-xl-3" key={category.id}>
                        <Link
                            to={category.path}
                            className="text-decoration-none text-secondary"
                        >
                            <div className="d-flex justify-content-baseline align-items-center p-4  rounded-3 ">
                                <span className="mb-0">
                                    <img
                                        src={category.icon}
                                        alt="Logo"
                                        height={50}
                                    />
                                </span>
                                <div className="ms-4 h6 fw-normal">
                                    <h5 className="mb-0 fw-bold">
                                        {category.title}
                                    </h5>
                                    <p className="mb-0">Expert Tutors</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
