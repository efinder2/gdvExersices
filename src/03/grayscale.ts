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

function RGBtoXYZ(R: number, G: number, B: number) {
    let var_R = R / 255        //R from 0 to 255
    let var_G = G / 255      //G from 0 to 255
    let var_B = B / 255         //B from 0 to 255

    if (var_R > 0.04045) var_R = Math.pow(((var_R + 0.055) / 1.055), 2.4);
    else var_R = var_R / 12.92
    if (var_G > 0.04045) var_G = Math.pow(((var_G + 0.055) / 1.055), 2.4)
    else var_G = var_G / 12.92
    if (var_B > 0.04045) var_B = Math.pow(((var_B + 0.055) / 1.055), 2.4)
    else var_B = var_B / 12.92

    var_R = var_R * 100
    var_G = var_G * 100
    var_B = var_B * 100

    //Observer. = 2°, Illuminant = D65
    let X = var_R * 0.4124 + var_G * 0.3576 + var_B * 0.1805
    let Y = var_R * 0.2126 + var_G * 0.7152 + var_B * 0.0722
    let Z = var_R * 0.0193 + var_G * 0.1192 + var_B * 0.9505
    return [X, Y, Z]
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
