import * as THREE from 'three';
import { GLTF, OrbitControls } from 'three/examples/jsm/Addons.js';

class Scene3d {
    parentId: string;
    fov: number;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    clock: THREE.Clock;
    controls: OrbitControls;
    canvas: HTMLCanvasElement;
    loadedModel: GLTF | undefined;

    constructor(canvasId: string, parentId: string) {
        const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this.canvas = canvas;
        this.parentId = parentId;
        this.fov = 5;

        this.scene = new THREE.Scene();
        this.scene.background = null;
        this.camera = new THREE.PerspectiveCamera(this.fov, canvas.clientWidth / canvas.clientHeight, 1, 1000);

        const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
            alpha: true
        });
        this.renderer = renderer;

        this.clock = new THREE.Clock();

        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.enableZoom = false;
        // this.controls.enableRotate = false;
        // this.controls.enablePan = false;

    }

    initialize() {

        this.camera.position.z = 500;
        this.camera.position.x = -200;
        this.camera.position.y = 150;


        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

        // document.body.appendChild(this.renderer.domElement);

        document.getElementById(this.parentId)?.appendChild(this.renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
        ambientLight.castShadow = true;
        this.scene.add(ambientLight)

        const spotLight = new THREE.SpotLight(0xffffff, 1)
        spotLight.castShadow = true;
        spotLight.position.set(0, 64, 32);
        this.scene.add(spotLight)

        window.addEventListener('resize', () => this.onWindowResize(), false);
        window.addEventListener('mouseup', () => { this.onDragOut() }, false);
        window.addEventListener('touchend', () => { this.onDragOut() }, false);


    }
    animate() {
        this.controls.update()
        this.renderer.render(this.scene, this.camera);
        window.requestAnimationFrame(this.animate.bind(this));
    }
    onDragOut() {
        setTimeout(() => {
            this.camera.position.z = 500;
            this.camera.position.x = -200;
            this.camera.position.y = 150;
        }, 500);
    }
    onWindowResize() {
        const canvasParent = document.getElementById(this.parentId)
        console.log(canvasParent?.clientWidth)
        this.camera.aspect = canvasParent.clientWidth / canvasParent.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(canvasParent.clientWidth, canvasParent.clientHeight);
    }
    bounceAnimate(bounceSpeed: number = 0.06, bounceHeight: number = 0.3) {
        let direction = 1; // Controls movement direction

        const bounceMacbook = () => {
            if (this.scene) {
                this.scene.position.y += bounceSpeed * direction; // Move up/down

                // Reverse direction when reaching max/min height
                if (this.scene.position.y > 1.5 || this.scene.position.y < -1.5) {
                    direction *= -1; // Change direction
                }
            }

            window.requestAnimationFrame(bounceMacbook); // Keep animating
        }

        bounceMacbook();
    }
}

export default Scene3d;