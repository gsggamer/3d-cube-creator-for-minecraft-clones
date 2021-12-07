var numOfCubes = 20;

for(let i = 0; i < numOfCubes; i++) {
    let cubeCreator = new Cubes();
    cubeCreator.build();
}



function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();