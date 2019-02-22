import GameObject from "./gameobject";
import Renderable from "./renderable";
import playerIMG from "./images/player.png";

export default class Player extends GameObject {
    constructor(engine, x, y) {
        super();

        this.engine = engine

        this.position = [x, y]

        this.facing = 0;
        this.renderables = [
            new Renderable(playerIMG, 1, 18, 0, 9, 4, 10),
            new Renderable(playerIMG, 1, 1, 7, 9, 4, 10),
            new Renderable(playerIMG, 1, 27, 7, 9, 4, 10),
            new Renderable(playerIMG, 1, 19, 7, 9, 4, 10),
            new Renderable(playerIMG, 1, 9, 7, 9, 4, 10)
        ];
    }

    translate(x, y) {

        if(this.engine.getCollision(
            this.position[0] + x + this.renderables[0].subWidth / 2,
            this.position[1] + y + this.renderables[0].subHeight - 10) !== false) {
            x = 0;
            y = 0;
        }

        super.translate(x, y);
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.position[0], this.position[1])
        this.renderables[this.facing].draw(ctx);
        ctx.restore();

        super.draw(ctx)
    }
}