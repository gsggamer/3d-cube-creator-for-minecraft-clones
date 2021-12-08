var numOfCubes = 25;

for(let i = 0; i < numOfCubes; i++) {
    let cubeCreator = new Cubes(
        randomNum(-2, 2),
        randomNum(-2, 2),
        randomNum(-2, 2),
        0x4466ff
    );
    cubeCreator.build();
}



function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();