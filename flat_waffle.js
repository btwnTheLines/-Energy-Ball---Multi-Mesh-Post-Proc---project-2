//Scene Setting
const scene = new THREE.Scene();

//Camera
import { camera } from "./flat_waffle_files/camera.js"

//Renderer
import { renderer } from "./flat_waffle_files/renderer.js"

//Add renderer to body
document.body.appendChild( renderer.domElement );

//Geometry + Material + Mesh
import { cube } from "./flat_waffle_files/geometry.js"

//Lights
const ambientLight = new THREE.AmbientLight( '#ffffcc', 1 );
const pointLight = new THREE.PointLight('#ffffcc', 1);
//Scene Setting
scene.add( cube );
scene.add( ambientLight );
scene.add( pointLight );

//Animation function
function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.005;
	cube.rotation.y += 0.005;

	renderer.render( scene, camera );
};

animate();