import { IcosahedronGeometry, MeshStandardMaterial, Mesh } from "../node_modules/three/build/three.module.js";

const geometry = new IcosahedronGeometry(1, 1);
const material = new MeshStandardMaterial({
    color: "#8af9ff"
})

const core = new Mesh(geometry, material);

export { core };