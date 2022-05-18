function setPixel(data: Uint8ClampedArray, x: number, y: number, width: number, height: number) {

    var index = (x + y * width) * 4;
    data[index + 0] = 0;
    data[index + 1] = 0;
    data[index + 2] = 0;
    data[index + 3] = 255;
}

/**
 * Draws a line from pointA to pointB on the canvas
 * with the Bresenham algorithm.
 * @param  {Uint8ClampedArray} data   - The linearised pixel array
 * @param  {[number, number]} pointA - The start point of the line
 * @param  {[number, number]} pointB - The end point of the line
 * @param  {number} width          - The width of the canvas
 * @param  {number} height         - The height of the canvas
 */
export function bresenhamSimple(data: Uint8ClampedArray, pointA: [number, number], pointB: [number, number], width: number, height: number) {

    let setPixel = function (
        x: number, y: number,
        data: Uint8ClampedArray, width: number
    ) {
        data[4 * (width * y + x) + 0] = 0;
        data[4 * (width * y + x) + 1] = 0;
        data[4 * (width * y + x) + 2] = 0;
        data[4 * (width * y + x) + 3] = 255;
    }

    // TODO: 1. Calculate dx and dy and set the start position x and y
    // TODO: 2. Calculate the initial epsilon of the bresenham algorithm
    // TODO: 3. Go from pointA[0] to pointB[0], and update epsilon in each step as given in the bresenham algorithm. Increase y when necessary.

    let dx = pointB[0] - pointA[0];
    let dy = pointB[1] - pointA[1];

    //Initial Error
    let epsilon = 2 * dy - dx;
    let x = pointA[0];
    let y = pointA[1];
    //Schleife von Start x bis end x
    while (x < pointB[0]) {
        //Vorzeichen in Fehler < 0
        if (epsilon <= 0) {
            epsilon += 2 * dy;
        } else {
            epsilon += 2 * dy - 2 * dx;
            y++;
        }
        x++;
        setPixel(x, y,  data, width);
    }
}
