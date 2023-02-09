import { SphereGeometry, PointsMaterial, Points } from "../node_modules/three/build/three.module.js";

////
//
// Geometry
//
////
const geometry = new SphereGeometry( 4.1, 20 );

////
//
// Material
//
////
var material = new PointsMaterial({
    size: 0.008,
    color: "#fc8d8d"
});

////
//
// Mesh
//
////
var small_circle = new Points( geometry, material );

export { small_circle };