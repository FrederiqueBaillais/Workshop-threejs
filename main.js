import * as THREE from 'https://cdn.skypack.dev/three@0.130.1';
import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/controls/OrbitControls.js';

//declarer une scene
const scene = new THREE.Scene();

//declarer le moteur de rendu 
//+ mettre le rendu du moteur de rendu en plein écran
//et l’ajouter dans la page HTML via le canvas HTML5!
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//declarer une camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

//le controle de la camera (orbitcontrol)... permet de pouvoir bouger l objet dans la scene, pas obligatoire
// const controls = new OrbitControls();

//La forme ou creer le mesh cad l 'objet (geometry, material, mesh)
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );

// const shape = new THREE.Shape();
// const x = -2.5;
// const y = -5;
// shape.moveTo(x + 2.5, y + 2.5);
// shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
// shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
// shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
// shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
// shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
// shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

// const extrudeSettings = {
//   steps: 2,  

//   depth: 2,  

//   bevelEnabled: true,  
//   bevelThickness: 1,  

//   bevelSize: 1,  

//   bevelSegments: 2,  

// };

// const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

//ajouter la forme a la scene
scene.add( cube );
// scene.add(geometry);
camera.position.z = 5;

//si on veut animer l objet ...
function animate() {
	requestAnimationFrame( animate );
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    geometry.rotation.x += 0.01;
    geometry.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();

render();

// ou juste l afficher en fixe

