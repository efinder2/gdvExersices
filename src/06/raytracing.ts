import Camera from '../05/camera';
import Sphere from '../05/sphere';
import Intersection from '../05/intersection';
import Vector from '../05/vector';
import Ray from '../05/ray';
import { phong } from './phong';

/**
 * Compute the color of the pixel (x, y) by raytracing
 * using a given camera and multiple spheres.
 *
 * @param data The linearised pixel array
 * @param camera The camera used for raytracing
 * @param spheres The spheres to raytrace
 * @param x The x coordinate of the pixel to convert
 * @param y The y coordinate of the pixel to convert
 * @param width The width of the canvas
 * @param height The height of the canvas
 */
export function raytracePhong(data: Uint8ClampedArray,
    camera: Camera,
    spheres: Array<Sphere>,
    lightPositions: Array<Vector>,
    shininess: number,
    x: number, y: number,
    width: number, height: number) {

    let sizeOfLeastT = 0;
    spheres.forEach((sphere, index, array) => {

        let ray: Ray = Ray.makeRay(x, y, camera);
        let intersection: Intersection = sphere.intersect(ray);
        if (intersection == null) {
            return;
        }

        if (intersection.t < sizeOfLeastT || sizeOfLeastT == 0) {
            var color = phong(sphere.color, intersection, lightPositions, shininess, camera.origin)
            sizeOfLeastT = intersection.t;
            let index: number = y * width + x;
            let positionInArray: number = index * 4;
            data[positionInArray] =  color.x*255;
            data[positionInArray + 1] = color.y * 255;
            data[positionInArray + 2] = color.z * 255;
            data[positionInArray + 3] = color.w * 255;

        }
    });
    // TODO: Create ray from camera through image plane at position (x, y).
    // TODO: Compute closest intersection with spheres in the scene.
    // TODO: Compute emission at point of intersection using phong model.
    // TODO: Set pixel color accordingly.
}
