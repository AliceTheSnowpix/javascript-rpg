import GameObject from "./gameobject";
import Input from "./input";
import Box from "./phybox";

export default class Engine {
    constructor() {
        document.body.style.margin = "0px";
        document.body.style.overflow = "hidden";
        this.canvas = document.createElement("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.phyDebug = false;
        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext("2d");
        this.ctx.imageSmoothingEnabled = false;

        this.lastTime = new Date().getTime();

        this.objs = [];
        this.colliders = [];

        this.input = new Input();

        window.requestAnimationFrame(this.loop.bind(this));
    }

    addObject(obj) {
        if(obj instanceof GameObject) {
            this.objs.push(obj);
        } else {
            console.error("Invalid Object Added. Not Game Object")
        }
    }

    addColliders(colliders) {
        colliders.forEach(collider => {
            if(collider instanceof Box)
                this.colliders.push(collider);
            else
                console.error("Collider is not a Box");
        })
    }

    getCollision(x, y) {
        let val = false;
        this.colliders.forEach(collider => {
            let result = collider.isInside(x, y);
            if(result === true) {
                val = collider
            }
        });
        return val;
    }

    loop() {
        let time = new Date().getTime();
        let dt = (time - this.lastTime) / 1000;

        //ToDo Do updates here

        if(this.update)
            this.update(dt);

        this.objs.forEach(obj => {
            obj.update(this, dt);
        });

        this.ctx.fillStyle = "#303030";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        //ToDo Do drawing here

        this.objs.forEach(obj => {
            obj.draw(this.ctx);
        });

        if(this.phyDebug) {
            this.colliders.forEach(collider => {
                collider.draw(this.ctx);
            });
        }

        this.lastTime = time;
        window.requestAnimationFrame(this.loop.bind(this));
    }
}