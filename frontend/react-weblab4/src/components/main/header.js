import React, { useCallback, useEffect, useRef, useState } from "react"
import { get as getApi, logout } from "../../controllers/login";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [showExit, setExit] = useState(false);
    const [show, setShow] = useState(false);
    const button = useRef(null);
    const menu = useRef(null);

    const exit = useCallback(() => {
        try {
            logout();
        } catch (ignored) {}
        navigate("/login");
    })

    const login = useCallback(() => {
        navigate("/login");
    })

    const change = useCallback(() => {
        navigate("/about")
    })

    const check = async() => {
        try {
            const isLogged = await getApi();
            if (isLogged.success) {
                setExit(true);
            } else {
                setExit(false);
            }
        } catch (error) {
            setExit(false);
        }
    };

    useEffect(() => {
        check();
        const handleClickOutside = (event) => {
            if (menu.current && !menu.current.contains(event.target) &&
                button.current && !button.current.contains(event.target)) {
                setShow(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="container double">
            <div className="container-content">
                <div className="header">
                    <div className="grid-header">
                        <div>
                        </div>
                        <div>
                            <h1>Графический калькулятор</h1>
                        </div>
                        <div className="info-div">
                            <button className="login-button" ref={button} onClick={() => setShow(!show)}>
                                &#8942;
                            </button>
                            {show && (
                                <div ref={menu}
                                    className="context"
                                    style={{
                                        top: `${button.current.offsetTop + button.current.offsetHeight + 10}px`,
                                        left: `calc(${button.current.offsetLeft}px - 17rem)`,
                                    }}>
                                    <div className="container-content">
                                        <div className="context-grid">
                                            {showExit && (
                                                <div>
                                                    <button className="submit-btn" onClick={change}>
                                                        Настройки
                                                    </button>
                                                </div>
                                            )}
                                            <div>
                                                {showExit ? (
                                                    <button className="exit-btn" onClick={exit}>
                                                        Выход
                                                    </button>
                                                ) : (
                                                    <button className="submit-btn" onClick={login}>
                                                        Вход
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
