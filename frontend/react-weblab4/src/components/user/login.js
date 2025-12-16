import React, {useEffect, useRef, useState} from 'react';
import { show, hide } from "../../utils/error";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const ref = useRef(null);
    const navigate = useNavigate();
    const changeUser = (e) => setUsername(e.target.value);
    const changePassword = (e) => setPassword(e.target.value);

    useEffect(() => {
        hide(ref);
    }, [username, password]);

    const click = () => {
        navigate("/register");
    }

    const validation = () => {
        if (username === '') {
            show(ref, 'Нужно указать имя пользователя');
            return false;
        }
        if (password === '') {
            show(ref, 'Нужно указать пароль');
            return false;
        }
        hide(ref);
        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        hide(ref);
        if (!validation()) {
            return;
        }

        try {
            const result = await onLogin(username, password);
            if (!result.success) {
                show(ref, result.data);
            } else {
                navigate("/main");
            }
        } catch (error) {
            show(ref, error.data || 'Произошла ошибка');
        }
    };

    return (
        <div className="container centered login">
            <div className="container-content">
                <div className="main">
                    <h2>Войти в аккаунт</h2>
                </div>
                <div className="grid-input">
                    <div>
                        <h3>Пользователь</h3>
                    </div>
                    <div>
                        <input
                            className="input-data no-add"
                            value={username}
                            onChange={changeUser}
                            placeholder="Укажите имя"
                        />
                    </div>
                    <div>
                        <h3>Пароль</h3>
                    </div>
                    <div>
                        <input
                            type="password"
                            className="input-data no-add"
                            value={password}
                            onChange={changePassword}
                            placeholder="Укажите пароль"
                        />
                    </div>
                    <div>
                        <button type="submit" className="more-btn" id="submit" onClick={click}>
                            Зарегистрироваться
                        </button>
                    </div>
                    <div>
                        <button type="submit" className="submit-btn" id="submit" onClick={handleSubmit}>
                            Войти в аккаунт
                        </button>
                    </div>
                    <div className="error-message hidden double" ref={ref} />
                </div>
            </div>
        </div>
    );
}


export default LoginForm;
