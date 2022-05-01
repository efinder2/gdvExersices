/**
 * Posterise the source image and save the result in the target image.
 * Restrict each color channel to four equidistant values.
 *
 * @param x The x coordinate of the pixel to posterise
 * @param y The y coordinate of the pixel to posterise
 * @param source The source image data
 * @param target The image data to save the converted color information to
 * @param width The width of the canvas
 * @param height The height of the canvas
 */
export function quantiseColor(x: number, y: number, source: Uint8ClampedArray, target: Uint8ClampedArray, width: number, height: number) {

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

    let value = rgbToXyz(r, g, b);

    // grey = floor(I^(1/gamma)*2^n) -> see lecture 02 page 52
    for (let i = 0; i < 3; i++) {
        let gamma = 1;
        let colorValueInRGB = rgb[i] / 255;
        let poweer = Math.pow(colorValueInRGB, 1 / gamma);
        let n = Math.floor(poweer * 4);

        let grayScale = n;
        switch (n) {
            case 0:
                grayScale = 0;
                break;
            case 1:
                grayScale = 85;
                break;
            case 2:
                grayScale = 170
                break;
            case 3:
            case 4:
                grayScale = 255;
                break;
            default:
                throw Error("unerwarteter wert: " + n + "für farbe: " + value[i] + "power :" + poweer);
        }

        target[positionInArray + i] = grayScale;
    }
    target[positionInArray + 3] = 255;

}

/**
 * Converts RGB color to CIE 1931 XYZ color space.
 * https://www.image-engineering.de/library/technotes/958-how-to-convert-between-srgb-and-ciexyz
 * @param  {string} hex
 * @return {number[]}
 */
export function rgbToXyz(r: number, g: number, b: number) {
    const X = 0.4124 * r + 0.3576 * g + 0.1805 * b
    const Y = 0.2126 * r + 0.7152 * g + 0.0722 * b
    const Z = 0.0193 * r + 0.1192 * g + 0.9505 * b
    // For some reason, X, Y and Z are multiplied by 100.
    return [X, Y, Z]
}