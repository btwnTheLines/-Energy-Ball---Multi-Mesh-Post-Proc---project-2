import * as THREE from "./node_modules/three/build/three.module.js";

////
//
// Post Processing imports
//
////
import { EffectComposer } from "./node_modules/three/examples/jsm/postprocessing/EffectComposer.js";
import { UnrealBloomPass } from "./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { RenderPass } from "./node_modules/three/examples/jsm/postprocessing/RenderPass.js";

////
//
// Mesh imports
//
////
import { torus, torus_2 } from "./components/torus_meshes.js";
import { large_circle, large_circle_2 } from "./components/outer_circles.js";
import { small_circle } from "./components/small_points_circle.js";
import { icosahedron } from "./components/icosahedron.js";
import { core } from "./components/core.js";

////
//
// Scene
//
////
const scene = new THREE.Scene();

////
//
// Camera import
//
////
import { camera } from "./components/camera.js"

////
//
// Renderer imports
//
////
import { renderer } from "./components/renderer.js"

////
//
// Connect Renderer to web page
//
////
document.body.appendChild( renderer.domElement );

////
//
// Light
//
////
const ambientLight = new THREE.AmbientLight( '#FFFFFF', 0.8 );

////
//
// Add mesh's to scene
//
////
scene.add( 
    large_circle ,
    large_circle_2 ,
    torus_2,
    torus,
    small_circle ,
    icosahedron ,
    core,
    ambientLight ,
);

////
//
// Window dimensions
//
////
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

////
//
// Renderer sizing and pixel ratio
//
////
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

////
//
// Post processing
//
////
const renderScene = new RenderPass(scene, camera);

//New renderer - renders after post processing
const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
composer.setSize(sizes.width, sizes.height);

//Bloom / Glow effect using UnrealBloomPass
const bloomPass = new UnrealBloomPass({
    resolution: (new THREE.Vector2(sizes.width, sizes.height)),
    threshold:0,
    strength:3,
    radius:1,
});

composer.addPass(bloomPass);

////
//
// Animation function
//
////
function animate() {
	requestAnimationFrame( animate );

	//Random number between 1 and 10
	var random = Math.ceil((Math.random()*10));

    //Outer circle movements
	large_circle.rotation.y += 0.003
    large_circle_2.rotation.x += 0.003

    //Torus movements
	torus.rotation.x += 0.006;
	torus.rotation.y += 0.006;

    torus_2.rotation.y -= 0.0045;
	torus_2.rotation.x -= 0.0045;

    //Inner mesh movements
    if(random%2==0){
        //Unpredictable movements - icosahedron
        icosahedron.rotation.x += random/3*random*0.001
        icosahedron.rotation.y += random/3*random*0.001

        //Less predictable movements - points circle
        small_circle.rotation.x -= random*0.003
        small_circle.rotation.y -= random*0.003
    }

    //Render after adding post processing 
    composer.render();
};

animate();

////
//
// Window resizing listener / Responsiveness
//
////
window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})