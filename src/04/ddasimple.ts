function setPixel(data: Uint8ClampedArray, x: number, y: number, width: number, height: number) {

    var index = (x + y * width) * 4;
    data[index + 0] = 0;
    data[index + 1] = 0;
    data[index + 2] = 0;
    data[index + 3] = 255;
}

/**
 * Draws a line from pointA to pointB on the canvas
 * with the DDA algorithm.
 * @param  {Array.<number>} data   - The linearised pixel array
 * @param  {Array.<number>} pointA - The start point of the line
 * @param  {Array.<number>} pointB - The end point of the line
 * @param  {number} width          - The width of the canvas
 * @param  {number} height         - The height of the canvas
 */
export function ddaSimple(
    data: Uint8ClampedArray,
    pointA: [number, number],
    pointB: [number, number],
    width: number, height: number
) {
    let setPixel = function (
        x: number, y: number,
        data: Uint8ClampedArray, width: number
    ) {
        data[4 * (width * y + x) + 0] = 0;
        data[4 * (width * y + x) + 1] = 0;
        data[4 * (width * y + x) + 2] = 0;
        data[4 * (width * y + x) + 3] = 255;
    }

    setPixel(pointA[0], pointA[1], data, width);
    setPixel(pointB[0], pointB[1], data, width);

    let p1x = Math.round(pointA[0]);
    let p1y = Math.round(pointA[1]);
    let p2x = Math.round(pointB[0]);
    let p2y = Math.round(pointB[1]);

    let m: number = (p2y - p1y) / (p2x - p1x);
    for (let x: number = 0; x < (p2x - p1x); x++) {
        setPixel(p1x + x, p1y + Math.round(m * x), data, width);
    }

    // TODO: Calculcate the slope m for a line from pointA to pointB.
    // TODO: In this example, the main direction of the line is the x-direction.
    // TODO: Go from the x-coordinate of pointA (pointA[0]) to the x-coordinate of pointB (pointB[0]) and calculate the y-coordinate of the pixels in between.
}
