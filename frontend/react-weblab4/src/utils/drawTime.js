export const drawClassic = (canvas, isNight, hours, minutes, seconds, label) => {
    const backColor = isNight ? "rgb(61, 61, 61)" : "white";
    const hoursMarks = isNight ? "rgb(181, 181, 181)" : "rgb(151, 151, 151)";
    const minMarks = isNight ? "rgb(121, 121, 121)" : "rgb(201, 201, 201)";
    const hand = isNight ? "white" : "rgb(61, 61, 61)";

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const ctx = canvas.getContext("2d");
    const radius = Math.min(centerX, centerY);

    ctx.lineCap = "round";
    ctx.fillStyle = backColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let time = 0; time < 60; time++) {
        const angle = (time * 6) * Math.PI / 180;

        let startRadius, endRadius;
        if (time % 5 === 0) {
            ctx.strokeStyle = hoursMarks;
            ctx.lineWidth = 10;
            startRadius = radius * 0.88;
            endRadius = radius * 0.95;
        } else {
            ctx.strokeStyle = minMarks;
            ctx.lineWidth = 10;
            startRadius = radius * 0.88;
            endRadius = radius * 0.92;
        }

        const startX = centerX + startRadius * Math.sin(angle);
        const startY = centerY - startRadius * Math.cos(angle);
        const endX = centerX + endRadius * Math.sin(angle);
        const endY = centerY - endRadius * Math.cos(angle);

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }

    ctx.font = '5rem Arial bold';
    ctx.fillStyle = '#8f8f8f';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, centerX, centerY - radius * .55);

    let secRadians = -(Math.PI * 2 * seconds) / 60;
    let minRadians = -(Math.PI * 2 * minutes) / 60 + secRadians / 60;
    let hoursRadians = -(Math.PI * 2 * (hours)) / 12 + minRadians / 12;

    ctx.beginPath();
    ctx.strokeStyle = hand;
    ctx.lineWidth = 20;
    ctx.moveTo(centerX - 0.1 * radius * Math.sin(-hoursRadians), centerY + 0.1 * radius * Math.cos(-hoursRadians));
    ctx.lineTo(centerX - 0.6 * radius * Math.sin(hoursRadians), centerY - 0.6 * radius * Math.cos(hoursRadians));
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = hand;
    ctx.lineWidth = 16;
    ctx.moveTo(centerX - 0.1 * radius * Math.sin(-minRadians), centerY + 0.1 * radius * Math.cos(-minRadians));
    ctx.lineTo(centerX - 0.8 * radius * Math.sin(minRadians), centerY - 0.8 * radius * Math.cos(minRadians));
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = hand;
    ctx.arc(centerX, centerY, radius * 0.04, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 8;
    ctx.moveTo(centerX - 0.1 * radius * Math.sin(-secRadians), centerY + 0.1 * radius * Math.cos(-secRadians));
    ctx.lineTo(centerX - 0.92 * radius * Math.sin(secRadians), centerY - 0.92 * radius * Math.cos(secRadians));
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = backColor;
    ctx.arc(centerX, centerY, radius * 0.03, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

export const drawFunky = (canvas, isNight, hours, minutes, seconds, label) => {
    const backColor = isNight ? "rgb(61, 61, 61)" : "white";
    const hoursMarks = isNight ? "rgb(181, 181, 181)" : "rgb(151, 151, 151)";
    const minMarks = isNight ? "rgb(121, 121, 121)" : "rgb(201, 201, 201)";
    const hand = isNight ? "white" : "rgb(61, 61, 61)";

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const ctx = canvas.getContext("2d");
    const radius = Math.min(centerX, centerY);

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.fillStyle = backColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let time = 0; time < 60; time++) {
        const angle = (time * 6) * Math.PI / 180;

        let markColor, markRadius;
        if (time % 5 === 0) {
            markColor = hoursMarks;
            markRadius = radius * 0.025;
        } else {
            markColor = minMarks;
            markRadius = radius * 0.015;
        }

        const x = centerX + (radius * 0.92) * Math.sin(angle);
        const y = centerY - (radius * 0.92) * Math.cos(angle);

        ctx.beginPath();
        ctx.fillStyle = markColor;
        ctx.ellipse(x, y, markRadius, markRadius * 1.5, angle, 0, 2 * Math.PI);
        ctx.fill();
    }

    ctx.font = '5rem Arial bold';
    ctx.fillStyle = '#8f8f8f';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, centerX, centerY - radius * .55);

    let secRadians = (Math.PI * 2 * seconds) / 60 + Math.PI;
    let minRadians = (Math.PI * 2 * minutes) / 60 + secRadians / 60 + Math.PI;
    let hoursRadians = (Math.PI * 2 * (hours)) / 12 + minRadians / 12 + Math.PI;

    function drawWavyHand(radians, length, width, color, waveAmplitude = 0.1, waveFrequency = 4) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.lineJoin = 'round';

        const startLength = 0.1 * radius;
        const endLength = length * radius;

        const startX = centerX + startLength * Math.sin(radians);
        const startY = centerY - startLength * Math.cos(radians);
        const endX = centerX + endLength * Math.sin(radians);
        const endY = centerY - endLength * Math.cos(radians);

        const perpX = -Math.cos(radians);
        const perpY = -Math.sin(radians);

        ctx.moveTo(startX, startY);

        const segments = 80;
        for (let i = 1; i <= segments; i++) {
            const t = i / segments;
            const x = startX + (endX - startX) * t;
            const y = startY + (endY - startY) * t;

            const waveOffset = Math.sin(t * waveFrequency * Math.PI) * waveAmplitude * radius;
            ctx.lineTo(
                x + waveOffset * perpX,
                y + waveOffset * perpY
            );
        }

        ctx.stroke();
    }

    drawWavyHand(hoursRadians, -0.6, 20, hand, 0.04, 3);
    drawWavyHand(minRadians, -0.8, 16, hand, 0.04, 4);

    ctx.beginPath();
    ctx.fillStyle = hand;
    ctx.arc(centerX, centerY, radius * 0.04, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    drawWavyHand(secRadians, -0.92, 8, "orange", 0.03, 5);

    ctx.beginPath();
    ctx.fillStyle = backColor;
    ctx.arc(centerX, centerY, radius * 0.03, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

export const drawVintage = (canvas, isNight, hours, minutes, seconds, label) => {
    const backColor = isNight ? "rgb(61, 61, 61)" : "white";
    const hoursMarks = isNight ? "rgb(181, 181, 181)" : "rgb(151, 151, 151)";
    const minMarks = isNight ? "rgb(121, 121, 121)" : "rgb(201, 201, 201)";
    const hand = isNight ? "white" : "rgb(61, 61, 61)";

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const ctx = canvas.getContext("2d");
    const radius = Math.min(centerX, centerY);

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.fillStyle = backColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let time = 0; time < 60; time++) {
        const angle = (time * 6) * Math.PI / 180;

        let markColor, triangleSize;
        if (time % 5 === 0) {
            markColor = hoursMarks;
            triangleSize = radius * 0.05;
        } else {
            markColor = minMarks;
            triangleSize = radius * 0.04;
        }
        const distance = radius * .93;
        const x = centerX + distance * Math.sin(angle);
        const y = centerY - distance * Math.cos(angle);

        ctx.save();

        ctx.translate(x, y);
        ctx.rotate(angle);

        ctx.fillStyle = markColor;
        ctx.beginPath();

        ctx.moveTo(0, triangleSize * 2);
        ctx.lineTo(triangleSize * 0.5, 0);
        ctx.lineTo(0, -triangleSize * 0.5);
        ctx.lineTo(-triangleSize * 0.5, 0);

        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    ctx.font = '5rem Arial bold';
    ctx.fillStyle = '#8f8f8f';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, centerX, centerY - radius * .55);

    let secRadians = (Math.PI * 2 * seconds) / 60 + Math.PI;
    let minRadians = (Math.PI * 2 * minutes) / 60 + secRadians / 60 + Math.PI;
    let hoursRadians = (Math.PI * 2 * (hours)) / 12 + minRadians / 12 + Math.PI;

    function drawVintageLine(radians, length, width, color, thickness = 2) {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(radians);

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.lineWidth = thickness;

        const tipLength = length * radius;
        const baseWidth = width / 2;

        ctx.moveTo(0, tipLength);
        ctx.lineTo(baseWidth * 1.5, 0.1 * radius);
        ctx.lineTo(0, 0);
        ctx.lineTo(-baseWidth * 1.5, 0.1 * radius);
        ctx.closePath();

        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }

    drawVintageLine(hoursRadians, -0.6, 25, hand, 3);
    drawVintageLine(minRadians, -0.8, 18, hand, 2.5);

    ctx.beginPath();
    ctx.fillStyle = hand;
    ctx.arc(centerX, centerY, radius * 0.04, 0, 2 * Math.PI);
    ctx.fill();

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(secRadians);

    ctx.beginPath();
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 3;

    const secTipLength = -0.92 * radius;
    const secBaseWidth = 5;
    const secTailLength = 0.12 * radius;

    ctx.moveTo(0, secTipLength);
    ctx.lineTo(secBaseWidth, 0.1 * radius);
    ctx.lineTo(0, -secTailLength);
    ctx.lineTo(-secBaseWidth, 0.1 * radius);
    ctx.closePath();

    ctx.fill();
    ctx.stroke();

    ctx.restore();

    ctx.beginPath();
    ctx.lineWidth = 0;
    ctx.fillStyle = backColor;
    ctx.arc(centerX, centerY, radius * 0.03, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

export const drawFusion = (canvas, isNight, hours, minutes, seconds, label) => {
    const backColor = isNight ? "rgb(61, 61, 61)" : "white";
    const hoursMarks = isNight ? "rgb(181, 181, 181)" : "rgb(151, 151, 151)";
    const minMarks = isNight ? "rgb(121, 121, 121)" : "rgb(201, 201, 201)";
    const hand = isNight ? "white" : "rgb(61, 61, 61)";

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const ctx = canvas.getContext("2d");
    const radius = Math.min(centerX, centerY);

    ctx.lineCap = "square";
    ctx.lineJoin = "bevel";
    ctx.fillStyle = backColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let time = 0; time < 60; time++) {
        const angle = (time * 6) * Math.PI / 180;

        let markColor, hexSize;
        if (time % 5 === 0) {
            markColor = hoursMarks;
            hexSize = radius * 0.04;
        } else {
            markColor = minMarks;
            hexSize = radius * 0.02;
        }

        const distance = radius * .93;
        const x = centerX + distance * Math.sin(angle);
        const y = centerY - distance * Math.cos(angle);

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);

        ctx.fillStyle = markColor;
        ctx.beginPath();

        for (let i = 0; i < 6; i++) {
            const hexAngle = (i * Math.PI / 3) + Math.PI / 6;
            const hx = hexSize * Math.cos(hexAngle);
            const hy = hexSize * Math.sin(hexAngle);
            if (i === 0) {
                ctx.moveTo(hx, hy);
            } else {
                ctx.lineTo(hx, hy);
            }
        }
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    }

    ctx.font = '5rem Arial bold';
    ctx.fillStyle = '#8f8f8f';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, centerX, centerY - radius * .55);

    let secRadians = (Math.PI * 2 * seconds) / 60 + Math.PI;
    let minRadians = (Math.PI * 2 * minutes) / 60 + secRadians / 60 + Math.PI;
    let hoursRadians = (Math.PI * 2 * (hours)) / 12 + minRadians / 12 + Math.PI;

    function drawHexagonalHand(radians, length, width, color) {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(radians);

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;

        const tipLength = length * radius;
        const halfWidth = width / 2;
        const tailLength = 0.07 * radius;

        const points = [
            { x: 0, y: -tipLength },
            { x: halfWidth, y: -tipLength * 0.9 },
            { x: halfWidth, y: tailLength * 1.2 },
            { x: 0, y: tailLength },
            { x: -halfWidth, y: tailLength * 1.2 },
            { x: -halfWidth, y: -tipLength * 0.9 }
        ];

        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.restore();
    }

    drawHexagonalHand(hoursRadians, -0.7, 20, hand);
    drawHexagonalHand(minRadians, -0.8, 14, hand);
    drawHexagonalHand(secRadians, -0.93, 10,"rgba(255, 165, 0)");

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.fillStyle = hand;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        const hexAngle = i * Math.PI / 3;
        const hx = (radius * 0.05) * Math.cos(hexAngle);
        const hy = (radius * 0.05) * Math.sin(hexAngle);
        if (i === 0) {
            ctx.moveTo(hx, hy);
        } else {
            ctx.lineTo(hx, hy);
        }
    }
    ctx.fill();
    ctx.restore();

    ctx.translate(centerX, centerY);
    ctx.fillStyle = backColor;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        const hexAngle = i * Math.PI / 3;
        const hx = (radius * 0.04) * Math.cos(hexAngle);
        const hy = (radius * 0.04) * Math.sin(hexAngle);
        if (i === 0) {
            ctx.moveTo(hx, hy);
        } else {
            ctx.lineTo(hx, hy);
        }
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}
