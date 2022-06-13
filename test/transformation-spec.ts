import { assert, expect } from 'chai';

import { Translation, Rotation, Scaling } from "../src/08/transformation";
import Vector from "../src/05/vector";

describe('Translation', () => {

    it('can be correctly initialized with a Vector', () => {

        const t: Translation = new Translation(new Vector(1.0, 2.0, 3.0, 0.0));
        expect(t).to.be.an('object');
        assert.deepEqual(t.getMatrix().getVals(), [
            1, 0, 0, 1,
            0, 1, 0, 2,
            0, 0, 1, 3,
            0, 0, 0, 1
        ]);
        assert.deepEqual(t.getInverseMatrix().getVals(), [
            1, 0, 0, -1,
            0, 1, 0, -2,
            0, 0, 1, -3,
            0, 0, 0, 1
        ]);
    });
});

describe('Rotation', () => {

    it('can be correctly initialized with an axis and an angle', () => {

        const r: Rotation = new Rotation(new Vector(0.0, 0.0, 1.0, 0.0), Math.PI / 4);
        console.log(r.matrix);
        expect(r).to.be.an('object');
        assert.deepEqual(r.getMatrix().getVals(), [
            0.7071067690849304, -0.7071067690849304, 0, 0,
            0.7071067690849304, 0.7071067690849304, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]);
        assert.deepEqual(r.getInverseMatrix().getVals(), [
            0.7071067690849304, 0.7071067690849304, 0, 0,
            -0.7071067690849304, 0.7071067690849304, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]);

    });
});

describe('Scaling', () => {

    it('can be correctly initialized with a Vector', () => {

        const s: Scaling = new Scaling(new Vector(1.0, 2.0, 4.0, 0.0));
        expect(s).to.be.an('object');
        assert.deepEqual(s.getMatrix().getVals(), [
            1, 0, 0, 0,
            0, 2, 0, 0,
            0, 0, 4, 0,
            0, 0, 0, 1
        ]);
        assert.deepEqual(s.getInverseMatrix().getVals(), [
            1, 0, 0, 0,
            0, 1/2, 0, 0,
            0, 0, 1/4, 0,
            0, 0, 0, 1
        ]);
    });
});
