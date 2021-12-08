var numOfCubes = 20;

for(let i = 0; i < numOfCubes; i++) {
    let cubeCreator = new Cubes(
        randomNum(-2, 2),
        randomNum(-2, 2),
        randomNum(-2, 2)
    );
    cubeCreator.build();
}



function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();