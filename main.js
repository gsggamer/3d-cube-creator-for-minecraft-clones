const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xddddff);
const camera = new THREE.PerspectiveCamera(65, WIDTH/HEIGHT, 1, 800);
camera.position.z = 4;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);