import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { selectPoints } from "../../store/slices/points";

const ResultTable = () => {
    const results = useSelector(selectPoints);

    const validate = useCallback((point) => {
        return point &&
            !isNaN(point.point.x) &&
            !isNaN(point.point.y) &&
            !isNaN(point.point.r) &&
            point.result.code !== undefined &&
            !(point.result.code === 'ERROR') &&
            point.result.message &&
            point.result.execution !== undefined &&
            point.result.time &&
            point.user &&
            point.user.name;
    }, []);

    const valid_points = results.filter(validate);

    return (
        <div className="container double table">
            <div className="container-content">
                <div className="main">
                    <h2>Таблица результатов</h2>
                </div>
                <table className="data">
                    <thead>
                    <tr>
                        <th>X</th>
                        <th>Y</th>
                        <th>R</th>
                        <th>Результат</th>
                        <th>Время запроса</th>
                        <th>Время работы</th>
                        <th>Пользователь</th>
                    </tr>
                    </thead>
                    <tbody>
                    {valid_points.map((request, index) => (
                        <tr key={index}>
                            <td>
                                <div className="cell">
                                    {request.point.x != null ? request.point.x : '-'}
                                </div>
                            </td>
                            <td>
                                <div className="cell">
                                    {request.point.y != null ? request.point.y : '-'}
                                </div>
                            </td>
                            <td>
                                <div className="cell">
                                    {request.point.r != null ? request.point.r : '-'}
                                </div>
                            </td>
                            <td>
                                <div className={`cell ${request.result.code === 'HIT' ? 'hit'
                                    : request.result.code === 'MISS' ? 'miss' : 'error'}`}>
                                    {request.result.message ?? 'Нет сообщения'}
                                </div>
                            </td>
                            <td>
                                <div className="cell">
                                    {request.result.time ?? 'Нет данных'}
                                </div>
                            </td>
                            <td>
                                <div className="cell">
                                    {request.result.execution ?? '-'} мкс
                                </div>
                            </td>
                            <td>
                                <div className="cell">
                                    {request.user.name ?? '-'}
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ResultTable;
