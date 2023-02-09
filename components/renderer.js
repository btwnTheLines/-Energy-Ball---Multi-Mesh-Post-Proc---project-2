import { WebGLRenderer } from "../node_modules/three/build/three.module.js";

////
//
// Renderer
//
////
const renderer = new WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

export{ renderer };