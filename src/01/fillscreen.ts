import { swapBuffers } from './setup-fillscreen';

/**
 * Determines the color of a pixel (x, y)
 * and saves it into the data array.
 * The data array holds the linearised pixel data of the target canvas
 * row major. Each pixel is of RGBA format.
 * @param data The linearised pixel array
 * @param x The x coordinate of the pixel
 * @param y The y coordinate of the pixel
 * @param width The width of the canvas
 * @param height The height of the canvas
 */
export function fillscreen(data: Uint8ClampedArray, x: number, y: number, width: number, height: number) {
    let index: number = y * width + x;
    let positionInArray: number = index * 4;
    data[positionInArray] = 255;
    data[positionInArray + 1] = 0;
    data[positionInArray + 2] = 0;
    data[positionInArray + 3] = 255;
}
