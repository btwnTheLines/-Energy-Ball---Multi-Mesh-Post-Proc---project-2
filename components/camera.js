import { PerspectiveCamera } from "../node_modules/three/build/three.module.js";

////
//
// Perspective Camera
//
////
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 20;

export{ camera };