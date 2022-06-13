import Vector from '../05/vector';
import Sphere from '../05/sphere';
import Ray from '../05/ray';
import Intersection from '../05/intersection';

import { MatrixTransformation, Transformation } from './transformation';

/**
 * Class representing a Node in a Scenegraph
 * A Node holds a transformation.
 */
export class Node {

    public transform: Transformation = null;

    constructor(transform: Transformation) {
        this.transform = transform;
    }
}

/**
 * Class representing a GroupNode in the Scenegraph.
 * A GroupNode holds a transformation and is able
 * to have child nodes attached to it.
 * @extends Node
 */
export class GroupNode extends Node {

    /**
     * The children of the group node
     */
    children: Array<Node>;

    /**
     * Constructor
     * @param transform The node's transformation
     */
    constructor(transform: Transformation) {

        super(transform);
        this.children = [];
    }

    /**
     * Adds a child node
     * @param childNode The child node to add
     */
    add(childNode: Node) {
        // TODO: Add the childNode to the list of children
    }
}

/**
 * Class representing a Sphere in the Scenegraph
 * @extends Node
 */
export class SphereNode extends Node {

    public static unit_sphere: Sphere = new Sphere(new Vector(0.0, 0.0, 0.0, 1.0), 1.0, new Vector(0.0, 0.0, 0.0, 0.0));

    public color: Vector = null;

    /**
     * Creates a new Sphere.
     * The sphere is defined around the origin
     * with radius 1.
     * @param color The color of the Sphere
     */
    constructor(transform: Transformation, color: Vector) {

        super(transform);
        this.color = color;
    }

    /**
     * Calculate the intersection of the ray with unit_sphere
     * @param ray The ray to intersect with
     * @returns An Intersection or null if there is no intersection
     */
    public intersect(ray: Ray): Intersection {

        // TODO: Intersect this ray with the unit_sphere and return the Intersection
        // TODO: Reuse Sphere.intersect that you have already implemented
        return null;
    }
}
