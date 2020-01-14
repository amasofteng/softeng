var scooter;

var scene = new THREE.Scene();
scene.background = new THREE.Color( 'rgba(240,240,240,0.5)' );

const  camera = new THREE.PerspectiveCamera(70, 2, 1, 1000);
camera.position.z = 4;

const light2 = new THREE.DirectionalLight('#000', 0.9);
light2.position.set(-20, 0, 100);
scene.add(light2);
var light = new THREE.AmbientLight('#fff');
scene.add(light);

var contW = 400;
var contH = 300;
const  renderer = new THREE.WebGLRenderer({canvas: document.querySelector(".diagram canvas"),   Color: 0x000000, clearAlpha: 1});
renderer.setSize( contW, contH );
renderer.autoClear = false;

// window.addEventListener('resize', function(){
//   var width = window.innerWidth;
//   var height = window.innerHeight;
//   renderer.setSize(width, height);
//   camera.aspect = width / height;
//   camera.updateProjectionMatrix();
// });

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
