import { assert, expect } from 'chai';
import Intersection from '../src/05/intersection';
import Ray from '../src/05/ray';

import Vector from "../src/05/vector";
import Matrix from '../src/07/matrix';

import { GroupNode, SphereNode } from '../src/08/nodes';
import { Translation, Rotation, Scaling, MatrixTransformation, Transformation } from "../src/08/transformation";

describe('GroupNode', () => {

    it('can be correctly initialized with a Transformation', () => {

        let t: Transformation = new MatrixTransformation(Matrix.identity(), Matrix.identity());
        let g: GroupNode = new GroupNode(t);
        expect(g).to.be.an('object');
    });

    it('can have children', () => {

        let t: Transformation = new MatrixTransformation(Matrix.identity(), Matrix.identity());
        let g: GroupNode = new GroupNode(t);
        let c: GroupNode = new GroupNode(t);
    
        expect(g).to.be.an('object');
        expect(c).to.be.an('object');

        g.add(c);

        expect(g.children).to.be.an('Array');
        expect(g.children.length).to.equal(1);
    });
});
   
describe('SphereNode', () => {
    it('can be intersected in Origin', () => {

        let t: Transformation = new MatrixTransformation(Matrix.identity(), Matrix.identity());
        let s: SphereNode = new SphereNode(t, new Vector(0.0, 0.0, 0.0, 1.0));
    
        expect(s).to.be.an('object');

        let r: Ray = new Ray(new Vector(0.0, 0.0, 10, 1.0), new Vector(0.0, 0.0, -1.0, 0.0));
        let i: Intersection = s.intersect(r);

        assert.deepEqual(i.point.data, [
            0, 0, 1, 1,
        ]);
    });
});

