class Cubes {
    constructor(x = 0, y = 0, z = 0, color = 0xfff444) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.color = color;
    }

    build() {
        let cubeGeo = new THREE.BoxGeometry();
        let cubeMat = new THREE.MeshLambertMaterial({color: this.color, wireframe: false});
        let cube = new THREE.Mesh(cubeGeo, cubeMat);
        scene.add(cube);
        cube.position.x = this.x;
        cube.position.y = this.y;
        cube.position.z = this.z;
    }
}