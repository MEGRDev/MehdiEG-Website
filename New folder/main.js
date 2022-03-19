import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';



THREE.Cache.enabled = true;

// Setup

function onWindowResize() {

camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize( window.innerWidth, window.innerHeight );

}

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Torus

const geometry = new THREE.TorusGeometry(40, 1, 10, 100)
const material= new THREE.MeshStandardMaterial({color: 0xA9A9A9, wireframe:true});
const torus = new THREE.Mesh(geometry,material);


// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

// Background

const blackTexture = new THREE.TextureLoader().load('images/milkyway.jpg');
scene.background = blackTexture; 



//Planet loaders
const deathstarTexture= new THREE.TextureLoader().load('images/deathstar.webp');
const earthTexture= new THREE.TextureLoader().load('images/earthday.jpg');
const moonTexture = new THREE.TextureLoader().load('images/moon.jpg');
const normalTexture= new THREE.TextureLoader().load('images/normal.jpg');
const marsTexture = new THREE.TextureLoader().load('images/mars.jpg');
const neptuneTexture = new THREE.TextureLoader().load('images/neptune.jpg');
const sunTexture = new THREE.TextureLoader().load('images/sun.jpg');
const venusTexture= new THREE.TextureLoader().load('images/venus.jpg');
const mercuryTexture = new THREE.TextureLoader().load('images/mercury.jpg');
const saturnTexture= new THREE.TextureLoader().load('images/saturn.jpg');
const uranusTexture = new THREE.TextureLoader().load('images/uranus.jpg');
const jupiterTexture = new THREE.TextureLoader().load('images/jupiter.jpg');

const sun = new THREE.Mesh(
    new THREE.SphereGeometry(30, 640, 640),
    new THREE.MeshStandardMaterial( {
      map: sunTexture,
      normalMap: normalTexture
    })
  );
  const deathstar = new THREE.Mesh(
    new THREE.SphereGeometry(3, 64, 64),
    new THREE.MeshStandardMaterial( {
      map: deathstarTexture,
      normalMap: normalTexture
    })
  );
  const mercury = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial( {
      map: mercuryTexture,
      normalMap: normalTexture
    })
  );
  
  const venus = new THREE.Mesh(
    new THREE.SphereGeometry(6, 64, 64),
    new THREE.MeshStandardMaterial( {
      map: venusTexture,
      normalMap: normalTexture
    })
  );
  
  const earth = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshBasicMaterial( { map: earthTexture})
  );
  
  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(1, 11, 11),
    new THREE.MeshStandardMaterial( {
      map: moonTexture,
      normalMap: normalTexture
    })
  );
  
  const mars = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial( {
      map: marsTexture,
      normalMap: normalTexture
    })
  );
  
  const jupiter = new THREE.Mesh(
    new THREE.SphereGeometry(6, 64, 32),
    new THREE.MeshStandardMaterial( {
      map: jupiterTexture,
      normalMap: normalTexture
    })
  );
  
  const saturn = new THREE.Mesh(
    new THREE.SphereGeometry(6, 64, 32),
    new THREE.MeshStandardMaterial( {
      map: saturnTexture,
      normalMap: normalTexture
    })
  );
  
  
  
  
  const saturnring = new THREE.Mesh(
    new THREE.TorusGeometry(10, 1, 2, 100),
    //something diameter lines.in.torus smoothness
    new THREE.MeshStandardMaterial( {
      color:0xF5F5DC,
      normalMap: normalTexture
    })
  );
  
  saturnring.rotation.x =100;
  saturnring.rotation.y =100;
  saturnring.rotation.z =100;
  
  const uranus = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial( {
      map: uranusTexture,
      normalMap: normalTexture
    })
  );
  
  const neptune = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial( {
      map: neptuneTexture,
      normalMap: normalTexture
    })
  );

  //Planet Positions



deathstar.position.z =-20;
deathstar.position.setX(20);

sun.position.z=-70;
sun.position.setX(0);


mercury.position.z =-20;
mercury.position.setX(30);


venus.position.z =-10;
venus.position.setX(-20);

earth.position.z=5;
earth.position.setX(10);


moon.position.z=10;
moon.position.setX(10);


mars.position.z=(20);
mars.position.setX(-10);

jupiter.position.z=25;

jupiter.position.setX(7);

saturn.position.z=45;

saturn.position.setX(-20);

saturnring.position.z=45;
saturnring.position.setX(-20);
torus.position.z=-70;
torus.position.setX(0);

uranus.position.z=40;

uranus.position.setX(-10);

neptune.position.z=50;

neptune.position.setX(10);

// Add Planets




// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.001;
  torus.rotation.y += 0.0005;
  torus.rotation.z += 0.001;

  jupiter.rotation.x+=0.001;
  jupiter.rotation.y+=0.0005
  jupiter.rotation.z+=0.001

  earth.rotation.x += 0.001;
  earth.rotation.y += 0.0005;
  earth.rotation.z += 0.001;

  mars.rotation.x += 0.001;
  mars.rotation.y += 0.0005;
  mars.rotation.z += 0.001;

  mercury.rotation.x += 0.001;
  mercury.rotation.y += 0.0005;
  mercury.rotation.z += 0.001;

  saturn.rotation.x += 0.001;
  saturn.rotation.y += 0.0005;
  saturn.rotation.z += 0.001;
  
  venus.rotation.x += 0.001;
  venus.rotation.y += 0.0005;
  venus.rotation.z += 0.001;

  saturnring.rotation.z+=0.001;
  saturnring.rotation.y+=0.001;

  
  deathstar.rotation.x += 0.001;
  deathstar.rotation.y += 0.0005;
  deathstar.rotation.z += 0.001;

  uranus.rotation.x += 0.001;
  uranus.rotation.y += 0.0005;
  uranus.rotation.z += 0.001;

  sun.rotation.x += 0.0004;

  // controls.update();

  renderer.render(scene, camera);
}

animate();

scene.add(sun,deathstar, mercury, venus, earth, moon, mars, jupiter, saturn, uranus, neptune, saturnring, torus)

onWindowResize();
