import Ray from "../src/05/ray";
import Camera from "../src/05/camera";

import { assert, expect } from 'chai';
import { GroupNode, SphereNode } from "../src/08/nodes";
import { Translation, Rotation } from "../src/08/transformation";
import Vector from "../src/05/vector";
import Sphere from "../src/05/sphere";
import Intersection from "../src/05/intersection";
import { Traversal } from "../src/08/traversal";

describe('Traversal', () => {

    it('Moved & rotated SphereNode can be intersected correctly', () => {
        let t: GroupNode = new GroupNode(new Translation(new Vector(0.0, 0.0, -5.0, 0.0)));
        let r: GroupNode = new GroupNode(new Rotation(new Vector(0.0, 1.0, 0.0, 0.0), Math.PI / 180 * 90));
        t.add(r);

        let s: SphereNode = new SphereNode(new Translation(new Vector(0.0, 0.0, 0.0, 0.0)), new Vector(0.0, 0.0, 0.0, 0.0));
        r.add(s);

        let ray: Ray = new Ray(new Vector(0.0, 0.0, 0.0, 1.0), new Vector(0.0, 0.0, -1.0, 0.0));

        let intersection = new Array<Intersection>();
        let intersectionObjects = new Array<SphereNode>();
        Traversal.traverse(t, ray, t.transform, intersection, intersectionObjects);
        
        // rotation should not move sphere
        expect(intersection.length).to.equal(1);
        expect(intersection[0].point.x).to.be.closeTo(0, 0.00001);
        expect(intersection[0].point.y).to.be.closeTo(0, 0.00001);
        expect(intersection[0].point.z).to.be.closeTo(-4, 0.00001);
        expect(intersection[0].point.w).to.be.closeTo(1, 0.00001);

        r.children.pop();
        let s1: SphereNode = new SphereNode(new Translation(new Vector(1.0, 0.0, 0.0, 0.0)), new Vector(0.0, 0.0, 0.0, 0.0));
        r.add(s1);
        intersection = new Array<Intersection>();
        intersectionObjects = new Array<SphereNode>();
        Traversal.traverse(t, ray, t.transform, intersection, intersectionObjects);

        // rotating 90° around y and translating in x direction should move in z direction
        expect(intersection.length).to.equal(1);
        expect(intersection[0].point.x).to.be.closeTo(0, 0.00001);
        expect(intersection[0].point.y).to.be.closeTo(0, 0.00001);
        expect(intersection[0].point.z).to.be.closeTo(-5, 0.00001);
        expect(intersection[0].point.w).to.be.closeTo(1, 0.00001);

        t.children.pop();
        r = new GroupNode(new Rotation(new Vector(0.0, 0.0, 1.0, 0.0), Math.PI / 180 * 90));
        t.add(r);

        let s2 = new SphereNode(new Translation(new Vector(0.999999999999, 0.0, 0.0, 0.0)), new Vector(0.0, 0.0, 0.0, 0.0));
        r.add(s2);
        intersection = new Array<Intersection>();
        intersectionObjects = new Array<SphereNode>();
        Traversal.traverse(t, ray, t.transform, intersection, intersectionObjects);

        // rotating 90° around z and translating in x direction should move in y direction
        expect(intersection.length).to.equal(1);
        expect(intersection[0].point.x).to.be.closeTo(0, 0.00001);
        expect(intersection[0].point.y).to.be.closeTo(0, 0.00001);
        expect(intersection[0].point.z).to.be.closeTo(-5, 0.00001);
        expect(intersection[0].point.w).to.be.closeTo(1, 0.00001);
        expect(intersection[0].normal.x).to.be.closeTo(0, 0.00001);
        expect(intersection[0].normal.y).to.be.closeTo(-1, 0.00001);
        expect(intersection[0].normal.z).to.be.closeTo(0, 0.00001);
        expect(intersection[0].normal.w).to.be.closeTo(0, 0.00001);
    });
});