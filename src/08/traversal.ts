import Camera from "../05/camera";
import Ray from "../05/ray";
import Intersection from "../05/intersection";

import { Node, GroupNode, SphereNode } from "./nodes";
import { Transformation, MatrixTransformation } from "./transformation";

export class Traversal {

    /**
     * Traverse through the scenegraph while intersecting all the SphereNodes
     * in the graph.
     * If an intersection between ray and a SphereNode occurs, add the
     * intersection to the Array of Intersections, and add the SphereNode to the
     * Array of Nodes.
     *
     * @param node The node in the scenegraph to traverse
     * @param ray The current ray with which to raytrace
     * @param transformation The current world transformation during traversal
     * @param intersections An Array of intersections that needs to be filled
     * @param intersectionObjects An Array of intersected Nodes that needs to be filled
     */
    public static traverse(node: Node, ray: Ray, transformation: Transformation,
        intersections: Array<Intersection>, intersectionObjects: Array<SphereNode>) {

        if (node instanceof GroupNode) {

            // TODO: Recurse through the list of child nodes:
            // TODO: Calculate a new world matrix =
            // TODO:   current transformation Matrix * the child transformation matrix
            // TODO: And the inverse world matrix =
            // TODO:   child inverse * current inverse transformation Matrix
        }

        if (node instanceof SphereNode) {

            // TODO: Calculate a new Ray for intersection testing.
            // TODO: If you passed the correct matrices during traversal of
            // TODO: the GroupNodes, "transformation" is currently
            // TODO: in world coordinates.
            // TODO: 1. Transform the ray's origin and direction vector to
            // TODO:    the object coordinate system by multiplying with
            // TODO:    the inverse transformation matrix.
            // TODO: 2. Perform the intersection by reusing sphere.intersect
            // TODO: 3. If there is an intersection, transform the resulting
            // TODO:    intersection point and intersection normal back to
            // TODO:    world coordinates, by multiplying with the current
            // TODO:    transformation matrix. Re-calculate "t" from the
            // TODO:    transformed intersection point in world coordinates.
            // TODO: 4. Push the intersection and intersection object to
            // TODO:    "intersections" and "intersectionObjects", respectively
        }
    }
}
