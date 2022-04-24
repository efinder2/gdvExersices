import { swapBuffers } from './setup-circle';

/**
 * Determines the color of a pixel (x, y) to create
 * a circle and saves it into the data array.
 * The data array holds the linearised pixel data of the target canvas
 * row major. Each pixel is of RGBA format.
 * @param data The linearised pixel array
 * @param x The x coordinate of the pixel
 * @param y The y coordinate of the pixel
 * @param width The width of the canvas
 * @param height The height of the canvas
 * @param radius The radius of the circle
 */
export function circle(data: Uint8ClampedArray, x: number, y: number, cx: number, cy: number, width: number, height: number, radius: number) {

    let offset: number = y * width + x;
    let index: number = offset * 4;

    let xCenter: number = width / 2;
    let yCenter: number = height / 2;

    // trigonomische formel um Abstand zur Mitte zu ermitteln
    // a2 +b2 = c2
    let a: number = x - xCenter;
    let b: number = y - yCenter;
    let c: number = Math.sqrt(a * a + b * b);
    let value = 255;
    if (c <= radius) {
        value = 0;
    }

    data[index] = value;
    data[index + 1] = value;
    data[index + 2] = value;
    data[index + 3] = 255;
}
