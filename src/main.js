import Engine from "./engine";
import GameObject from "./gameobject";
import Renderable from "./renderable";
import playerIMG from "./images/player.png"

let engine = new Engine();

let testObj1 = new GameObject();
testObj1.position = [100, 100];

testObj1.addChild(new Renderable(playerIMG, 1, 7, 9, 4, 10));
engine.addObject(testObj1);
engine.update = (dt) => {
    if(engine.input.isKeyDown("KeyW") || engine.input.isKeyDown("ArrowUp") || engine.input.isKeyDown("Numpad8"))
        testObj1.translate(0, -100 * dt);
    if(engine.input.isKeyDown("KeyS") || engine.input.isKeyDown("ArrowDown") || engine.input.isKeyDown("Numpad2"))
        testObj1.translate(0, 100 * dt);
    if(engine.input.isKeyDown("KeyA") || engine.input.isKeyDown("ArrowLeft") || engine.input.isKeyDown("Numpad4"))
        testObj1.translate(-100 * dt, 0);
    if(engine.input.isKeyDown("KeyD") || engine.input.isKeyDown("ArrowRight") || engine.input.isKeyDown("Numpad6"))
        testObj1.translate(100 * dt, 0);
};