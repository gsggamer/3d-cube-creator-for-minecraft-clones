const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xddddff);
const camera = new THREE.PerspectiveCamera(65, WIDTH/HEIGHT, 1, 800);
camera.position.z = 4;

const ambLight = new THREE.AmbientLight(0xffffff);
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(2, 1, 2);
scene.add(pointLight, ambLight);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);