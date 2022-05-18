/**
 * Draws a line from pointA to pointB on the canvas
 * with the Bresenham algorithm.
 * @param  {Uint8ClampedArray} data   - The linearised pixel array
 * @param  {[number, number]} pointA - The start point of the line
 * @param  {[number, number]} pointB - The end point of the line
 * @param  {number} width          - The width of the canvas
 * @param  {number} height         - The height of the canvas
 */
export function bresenham(data: Uint8ClampedArray, pointA: [number, number], pointB: [number, number], width: number, height: number) {
    let setPixel = function (
        x: number, y: number,
        data: Uint8ClampedArray, width: number
    ) {
        data[4 * (width * y + x) + 0] = 0;
        data[4 * (width * y + x) + 1] = 0;
        data[4 * (width * y + x) + 2] = 0;
        data[4 * (width * y + x) + 3] = 255;
    }

    let x0: number = pointA[0];
    let y0: number = pointA[1];

    let x1: number = pointB[0];
    let y1: number = pointB[1];
    
    let dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
    let dy = -Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1;
    let err = dx + dy, e2;

    while (true) {
        setPixel(x0, y0, data, width);
        if (x0 === x1 && y0 === y1) break;
        e2 = 2 * err;
        if (e2 > dy) { err += dy; x0 += sx; }
        if (e2 < dx) { err += dx; y0 += sy; }
    }


    // TODO: Adapt the C-implementation at https://de.wikipedia.org/wiki/Bresenham-Algorithmus#C-Implementierung
}
