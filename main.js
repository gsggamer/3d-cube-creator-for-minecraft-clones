var numOfCubes = 25;
var numOfClouds = 15;

for(let i = 0; i < numOfCubes; i++) {
    let cubeCreator = new Cubes(
        randomNum(-2, 2),
        randomNum(-2, 2),
        randomNum(-2, 2),
        0x4466ff
    );
    cubeCreator.build();
}

for(let i = 0; i < numOfClouds; i++) {
    let cloudCreator = new Clouds(
        randomNum(-6, 6),
        randomNum(4, 5),
        randomNum(-1, -5),
    );
    cloudCreator.build();
}



function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();