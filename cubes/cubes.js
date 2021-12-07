class Cubes {
    constructor(x, y, z, color) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.color = color;
    }

    build() {
        let cubeGeo = new THREE.BoxGeometry();
        let cubeMat = new THREE.MeshBasicMaterial({color: this.color, wireframe: false});
        let cube = new THREE.Mesh(cubeGeo, cubeMat);
        scene.add(cube);
    }
}