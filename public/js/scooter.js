$(document).ready(function () {

  $('.trig1').on('click', function() {
    $('.box1 .ui.stacked.segment.b-shadow').fadeToggle(100);
    $('.box2 .ui.stacked.segment.b-shadow').fadeToggle(150);
    $('.box3 .ui.stacked.segment.b-shadow').fadeToggle(200);
    $('.box4 .ui.stacked.segment.b-shadow').fadeToggle(350);
    $('.box5 .ui.stacked.segment.b-shadow').fadeToggle(400);
    $('.box6 .ui.stacked.segment.b-shadow').fadeToggle(450);
    $('.box7 .ui.stacked.segment.b-shadow').fadeToggle(500);
    $('.box8 .ui.stacked.segment.b-shadow').fadeToggle(550);
    $('.box9 .ui.stacked.segment.b-shadow').fadeToggle(600);
  	});

    $('.trig1').on('click', function() {
      $('.boxs1 .ui.stacked.segment.b-shadow').fadeToggle(1000);
      $('.boxs2 .ui.stacked.segment.b-shadow').fadeToggle(1100);
      $('.boxs3 .ui.stacked.segment.b-shadow').fadeToggle(1200);
      $('.boxs4 .ui.stacked.segment.b-shadow').fadeToggle(1300);

    	});

    $('.headers').on('click', function () {
      // toggle on off for sidebar

      $('.headers').toggleClass('active');
      $('.headers').toggleClass('marg');




    });


var scooter;

var scene = new THREE.Scene();
scene.background = new THREE.Color( '#fff' );

const  camera = new THREE.PerspectiveCamera(50, 400/300, 1, 1000);
camera.position.z = 4;

const light2 = new THREE.DirectionalLight('#222', 0.9);
light2.position.set(-20, 0, 100);
scene.add(light2);
var light = new THREE.AmbientLight('#fff');
scene.add(light);

var contW = 400;
var contH = 300;




const  renderer = new THREE.WebGLRenderer({canvas: document.querySelector(".diagram canvas"),   Color: 0x000000, clearAlpha: 1});
renderer.setSize( contW, contH );
renderer.autoClear = false;



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
  // window.addEventListener('resize', function(){
  //
  //
  //   camera.aspect = contW / contH;
  //   camera.updateProjectionMatrix();
  //   renderer.setSize(contW, contH);
  // });
  requestAnimationFrame(render);
  renderer.render(scene, camera);
};

render();
});
