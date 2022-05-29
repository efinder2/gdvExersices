import Vector from './vector';
import Camera from './camera';

/**
 * Class representing a ray
 */
export default class Ray {

    public origin: Vector = null;
    public direction: Vector = null;

    /**
     * Creates a new ray with origin and direction
     * @param origin The origin of the Ray
     * @param direction The direction of the Ray
     */
    constructor(origin: Vector, direction: Vector) {

        this.origin = origin;
        this.direction = direction;
    }

    /**
     * Creates a ray from the camera through the image plane.
     * The image plane is positioned in direction of the negative z-axis.
     * @param x The pixel's x-position in the canvas
     * @param y The pixel's y-position in the canvas
     * @param camera The Camera
     * @return The resulting Ray
     */
    static makeRay(x: number, y: number, camera: Camera): Ray {
        // TODO: Generate a ray from the camera origin through pixel (x, y)
        // TODO: on the image plane. In addition to the coordinates (x, y), you will need the
        // TODO: width and height of the camera (i.e. the width and height of the camera's
        // TODO: image plane), and the angle alpha specifying the camera's field of view.

        let direction: Vector;
        let xD: number = x - (camera.width - 1) / 2;
        let yD: number = (camera.height - 1) / 2 - y;
        let zD: number = - (camera.width / 2) / Math.tan(camera.alpha / 2);
        direction = new Vector(xD, yD, zD, 0).sub(camera.origin).normalize();


        return new Ray(camera.origin, direction.normalize());

    }
}
