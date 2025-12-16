import React from "react"
import Header from "../components/main/header";
import Register from "../components/user/register";
import BackButton from "../components/main/button";
import {register as registerApi} from "../controllers/register";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();

    const click = () => {
        navigate("/");
    }

    return (
        <div className="body-content">
            <div className="grid-container">
                <Header />
                <Register onRegister={registerApi} />
                <BackButton value="Вернуться назад" onClick={click} />
            </div>
        </div>
    );
}

export default RegisterPage;
