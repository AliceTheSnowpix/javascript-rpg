import GameObject from "./gameobject";
import Renderable from "./renderable";

export default class Map extends GameObject {
    constructor(mapJson, mapImg) {
        super();
        
        this.renderable = new Renderable(mapImg, 3, 0, 240, 24, 10, 0);
        this.data = mapJson;
    }

    draw(ctx) {
        super.draw(ctx);

        this.data.layers.forEach(layer => {
            //? everything here will happen to each layer
            let x = 0;
            let y = 0;
            layer.data.forEach((value, index) => {
                this.renderable.frame = value -1;
                x = index % layer.width;
                y = Math.floor(index/layer.width);

                ctx.save();
                ctx.translate(
                    this.position[0] +  x * this.renderable.subWidth * this.renderable.scale,
                    this.position[1] + y * this.renderable.subHeight * this.renderable.scale);

                this.renderable.draw(ctx);
                ctx.restore();
            });
        });
    }
}