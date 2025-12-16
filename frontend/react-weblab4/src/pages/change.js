import React, { useEffect } from "react"
import Header from "../components/main/header";
import BackButton from "../components/main/button";
import { useNavigate } from "react-router-dom";
import { change, get as getApi } from "../controllers/login";
import ChangeForm from "../components/user/change";
import ClockChange from "../components/user/clock";
import { change as changeApi, time as timeApi } from "../controllers/clock";
import { useDispatch } from "react-redux";
import { defaultClock, setClock } from "../store/slices/clockSlice";

const ChangePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        let isMounted = true;
        const fetchTimeData = async () => {
            try {
                const result = await timeApi();
                if (isMounted) {
                    if (result.success) {
                        dispatch(setClock(result.data));
                    } else {
                        dispatch(defaultClock());
                    }
                }
            } catch (error) {
                if (isMounted) {
                    dispatch(defaultClock());
                }
            }
        };

        fetchTimeData();
        return () => {
            isMounted = false;
        };
    }, [dispatch]);

    const click = () => {
        navigate("/main");
    }

    useEffect(() => {
        const check = async() => {
            try {
                const isLogged = await getApi();
                if (!isLogged.success) {
                    navigate("/login");
                }
            } catch (error) {
                navigate("/login");
            }
        }

        check();
    }, [navigate]);

    return (
        <div className="body-content">
            <div className="grid-container">
                <Header />
                <ChangeForm onChange={ change } />
                <ClockChange onChange={ changeApi } />
                <BackButton value="Вернуться назад" onClick={ click } />
            </div>
        </div>
    );
}

export default ChangePage;
