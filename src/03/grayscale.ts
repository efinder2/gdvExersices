/**
 * Convert the color information of the pixel at (x, y) to grayscale by using the
 * Y coordinate of the XYZ color space.
 *
 * @param x The x coordinate of the pixel to convert
 * @param y The y coordinate of the pixel to convert
 * @param source The source image data
 * @param target The image data to save the converted color information to
 * @param width The width of the canvas
 * @param height The height of the canvas
 */
export function grayscale(x: number, y: number, source: Uint8ClampedArray, target: Uint8ClampedArray, width: number, height: number) {
    let index: number = y * width + x;
    let positionInArray: number = index * 4;
    let r = source[positionInArray];
    let g = source[positionInArray + 1];
    let b = source[positionInArray + 2];

    let value = rgbToXyz(r, g, b);
    let greyScale = value[1];
    target[positionInArray] = greyScale;
    target[positionInArray + 1] = greyScale;
    target[positionInArray + 2] = greyScale;
    target[positionInArray + 3] = 255;

    // TODO: Convert the pixel at position (x, y) in the source array from RGB to XYZ.
    // TODO: Set the RGBA values in the target array according to the Y component of the source pixel in XYZ space.
}

/**
 * Converts RGB color to CIE 1931 XYZ color space.
 * https://www.image-engineering.de/library/technotes/958-how-to-convert-between-srgb-and-ciexyz
 * @param  {string} hex
 * @return {number[]}
 */
 export function rgbToXyz(r:number, g:number, b:number) {
    const X =  0.4124 * r + 0.3576 * g + 0.1805 * b
    const Y =  0.2126 * r + 0.7152 * g + 0.0722 * b
    const Z =  0.0193 * r + 0.1192 * g + 0.9505 * b
    // For some reason, X, Y and Z are multiplied by 100.
    return [X, Y, Z]
}
