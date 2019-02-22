import GameObject from "./gameobject";
import Renderable from "./renderable";
import Box from "./phybox";

export default class Map extends GameObject {
    constructor(mapJson, mapImg) {
        super();

        const SCALE = 3
        
        this.renderable = new Renderable(mapImg, SCALE, 0, 240, 24, 10, 0);

        this.colliders = [];

        this.data = mapJson;

        this.data.layers.forEach(layer => {
            if(layer.type == "objectgroup"){
                layer.objects.forEach(obj => {
                    this.colliders.push(new Box(obj.x * SCALE, obj.y * SCALE, obj.width * SCALE, obj.height * SCALE));
                });
            }
        });
    }

    getColliders() {
        return this.colliders
    }

    draw(ctx) {
        this.data.layers.forEach(layer => {
            //? everything here will happen to each layer
            if(layer.type == "tilelayer"){
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
            }
        });
        super.draw(ctx);
    }
}