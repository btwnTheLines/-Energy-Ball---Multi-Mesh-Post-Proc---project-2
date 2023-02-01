import * as THREE from "../node_modules/three/src/Three.js";

import {
    colorMap,
    normalMap,
    aoMap,
    heightMap
} from "./textures.js";

//Geometry + Material + Mesh + texture
const geometry = new THREE.PlaneGeometry( 10, 10, 1000, 1000 );

var material = new THREE.MeshPhongMaterial({
    map: colorMap,
    normalMap: normalMap,
    aoMap: aoMap,
    displacementMap: heightMap
});

var cube = new THREE.Mesh( geometry, material );

export { cube };