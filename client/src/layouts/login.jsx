import React from "react";
import { Link, useLocation } from "react-router-dom";
import RegisterForm from "../components/ui/registerForm";
import LoginForm from "../components/ui/loginForm";

const Login = () => {
    const { pathname } = useLocation();
    const isLogin = pathname === "/login";
    const formTitle = isLogin ? "Вход" : "Регистрация";
    const descriptionText = isLogin ? (
        <Link to="/register" className="text-muted">
            Dont have account?
        </Link>
    ) : (
        <Link to="/login" className="text-muted">
            Already have account? Sign In
        </Link>
    );

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 border shadow p-5 rounded-3">
                    <div className="text-center">
                        <h2 className="mb-4">{formTitle}</h2>
                        <p>{descriptionText}</p>
                    </div>

                    {isLogin ? <LoginForm /> : <RegisterForm />}
                </div>
            </div>
        </div>
    );
};

export default Login;
