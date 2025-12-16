import React, { useEffect, useRef, useState, useCallback } from 'react';
import { show, hide } from "../../utils/error";
import { useSelector } from "react-redux";
import { selectClock, selectDefault, selectOptions } from "../../store/slices/clockSlice";

const ClockChange = ({ onChange }) => {
    const [number, setNumber] = useState('1');
    const [clocks, setClocks] = useState([]);
    const ref = useRef(null);
    const refGood = useRef(null);
    const options = useSelector(selectOptions);
    const default_clock = useSelector(selectDefault);
    const data = useSelector(selectClock);

    useEffect(() => {
        if (data && data.length > 0) {
            const clonedData = JSON.parse(JSON.stringify(data));
            setClocks(clonedData);
            setNumber(clonedData.length.toString());
        }
    }, [data]);

    const values = ['1', '2', '3', '4'];

    const changeNumber = useCallback((e) => {
        const newNumber = e.target.value;
        const num = parseInt(newNumber);
        const currentLength = clocks.length;

        if (num > currentLength) {
            const newClocks = [...clocks];
            const itemsToAdd = num - currentLength;

            for (let i = 0; i < itemsToAdd; i++) {
                const defaultClock = default_clock && default_clock.length > 0
                    ? JSON.parse(JSON.stringify(default_clock[0]))
                    : {
                        colorTheme: 'AUTO',
                        timezone: 'MOSCOW',
                        watchType: 'CLASSIC'
                    };
                newClocks.push(defaultClock);
            }

            setClocks(newClocks);
        } else if (num < currentLength) {
            const newClocks = clocks.slice(0, num);
            setClocks(newClocks);
        }

        setNumber(newNumber);
    }, [clocks, default_clock]);

    useEffect(() => {
        hide(ref);
        hide(refGood);
    }, [number]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (number === undefined) {
            hide(refGood);
            show(ref, "Нужно выбрать количество часов от 1 до 4");
            return;
        }

        const check = parseInt(number);
        if (isNaN(check) || check > 4 || check < 1) {
            hide(refGood);
            show(ref, "Значение должно быть числом от 1 до 4");
            return;
        }

        try {
            const result = await onChange(check, clocks);
            if (!result.success) {
                hide(refGood);
                show(ref, result.data ?? 'Произошла ошибка');
            } else {
                show(refGood, result.data ?? 'Все хорошо')
            }
        } catch (error) {
            hide(refGood);
            show(ref, error?.data ?? 'Произошла ошибка');
        }
    };

    const handleChangeTheme = useCallback((e, index) => {
        setClocks(prev => {
            const newClocks = [...prev];
            if (newClocks[index]) {
                newClocks[index] = {
                    ...newClocks[index],
                    colorTheme: e.target.value
                };
            }
            return newClocks;
        });
    }, []);

    const handleChangeTime = useCallback((e, index) => {
        setClocks(prev => {
            const newClocks = [...prev];
            if (newClocks[index]) {
                newClocks[index] = {
                    ...newClocks[index],
                    timezone: e.target.value
                };
            }
            return newClocks;
        });
    }, []);

    const handleChangeType = useCallback((e, index) => {
        setClocks(prev => {
            const newClocks = [...prev];
            if (newClocks[index]) {
                newClocks[index] = {
                    ...newClocks[index],
                    watchType: e.target.value
                };
            }
            return newClocks;
        });
    }, []);

    const getClockValue = useCallback((index, field) => {
        if (!clocks || index >= clocks.length || !clocks[index]) {
            switch(field) {
                case 'colorTheme': return 'AUTO';
                case 'timezone': return 'MOSCOW';
                case 'watchType': return 'CLASSIC';
                default: return '';
            }
        }
        return clocks[index][field] || '';
    }, [clocks]);

    const themeOptions = [
        { value: '', label: 'Выберите тему часов' },
        ...Object.entries(options.colorTheme || {}).map(([key, item]) => ({
            value: key,
            label: item?.label || key
        }))
    ];

    const timezoneOptions = [
        { value: '', label: 'Выберите часовой пояс' },
        ...Object.entries(options.timeZone || {}).map(([key, item]) => ({
            value: key,
            label: item?.cityName || key
        })).sort((a, b) => {
            if (a.label < b.label) return -1;
            if (a.label > b.label) return 1;
            return 0;
        })
    ];

    const typeOptions = [
        { value: '', label: 'Выберите тип часов' },
        ...Object.entries(options.watchType || {}).map(([key, item]) => ({
            value: key,
            label: item?.label || key
        }))
    ];

    const clockElements = [];
    const num = parseInt(number) || 0;

    for (let i = 0; i < num; i++) {
        const clockTheme = getClockValue(i, 'colorTheme');
        const clockTimezone = getClockValue(i, 'timezone');
        const clockType = getClockValue(i, 'watchType');

        clockElements.push(
            <div key={i} className="clock-container double">
                <div className="clock-content">
                    <div className="grid-input">
                        <div>
                            <h3>Тема часов</h3>
                        </div>
                        <div>
                            <select
                                value={clockTheme}
                                onChange={(e) => handleChangeTheme(e, i)}
                                className="input-data no-add"
                            >
                                {themeOptions.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                        disabled={option.value === ''}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <h3>Часовой пояс</h3>
                        </div>
                        <div>
                            <select
                                value={clockTimezone}
                                onChange={(e) => handleChangeTime(e, i)}
                                className="input-data no-add"
                            >
                                {timezoneOptions.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                        disabled={option.value === ''}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <h3>Тип часов</h3>
                        </div>
                        <div>
                            <select
                                value={clockType}
                                onChange={(e) => handleChangeType(e, i)}
                                className="input-data no-add"
                            >
                                {typeOptions.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                        disabled={option.value === ''}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container centered login">
            <div className="container-content">
                <div className="main">
                    <h2>Изменение заглавного экрана</h2>
                </div>
                <div className="grid-input">
                    <div>
                        <h3>Количество часов</h3>
                    </div>
                    <div className="radio-container">
                        {values.map((value) => (
                            <label
                                key={value}
                                className={`radio-label ${number === value ? 'selected' : ''}`}>
                                <input
                                    type="radio"
                                    name="count"
                                    value={value}
                                    checked={number === value}
                                    onChange={changeNumber}
                                />
                                {value}
                            </label>
                        ))}
                    </div>

                    {clockElements}

                    <div className="double">
                        <button type="submit" className="submit-btn" id="submit" onClick={handleSubmit}>
                            Изменить часы
                        </button>
                    </div>
                    <div className="error-message hidden double" ref={ref} />
                    <div className="good-message hidden double" ref={refGood} />
                </div>
            </div>
        </div>
    );
};

export default ClockChange;
