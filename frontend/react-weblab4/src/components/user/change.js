import React, {useEffect, useRef, useState} from 'react';
import { show, hide } from "../../utils/error";
import {useNavigate} from "react-router-dom";
import {delete_acc} from "../../controllers/register";

const ChangeForm = ({ onChange }) => {
    const [password, setPassword] = useState('');
    const [passwordCheck, setCheck] = useState('');
    const ref = useRef(null);
    const refGood = useRef(null);
    const navigate = useNavigate()
    const changePassword = (e) => setPassword(e.target.value);
    const changeCheck = (e) => setCheck(e.target.value);

    useEffect(() => {
        hide(ref);
        hide(refGood);
    }, [password, passwordCheck]);

    const handleDelete = async (e) => {
        e.preventDefault();
        hide(refGood);
        hide(ref);
        try {
            const result = await delete_acc(password);
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
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === '' || passwordCheck === '') {
            hide(refGood);
            show(ref, 'Пароль не может быть пустым');
            return;
        }

        if (!(passwordCheck === password)) {
            hide(refGood);
            show(ref,"Пароли не совпадают");
            return;
        }

        try {
            const result = await onChange(password);
            if (!result.success) {
                hide(refGood);
                show(ref, result.data ?? 'Произошла ошибка');
            } else {
                show(refGood, result.data ?? 'Все хорошо')
            }
        } catch (error) {
            hide(refGood);
            show(ref, error.data ?? 'Произошла ошибка');
        }
    };

    return (
        <div className="container centered login">
            <div className="container-content">
                <div className="main">
                    <h2>Изменить пароль аккаунта</h2>
                </div>
                <div className="grid-input">
                    <div>
                        <h3>Пароль</h3>
                    </div>
                    <div>
                        <input
                            type="password"
                            className="input-data no-add"
                            value={password}
                            onChange={changePassword}
                            placeholder="Укажите новый пароль"
                        />
                    </div>
                    <div>
                        <h3>Повторите пароль</h3>
                    </div>
                    <div>
                        <input
                            type="password"
                            className="input-data no-add"
                            value={passwordCheck}
                            onChange={changeCheck}
                            placeholder="Повторите пароль"
                        />
                    </div>
                    <div>
                        <button type="submit" className="more-btn" id="submit" onClick={handleDelete}>
                            Удалить аккаунт
                        </button>
                    </div>
                    <div>
                        <button type="submit" className="submit-btn" id="submit" onClick={handleSubmit}>
                            Изменить данные
                        </button>
                    </div>
                    <div className="error-message hidden double" ref={ref} />
                    <div className="good-message hidden double" ref={refGood} />
                </div>
            </div>
        </div>
    );
}

export default ChangeForm;
