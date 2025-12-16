import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from "react-redux";
import { selectClock, selectOptions } from "../../store/slices/clockSlice";
import {drawClassic, drawFunky, drawFusion, drawVintage} from "../../utils/drawTime";

const ClockLabel = () => {
    const canvasRefs = useRef([]);
    const time = useSelector(selectClock);
    const options = useSelector(selectOptions);
    const [timezones, setTimezones] = useState([]);
    const [labels, setLabels] = useState([]);
    const [styles, setStyles] = useState([]);
    const [themes, setThemes] = useState([]);

    useEffect(() => {
        if (!time || !options || !options.timeZone) return;

        const newTimezones = [];
        const newLabels = [];
        const newStyles = [];
        const newThemes = [];

        time.forEach(clockData => {
            const timezoneData = options.timeZone[clockData.timezone];
            if (timezoneData) {
                newTimezones.push(timezoneData.ianaId);
                newLabels.push(timezoneData.cityName);
                newStyles.push(clockData.watchType);
                newThemes.push(clockData.colorTheme);
            }
        });

        setTimezones(newTimezones);
        setLabels(newLabels);
        setStyles(newStyles);
        setThemes(newThemes);
    }, [time, options]);

    const getTimeForTimezone = useCallback((timezone) => {
        const now = new Date();
        const options = {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };

        const formatter = new Intl.DateTimeFormat('en-CA', options);
        const parts = formatter.formatToParts(now);

        const hour = parseInt(parts.find(p => p.type === 'hour').value);
        const minute = parseInt(parts.find(p => p.type === 'minute').value);
        const second = parseInt(parts.find(p => p.type === 'second').value);

        const time = new Date();
        time.setHours(hour, minute, second, 0);
        return time;
    }, []);

    const drawClock = useCallback((canvas, isNight, hours, minutes, seconds, label, style) => {
        canvas.width = canvas.offsetWidth * 4;
        canvas.height = canvas.offsetHeight * 4;

        switch (style) {
            case "CLASSIC":
                drawClassic(canvas, isNight, hours, minutes, seconds, label);
                break;
            case "FUNKY":
                drawFunky(canvas, isNight, hours, minutes, seconds, label);
                break;
            case "VINTAGE":
                drawVintage(canvas, isNight, hours, minutes, seconds, label);
                break;
            case "FUSION":
                drawFusion(canvas, isNight, hours, minutes, seconds, label);
                break;
            default:
                drawClassic(canvas, isNight, hours, minutes, seconds, label);
                break;
        }
    }, []);

    const updateAllClocks = useCallback(() => {
        canvasRefs.current.forEach((canvas, index) => {
            if (canvas) {
                const now = timezones[index] ? getTimeForTimezone(timezones[index]) : new Date();
                const hours = now.getHours();
                const minutes = now.getMinutes();
                const seconds = now.getSeconds();
                const isNight = (themes[index] === 'AUTO' && (hours >= 20 || hours <= 6) || themes[index] === 'NIGHT') && !(themes[index] === 'DAY');
                drawClock(canvas, isNight, hours % 12, minutes, seconds, labels[index], styles[index]);
            }
        });
    }, [themes, styles, timezones, getTimeForTimezone, styles, drawClock, labels]);

    useEffect(() => {
        updateAllClocks();

        const now = new Date();
        const delay = 1000 - now.getMilliseconds();

        const timer = setTimeout(() => {
            const interval = setInterval(updateAllClocks, 1000);
            return () => clearInterval(interval);
        }, delay);
        return () => clearTimeout(timer);
    }, [timezones, updateAllClocks]);

    const setCanvasRef = (index) => (element) => {
        canvasRefs.current[index] = element;
    };

    return (
        <div className="container double">
            <div className="container-content">
                <div className={`grid-clock ${time.length === 3 ? 'triple' : 
                    (time.length === 2 ? 'double' : (time.length === 1 ? 'one' : ''))}`}>
                    {(() => {
                        const clocks = [];
                        for (let i = 0; i < time.length; i++) {
                            clocks.push(
                                <div className="time-grid">
                                    <canvas ref={setCanvasRef(i)} className="clock"></canvas>
                                </div>
                            );
                        }
                        return clocks;
                    })()}
                </div>
            </div>
        </div>
    );
};

export default ClockLabel;
