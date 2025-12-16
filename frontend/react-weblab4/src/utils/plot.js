export const drawPlot = (ctx, width, height, scale) => {
    const x = width / 2;
    const y = height / 2;

    clearPlot(ctx, width, height);
    ctx.beginPath();
    ctx.moveTo(61, y);
    ctx.lineTo(width - 61, y);
    ctx.strokeStyle = 'rgb(190, 195, 199)';
    ctx.lineWidth = 8;
    ctx.stroke();
    drawArrow(
        ctx,
        width - 61, y,
        width - 30, y,
        -11, 0
    );

    ctx.beginPath();
    ctx.moveTo(x, 61);
    ctx.lineTo(x, height - 61);
    ctx.strokeStyle = 'rgb(190, 195, 199)';
    ctx.lineWidth = 8;
    ctx.stroke();
    drawArrow(
        ctx,
        x, 61,
        x, 31,
        0, 11
    );

    ctx.beginPath();

    ctx.lineTo(x - scale, y);
    ctx.lineTo(x - scale, y - scale);
    ctx.lineTo(x, y - scale);
    ctx.lineTo(x, y - scale * .5);
    ctx.lineTo(x + scale * .5, y);
    ctx.arc(
        x,
        y,
        scale * .5,
        0,
        Math.PI / 2);
    ctx.lineTo(x, y);

    ctx.closePath();

    ctx.fillStyle = 'rgba(52, 152, 219, 0.6)';
    ctx.fill()

    ctx.strokeStyle = '#3498db';
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.font = '4rem Arial bold';
    ctx.fillStyle = 'black';

    ctx.fillText('x', width - 121, y - 30);
    ctx.fillText('y', x + 31, 121);

    ctx.fillText('-R', x - scale - 10, y + 61);
    ctx.fillText('-R/2', x - scale * 0.5 - 15, y + 60);
    ctx.fillText('R/2', x + scale * 0.5 - 5, y + 60);
    ctx.fillText('R', x + scale - 5, y + 60);

    ctx.fillText('-R', x + 10, y + scale + 10);
    ctx.fillText('-R/2', x + 10, y + scale * 0.5 + 10);
    ctx.fillText('R/2', x + 10, y - scale * 0.5 - 5);
    ctx.fillText('R', x + 10, y - scale - 5);
}

function drawArrow(ctx, x1, y1, x2, y2, k1, k2, arrowSize = 60) {
    const angle = Math.atan2(y2 - y1, x2 - x1);

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2 + k1, y2 + k2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(
        x2 - arrowSize * Math.cos(angle - Math.PI / 6),
        y2 - arrowSize * Math.sin(angle - Math.PI / 6)
    );
    ctx.lineTo(
        x2 - arrowSize * Math.cos(angle + Math.PI / 6),
        y2 - arrowSize * Math.sin(angle + Math.PI / 6)
    );
    ctx.closePath();
    ctx.fillStyle = 'rgb(190, 195, 199)';
    ctx.fill();
}

export const drawPoint = (ctx, width, height, scale, x, y, r, hit) => {
    let px;
    let py;
    if (!(r === 0)) {
        px = width / 2 + (x * scale) / r;
        py = height / 2 - (y * scale) / r;
    } else {
        if (!(x === 0) || !(y === 0)) {
            return;
        }
        px = width / 2;
        py = height / 2;
    }
    ctx.beginPath();
    ctx.arc(px, py, 20, 0, 2 * Math.PI);
    ctx.fillStyle = hit ? 'green' : 'red';
    ctx.fill();
    ctx.strokeStyle = hit ? 'darkgreen' : 'darkred';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.closePath();
}

function clearPlot(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
}
