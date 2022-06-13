import Matrix from "../07/matrix";
import Vector from "../05/vector";

export interface Transformation {
    getMatrix(): Matrix;
    getInverseMatrix(): Matrix;
}

/**
 * The MatrixTransformation class holds a transformation as well as its
 * inverse using matrices.
 */
export class MatrixTransformation implements Transformation {
    matrix: Matrix;
    inverse: Matrix;

    constructor(matrix: Matrix, inverse: Matrix) {
        this.matrix = matrix;
        this.inverse = inverse;
    }

    getMatrix(): Matrix {
        return this.matrix;
    }

    getInverseMatrix(): Matrix {
        return this.inverse;
    }
}

/**
 * Translation holds a matrix for the translation,
 * and a matrix for the inverse translation.
 */
export class Translation extends MatrixTransformation {

    constructor(translation: Vector) {

        // TODO: Create 2 matrices, one for the translation and
        // TODO: one for its inverse.
        // TODO: Call the constructor of the super class with the two matrices.
        // TODO: "super" has to be the first call in the constructor, so you have to put
        // TODO: everything into a single line
    }
}

/**
 * Rotation holds a matrix for the rotation,
 * and a matrix for the inverse rotation.
 */
export class Rotation extends MatrixTransformation {

    private _axis: Vector;
    private _angle: number;

    constructor(axis: Vector, angle: number) {

        // TODO: Create 2 matrices, one for the rotation and
        // TODO: one for its inverse.
        // TODO: Call the constructor of the super class with the two matrices.
        // TODO: "super" has to be the first call in the constructor, so you have to put
        // TODO: everything into a single line.
        // TODO: Store the axis and angle for later recalculation when the angle is changed.
    }

    set axis(axis: Vector) {
        this._axis = axis;
        this.recalculate();
    }

    set angle(angle: number) {
        this._angle = angle;
        this.recalculate();
    }

    private recalculate() {
        // TODO: Calculate a new rotation matrix and inverse
        // TODO: from this._axis and this._angle
    }
}

/**
 * Scaling holds a matrix for the scaling,
 * and a matrix for the inverse scaling.
 */
export class Scaling extends MatrixTransformation {

    constructor(scale: Vector) {
        // TODO: Create 2 matrices, one for the scaling and
        // TODO: one for its inverse.
        // TODO: Call the constructor of the super class with the two matrices.
        // TODO: "super" has to be the first call in the constructor, so you have to put
        // TODO: everything into a single line.
    }
}
