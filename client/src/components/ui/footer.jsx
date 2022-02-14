import React from "react";

const Footer = () => {
    function getYear() {
        return new Date().getFullYear();
    }

    return (
        <footer className="bg-dark text-white mt-auto">
            <div className="container py-4">
                <div className="row">
                    <div className="col-lg-4">
                        © {getYear()} my-paints.shop.ru Все права защищены
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
