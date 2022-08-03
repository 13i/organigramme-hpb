
import P5 from "p5";

export default class Scene {

    width: number = 1200;
    height: number = 600;

    constructor(p5: P5) {
        P5.createCanvas(this.width, this.height);
    }

}