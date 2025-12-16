import React, {useEffect} from "react"
import Header from "../components/main/header";
import Login from "../components/user/login";
import BackButton from "../components/main/button";
import {login as loginApi, get as getApi} from '../controllers/login';
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const click = () => {
        navigate("/");
    }

    useEffect(() => {
        const check = async() => {
            try {
                const isLogged = await getApi();
                if (isLogged.success) {
                    navigate('/main');
                }
            } catch (error) {
                navigate('/');
            }
        }

        check();
    }, [getApi]);

    return (
        <div className="body-content">
            <div className="grid-container">
                <Header />
                <Login onLogin={loginApi} />
                <BackButton value="Вернуться назад" onClick={click} />
            </div>
        </div>
    );
}

export default LoginPage;
