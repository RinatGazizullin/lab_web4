import React, { useEffect, useState, useCallback } from "react"
import { useNavigate } from "react-router-dom";
import { get as getApi } from "../controllers/login";
import { get_points as getPoints, add_point as addPoint, clear as clearApi } from "../controllers/points"
import Header from "../components/main/header";
import InputForm from "../components/point/input";
import PlotCanvas from "../components/point/canvas";
import ResultTable from "../components/point/table";
import BackButton from "../components/main/button";
import { useDispatch } from "react-redux";
import { setPoints } from "../store/slices/points";

const MainPage = () => {
    const navigate = useNavigate();
    const [trigger, setTrigger] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const currentSocket = new WebSocket('ws://localhost:10001/webapp/events');
        currentSocket.onopen = () => {}
        currentSocket.onmessage = () => setTrigger(prev => !prev);
        currentSocket.onclose = () => {}
        return () => currentSocket.close();
    }, []);

    useEffect(() => {
        let isMounted = true;
        const checkAndLoadPoints = async () => {
            try {
                const isLogged = await getApi();
                if (!isLogged.success) {
                    if (isMounted) {
                        navigate('/login');
                    }
                    return;
                }
            } catch (error) {
                if (isMounted) navigate('/login');
                return;
            }

            try {
                const data = await getPoints();
                if (data.success && isMounted) {
                    dispatch(setPoints(data.data));
                }
            } catch (error) {
            }
        };

        checkAndLoadPoints();
        return () => isMounted = false;
    }, [trigger, navigate, getApi, getPoints]);

    const handleAddPoint = useCallback(async (x, y, r) => {
        try {
            const result = await addPoint(x, y, r);
            if (result.success) {
                setTrigger(prev => !prev);
                return { success: true, message: result.data || 'Точка добавлена' };
            } else {
                return { success: false, message: result.data || 'Ошибка добавления' };
            }
        } catch (error) {
            return { success: false, message: 'Ошибка сети' };
        }
    }, []);

    const handleClearPoints = useCallback(async () => {
        try {
            const result = await clearApi();
            if (result.success) {
                setTrigger(prev => !prev);
                return { success: true, message: result.data || 'Точки очищены' };
            } else {
                return { success: false, message: result.data || 'Ошибка очистки' };
            }
        } catch (error) {
            return { success: false, message: 'Ошибка сети' };
        }
    }, []);

    const click = useCallback(() => {
        navigate("/");
    }, [navigate]);

    return (
        <div className="body-content">
            <div className="grid-container">
                <Header />
                <InputForm onClear={handleClearPoints} onSubmit={handleAddPoint} />
                <PlotCanvas onSubmit={handleAddPoint} />
                <ResultTable />
                <BackButton value="Вернуться в начало" onClick={click} />
            </div>
        </div>
    );
}

export default MainPage;
