import * as THREE from "../node_modules/three/src/Three.js";

//Textures
var textureLoader = new THREE.TextureLoader();
var colorMap = textureLoader.load("./flat_waffle_files/waffle_texture/Waffle_001_basecolor.jpg");
var normalMap = textureLoader.load("./flat_waffle_files/waffle_texture/Waffle_001_normal.jpg");
var heightMap = textureLoader.load("./flat_waffle_files/waffle_texture/Waffle_001_height.png");
var aoMap = textureLoader.load("./flat_waffle_files/waffle_texture/Waffle_001_ao.jpg");

export {
    colorMap,
    normalMap,
    heightMap,
    aoMap
};