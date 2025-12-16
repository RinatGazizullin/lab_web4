import React, { useEffect } from "react"
import Header from "../components/main/header"
import ClockLabel from "../components/main/clock";
import BackButton from "../components/main/button"
import { useNavigate } from "react-router-dom";
import { get as getApi } from '../controllers/login'
import { time as timeApi } from '../controllers/clock'
import { useDispatch } from "react-redux";
import { defaultClock, setClock } from "../store/slices/clockSlice";

const IndexPage = () => {
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
        const check = async() => {
            try {
                const isLogged = await getApi();
                if (!isLogged.success) {
                    navigate('/login');
                } else {
                    navigate('/main');
                }
            } catch (error) {
                navigate('/login');
            }
        }

        check();
    }

    return (
        <div className="body-content">
            <div className="grid-container">
                <Header />
                <ClockLabel />
                <BackButton value="Начать работу" onClick={click} />
            </div>
        </div>
    );
}

export default IndexPage;
