import React, { useCallback, useEffect, useRef } from "react"
import { drawPlot, drawPoint } from "../../utils/plot";
import { useSelector } from "react-redux";
import { selectPoints } from "../../store/slices/points";
import { selectValue } from "../../store/slices/valueSlice";

const PlotCanvas = ({ onSubmit }) => {
    const ref = useRef(null);
    const results = useSelector(selectPoints);
    const r = useSelector(selectValue);

    const validate = useCallback((point) => {
        return point &&
            !isNaN(point.point.x) &&
            !isNaN(point.point.y) &&
            !isNaN(point.point.r) &&
            point.result.code !== undefined &&
            !(point.result.code === 'ERROR');
    }, []);

    const valid_points = results.filter(validate);

    const handleClick = useCallback((event) => {
        const canvas = ref.current;
        if (!canvas || !onSubmit) return;

        const rect = canvas.getBoundingClientRect();
        const x = (event.clientX - rect.left);
        const y = (event.clientY - rect.top);
        let scale = Math.min(canvas.width, canvas.height) / 3;

        const cur_x = (4 * (x - canvas.width / 8) / scale * r).toFixed(4);
        const cur_y = (4 * (canvas.height / 8 - y) / scale * r).toFixed(4);
        onSubmit(cur_x, cur_y, r);
    }, [onSubmit, r]);

    useEffect(() => {
        let canvas = ref.current;
        if (!canvas) return;

        let ctx = canvas.getContext("2d");
        canvas.width = canvas.offsetWidth * 4;
        canvas.height = canvas.offsetHeight * 4;
        let scale = Math.min(canvas.width, canvas.height) / 3;

        drawPlot(ctx, canvas.width, canvas.height, scale)
        valid_points.filter(point => point.point.r === r)
            .map((point => drawPoint(ctx,
            canvas.width, canvas.height, scale,
            point.point.x, point.point.y, point.point.r,
            point.result.code === 'HIT')));
    }, [valid_points, r]);

    return (
        <div className="container double-small">
            <div className="container-content plot-container">
                <div className="main">
                    <h2>График</h2>
                </div>
                <canvas ref={ref} className="plot" onClick={handleClick}></canvas>
            </div>
        </div>
    );
}

export default PlotCanvas;
