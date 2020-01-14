"use strict";

var scooter;

var scene = new THREE.Scene();
scene.background = new THREE.Color( '#eee' );

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

var light = new THREE.AmbientLight(0xffffff);
scene.add(light);
const light2 = new THREE.DirectionalLight('0xffffff', 0.9);
light2.position.set(-20, 0, 30);
scene.add(light2);

const  renderer = new THREE.WebGLRenderer({canvas: document.querySelector(".diagram canvas")});
// window.addEventListener('resize', function(){
//   var width = window.innerWidth;
//   var height = window.innerHeight;
//   renderer.setSize(width, height);
//   camera.aspect = width / height;
//   camera.updateProjectionMatrix();
// });

function resizeCanvasToDisplaySize() {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (canvas.width !== width ||canvas.height !== height) {
    // you must pass false here or three.js sadly fights the browser
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // set render target sizes here
  }
}

controls = new THREE.OrbitControls(camera, renderer.domElement);

const objLoader = new THREE.OBJLoader();
objLoader.setPath('/blender-files/');

const mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath('/blender-files/');

new Promise((resolve) => {
  mtlLoader.load('untitled3.mtl', (materials) => {
    resolve(materials);
  })
})
.then((materials) => {
  materials.preload();
  objLoader.setMaterials(materials);
  objLoader.load('untitled3.obj',(object) => {
    scooter = object;
    scene.add(object);
  })
});



function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
};

render();
