import { swapBuffers } from './setup-checkerboard';

var currentline = -1;

/**
 * Determines the color of a pixel (x, y) to create
 * a checkerboard pattern and saves it into the data array.
 * The data array holds the linearised pixel data of the target canvas
 * row major. Each pixel is of RGBA format.
 * @param data The linearised pixel array
 * @param x The x coordinate of the pixel
 * @param y The y coordinate of the pixel
 * @param width The width of the canvas
 * @param height The height of the canvas
 */
export function checkerboard(data: Uint8ClampedArray, x: number, y: number, width: number, height: number) {
    let offset: number = y * width + x;
    let index: number = offset * 4;

    
    let widthOfField = width / 8;
    let heightOfField = height / 8;

    let xIndex = Math.floor(x / widthOfField);
    let yIndex = Math.floor(y / heightOfField);
    let value = 0;
    if ((xIndex + yIndex) % 2 == 1) {
        value = 255;
    }

    data[index] = value;
    data[index + 1] = value;
    data[index + 2] = value;
    data[index + 3] = 255;
    // TODO: Imagine an 8x8 tile checkerboard across the width and height of the canvas. Compute if the pixel at position (x, y) is inside a black or white tile. Set the pixel color accordingly in the pixel array 'data'.
}
