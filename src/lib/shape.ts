
import Point from './point';

export default abstract class Shape {

    center!: Point;

    radius!: number;

    constructor(center: Point, radius: number) {
        this.center = center;
        this.radius = radius;
    }

}