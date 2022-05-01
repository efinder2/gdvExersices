/**
 * Conducts a gamma adjustment with a given gamma value on the pixel
 * (x, y). The original color information can be read from the source image.
 * The adjusted color is to be saved in the dest array.
 * @param {number} gamma The gamma factor to adjust the brightness
 * @param {Uint8ClampedArray} source The original pixel data
 * @param {Uint8ClampedArray} dest The array to save the adjusted color data to
 * @param {number} x The x coordinate of the pixel to adjust
 * @param {number} y The y coordinate of the pixel to adjust
 * @param {number} width The width of the image in pixels
 * @param {number} height The height of the image in pixels
 */
export function gammaAdjust(gamma: number, source: Uint8ClampedArray,
                            dest: Uint8ClampedArray, x: number, y: number,
                            width: number, height: number) {

    // TODO: Perform a gamma correction with the given gamma value on the current pixel at position (x, y) in the source array, and store the result in the dest array.
        // TODO: Limit the brightness of each color channel to the set of 4 different values 0, 85, 170, 255.
    // TODO: Set the RGBA values in the target array accordingly.
    // TODO:

    // TODO: Convert the pixel at position (x, y) in the source array from RGB to XYZ. Limit the 
    // TODO: Limit the brightness to the set of 4 different values 0, 85, 170, 255.
    // TODO: Set the RGBA values in the target array to this brightness.
    let index: number = y * width + x;
    let positionInArray: number = index * 4;

    let r = source[positionInArray];
    let g = source[positionInArray + 1];
    let b = source[positionInArray + 2];
    let rgb = [r, g, b];

    // grey = floor(I^(1/gamma)*2^n) -> see lecture 02 page 52
    for (let i = 0; i < 3; i++) {
        let colorValueInRGB = rgb[i] / 255;
        let poweer = Math.pow(colorValueInRGB, 1 / gamma);
        let n = Math.floor(poweer * 255);

        dest[positionInArray + i] = n;
    }
    dest[positionInArray + 3] = 255;
}
