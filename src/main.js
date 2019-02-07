import Engine from "./engine";
import GameObject from "./gameobject";

let engine = new Engine();

let testObj = new GameObject();
testObj.position = [100, 100]
engine.addObject(testObj);