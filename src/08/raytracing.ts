import Camera from '../05/camera';
import Intersection from '../05/intersection';
import Vector from '../05/vector';
import Ray from '../05/ray';
import { phong } from '../06/phong';
import { Traversal } from './traversal';
import { Node, SphereNode } from './nodes';

/**
 * Compute the color of the pixel (x, y) by raytracing
 * using a given camera and a given scenegraph.
 *
 * @param data The linearised pixel array
 * @param camera The camera used for raytracing
 * @param scenegraph The root node of the scene to raytrace
 * @param lightPositions The light positions
 * @param shininess The shininess parameter of the Phong model
 * @param width The width of the canvas
 * @param height The height of the canvas
 */
export function raytracePhong(data: Uint8ClampedArray,
                              camera: Camera,
                              scenegraph: Node,
                              lightPositions: Array<Vector>,
                              shininess: number,
                              x: number, y: number,
                              width: number, height: number) {

    let index = (x + y * width) * 4;

    // Create ray from camera through image plane at position (x, y).
    const ray = Ray.makeRay(x, y, camera);

    let intersections = new Array<Intersection>();
    let intersectionObjects = new Array<SphereNode>();

    // TODO: Compute all the intersections by traversing the scenegraph
    // TODO: using Traversal.traverse.
    // TODO: Find the closest intersection from the intersections array.
    // TODO: Compute emission at point of intersection using phong model.
    // TODO: Set pixel color accordingly.
    // If there are no intersections, set pixel color to white
    if (intersections.length == 0) {
        data[index + 0] = 255;
        data[index + 1] = 255;
        data[index + 2] = 255;
        data[index + 3] = 255;
    }
}
