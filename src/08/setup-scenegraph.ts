import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';

import Vector from '../05/vector';
import { GroupNode, SphereNode } from './nodes';
import { Rotation, Scaling, Translation } from './transformation';
import { raytracePhong } from './raytracing';


window.addEventListener('load', () => {

    const canvas = document.getElementById("result") as HTMLCanvasElement;
    if (canvas === null)
        return;

    const ctx = canvas.getContext("2d");
    var pixel = ctx.createImageData(1, 1);
    let imageData: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    const lightPositions = [
        new Vector(0, 0, 0, 1)
    ];

    const camera = {
        origin: new Vector(0, 0, 0, 1),
        width: canvas.width,
        height: canvas.height,
        alpha: Math.PI / 3
    }

    const root = new GroupNode(new Translation(new Vector(0, 0, -5, 0)));
    let moonRotation = new Rotation(new Vector(0.0, 1.0, 0.0, 0.0), 0.0);

    // TODO: Create a SceneGraph looking like this:
    // TODO:
    // TODO:                 o root GroupNode with Translation (0, 0, -5)
    // TODO:                / \
    // TODO:               /   \
    // TODO:   SphereNode o     o GroupNode with moonRotation
    // TODO:                     \
    // TODO:                      o GroupNode with Translation (2, 0, 0)
    // TODO:                       \
    // TODO:                        o GroupNode with Scaling (0.2, 0.2, 0.2)
    // TODO:                         \
    // TODO:                          o SphereNode
    // TODO:

    let animationHandle: number;

    let lastTimestamp = 0;
    let animationTime = 0;
    let animationHasStarted = true;

    function animate(timestamp: number) {

        console.log("animate");
        let deltaT = timestamp - lastTimestamp;

        if (animationHasStarted) {
            deltaT = 0;
            animationHasStarted = false;
        }

        animationTime += deltaT;
        lastTimestamp = timestamp;

        let data = imageData.data;
        data.fill(0);
        
        const width = imageData.width;
        const height = imageData.height;
    
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {

                raytracePhong(data, camera, root, lightPositions, 20, x, y, width, height);

                for (let i = 0; i < 4; i ++)
                    pixel.data[i] = data[(x + y * canvas.width) * 4 + i];
                ctx.putImageData(pixel, x, y);
            }
        }

        moonRotation.angle = -animationTime / 5000;
    }

    function startAnimation() {
        if (animationHandle) {
            window.cancelAnimationFrame(animationHandle);
        }

        animationHasStarted = true;

        function animation(t: number) {
            animate(t);
            animationHandle = window.requestAnimationFrame(animation);
        }

        animationHandle = window.requestAnimationFrame(animation);
    }
    animate(0);

    document.getElementById("startAnimationBtn").addEventListener(
        "click", startAnimation);
    document.getElementById("stopAnimationBtn").addEventListener(
        "click", () => cancelAnimationFrame(animationHandle));
});
