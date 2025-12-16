import React, {useEffect, useRef, useState} from 'react';
import { show, hide } from "../../utils/error";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onRegister }) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const ref = useRef(null);
    const navigate = useNavigate()
    const changeName = (e) => setName(e.target.value);
    const changeUser = (e) => setUsername(e.target.value);
    const changePassword = (e) => setPassword(e.target.value);

    useEffect(() => {
        hide(ref);
    }, [name, username, password]);

    const click = () => {
        navigate("/login");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name === '') {
            show(ref, 'Нужно указать ваше имя');
            return;
        }
        if (username === '') {
            show(ref, 'Нужно создать имя пользователя');
            return;
        }
        if (password === '') {
            show(ref, 'Нужно придумать пароль');
            return;
        }

        try {
            const result = await onRegister(name, username, password);
            if (!result.success) {
                show(ref, result.data ?? 'Произошла ошибка');
                return;
            } else {
                navigate("/login");
            }
        } catch (error) {
            show(ref, error.data ?? 'Произошла ошибка');
            return;
        }
        hide(ref);
    };

    return (
        <div className="container centered login">
            <div className="container-content">
                <div className="main">
                    <h2>Зарегистрировать аккаунт</h2>
                </div>
                <div className="grid-input">
                    <div>
                        <h3>Имя</h3>
                    </div>
                    <div>
                        <input
                            className="input-data no-add"
                            value={name}
                            onChange={changeName}
                            placeholder="Укажите ваше имя"
                        />
                    </div>
                    <div>
                        <h3>Пользователь</h3>
                    </div>
                    <div>
                        <input
                            className="input-data no-add"
                            value={username}
                            onChange={changeUser}
                            placeholder="Создайте имя пользователя"
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
                            placeholder="Придумайте пароль"
                        />
                    </div>
                    <div>
                        <button type="submit" className="more-btn" id="submit" onClick={click}>
                            Уже есть аккаунт
                        </button>
                    </div>
                    <div>
                        <button type="submit" className="submit-btn" id="submit" onClick={handleSubmit}>
                            Зарегистрировать аккаунт
                        </button>
                    </div>
                    <div className="error-message hidden double" ref={ref} />
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
