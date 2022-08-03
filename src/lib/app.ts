

import P5 from "p5";
import Scene from "./scene";
import Shape from "./shape";

const App = (p5: P5) => {

    const shapes: Shape[] = [];

    p5.setup = () => {
        const canvas = p5.createCanvas(200, 200);
        canvas.parent("app");

        p5.background("white");

        // DEMO: Create three circles in the center of the canvas
        for (let i = 1; i < 4; i++) {
            const p = p5.width / 4;
            const circlePos = p5.createVector(p * i, p5.height / 2);
            const size = i % 2 !== 0 ? 24 : 32;
            myCircles.push(new MyCircle(p5, circlePos, size));
        }


    };

}

export default class App {

    p5!: P5;
    scene!: Scene;

    constructor(p5: P5) {

        this.p5 = p5;

        this.scene = new Scene();

    }

};