import React, {useRef, useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setValue } from '../../store/slices/valueSlice';
import { show, hide } from "../../utils/error";

const InputForm = ({ onSubmit, onClear }) => {
    const [cur_x, setX] = useState('1');
    const [cur_y, setY] = useState('');
    const [cur_r, setR] = useState('1');
    const ref = useRef(null);
    const dispatch = useDispatch();

    const changeX = (e) => setX(e.target.value);
    const changeY = (e) => setY(e.target.value);
    const changeR = (e) => {
        setR(e.target.value);
        dispatch(setValue(parseFloat(e.target.value)));
    };

    const x_values = ['-5', '-4', '-3', '-2', '-1', '0', '1', '2', '3', '4', '5'];
    const r_values = ['-5', '-4', '-3', '-2', '-1', '0', '1', '2', '3', '4', '5'];

    useEffect(() => {
        hide(ref);
    }, [cur_x, cur_y, cur_r]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (cur_x === '') {
            show(ref, 'Нужно выбрать X');
            return;
        }
        if (cur_y === '') {
            show(ref, 'Нужно выбрать Y');
            return;
        }
        if (cur_r === '') {
            show(ref, 'Нужно выбрать R');
            return;
        }
        const checkX = cur_x.replaceAll(",", ".");
        if (isNaN(parseFloat(checkX)) || parseFloat(checkX) < -5 || parseFloat(checkX) > 5) {
            show(ref, 'X должен быть числом от -5 до 5');
            return;
        }
        const checkY = cur_y.replaceAll(",", ".")
        if (isNaN(parseFloat(checkY)) || parseFloat(checkY) < -5 || parseFloat(checkY) > 5) {
            show(ref, 'Y должен быть числом от -5 до 5');
            return;
        }
        const checkR = cur_r.replaceAll(",", ".")
        if (isNaN(parseFloat(checkR)) || parseFloat(checkR) < -5 || parseFloat(checkR) > 5) {
            show(ref, 'R должен быть числом от 1 до 5');
            return;
        }
        hide(ref);

        try {
            const result = await onSubmit(checkX, checkY, checkR);
            if (!result.success) {
                show(ref, result.data || 'Произошла ошибка');
            } else {
                hide(ref);
            }
        } catch (error) {
            show(ref, error.data || 'Произошла ошибка');
        }
    };

    const handleClear = () => {
        onClear();
    };

    return (
        <div className="grid-column double-small">
            <form id="mainForm">
                <div className="container">
                    <div className="container-content">
                        <div className="main">
                            <h2>Поле ввода</h2>
                        </div>
                        <div className="grid-input">
                            <div>
                                <h3>Координата X</h3>
                            </div>
                            <div className="radio-container">
                                {x_values.map((value) => (
                                    <label
                                        key={value}
                                        className={`radio-label ${cur_x === value ? 'selected' : ''}`}>
                                        <input
                                            type="radio"
                                            name="x-coordinates"
                                            value={value}
                                            checked={cur_x === value}
                                            onChange={changeX}
                                        />
                                        {value}
                                    </label>
                                ))}
                            </div>
                            <div>
                                <h3>Координата Y</h3>
                            </div>
                            <div>
                                <input
                                    className="input-data"
                                    value={cur_y}
                                    onChange={changeY}
                                    placeholder="От -5 до 5"
                                />
                            </div>
                            <div>
                                <h3>Масштаб R</h3>
                            </div>
                            <div className="radio-container">
                                {r_values.map((value) => (
                                    <label
                                        key={value}
                                        className={`radio-label ${cur_r === value ? 'selected' : ''}`}>
                                        <input
                                            type="radio"
                                            name="r-coordinates"
                                            value={value}
                                            checked={cur_r === value}
                                            onChange={changeR}
                                        />
                                        {value}
                                    </label>
                                ))}
                            </div>
                            <div className="double">
                                <button type="submit" className="submit-btn" id="submit" onClick={handleSubmit}>
                                    Отправить
                                </button>
                            </div>
                            <div className="error-message hidden double" id="global-error" ref={ref} />
                        </div>
                    </div>
                </div>
            </form>

            <form id="clearForm">
                <div className="container">
                    <div className="container-content">
                        <button type="button" className="clear-btn" id="clear" onClick={handleClear}>
                            Очистить данные
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default InputForm;
