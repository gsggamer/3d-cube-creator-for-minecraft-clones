class Clouds {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }

    build() {
        let cloudGeo = new THREE.BoxGeometry(1, 0.6, 2);
        let cloudMat = new THREE.MeshLambertMaterial({
            color: 0xdedede,
            wireframe: false
        });
        let cloud = new THREE.Mesh(cloudGeo, cloudMat);
        scene.add(cloud);
        cloud.position.x = this.x;
        cloud.position.y = this.y;
        cloud.position.z = this.z;
    }
}