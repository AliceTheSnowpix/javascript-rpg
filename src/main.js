import Engine from "./engine";
import Player from "./player";

let engine = new Engine();

let player = new Player(50, 50);

engine.addObject(player);
engine.update = (dt) => {
    if(engine.input.isKeyDown("KeyW") || engine.input.isKeyDown("ArrowUp") || engine.input.isKeyDown("Numpad8")) {
        player.translate(0, -100 * dt);
        player.facing = 1;
    }
    if(engine.input.isKeyDown("KeyS") || engine.input.isKeyDown("ArrowDown") || engine.input.isKeyDown("Numpad2")) {
        player.translate(0, 100 * dt);
        player.facing = 3;
    }
    if(engine.input.isKeyDown("KeyA") || engine.input.isKeyDown("ArrowLeft") || engine.input.isKeyDown("Numpad4")) {
        player.translate(-100 * dt, 0);
        player.facing = 4;
    }
    if(engine.input.isKeyDown("KeyD") || engine.input.isKeyDown("ArrowRight") || engine.input.isKeyDown("Numpad6")) {
        player.translate(100 * dt, 0);
        player.facing = 2;
    }
    if(!engine.input.isKeyDown("KeyW") && !engine.input.isKeyDown("ArrowUp") && !engine.input.isKeyDown("Numpad8") && 
        !engine.input.isKeyDown("KeyS") && !engine.input.isKeyDown("ArrowDown") && !engine.input.isKeyDown("Numpad2") && 
        !engine.input.isKeyDown("KeyA") && !engine.input.isKeyDown("ArrowLeft") && !engine.input.isKeyDown("Numpad4") && 
        !engine.input.isKeyDown("KeyD") && !engine.input.isKeyDown("ArrowRight") && !engine.input.isKeyDown("Numpad6")) {
        player.facing = 0
    }
};