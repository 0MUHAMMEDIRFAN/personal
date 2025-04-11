import React, { useEffect } from 'react';
import Scene3d from '../lib/Scene3d';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';
const Banner: React.FC = () => {
    let screen: THREE.Object3D | undefined;
    useEffect(() => {
        const bannerScene = new Scene3d('Banner3dImage', 'Banner3dParent');
        bannerScene.initialize()
        bannerScene.animate()
        bannerScene.bounceAnimate()

        const loader = new GLTFLoader();
        loader.load('../../assets/models/MacBook.glb', (gltf) => {
            console.log(gltf)
            bannerScene.loadedModel = gltf;
            const loadedModel = gltf.scene;
            screen = loadedModel.getObjectByName('Screen')
            // screen?.setRotationFromEuler(new THREE.Euler(0, 0, 0))
            const textureLoader = new THREE.TextureLoader();
            const screenTexture = textureLoader.load("../../assets/Zero-white-logo.png", (texture) => {
                texture.flipY = false;
                texture.colorSpace = THREE.SRGBColorSpace;
            })
            const material = new THREE.MeshBasicMaterial({ map: screenTexture });

            if (screen) {
                if (screen.children[3] && screen.children[3] instanceof THREE.Mesh) {
                    (screen.children[3] as THREE.Mesh).material = material;
                }
            }
            bannerScene.scene.add(loadedModel);


            // const geometry = new THREE.BoxGeometry(10, 10, 10); // Example: a cube
            // const mesh = new THREE.Mesh(geometry, material);
            // bannerScene.scene.add(mesh)

        }, () => { console.log("onProgress") }, (err) => { console.log("Error Loading", err) })



        window.addEventListener('scroll', () => {
            let scrollY = window.scrollY;
            let triggerEff = window.innerHeight / 5
            // console.log(scrollY, triggerEff)

            if (scrollY > triggerEff) {
                if (screen) {
                    gsap.to(screen.rotation, { x: 0, duration: 1, ease: "power4" });
                }
                gsap.to(bannerScene.scene.rotation, { y: 9.05, duration: 1.5, ease: "power4" });
            } else {
                if (screen) {
                    gsap.to(screen.rotation, { x: -1.775, duration: 1, ease: "power4" });
                }
                gsap.to(bannerScene.scene.rotation, { y: 0, duration: 1.5, ease: "power4" });
            }

            // let foldValue = Math.min(1.775, window.scrollY * 0.007);
            // let RotateValue = Math.min(9.05, window.scrollY * 0.03);
            // screen?.setRotationFromEuler(new THREE.Euler(-1.777 + foldValue, 0, 0))
            // bannerScene.scene.setRotationFromEuler(new THREE.Euler(0, RotateValue, 0))
            // screen.rotateX(foldValue);
        })

    }, [])
    return (

        <section className='w-full h-full sm:h-screen lg:max-h-svw min-h-96' id="">
            <div className="flex max-sm:flex-col gap-4 justify-between items-center h-full w-[min(85%,70.5rem)] m-auto">
                <div className="w-1/2 max-sm:w-full lg:w-5/12 max-sm:mt-20" id="Banner3dParent">
                    <canvas id='Banner3dImage' className='w-full h-full aspect-[7/5]' />
                    {/* <img src={undefined} alt="Image" className=" image-fluid rounded-circle p-2" /> */}
                </div>
                <div className="leading-10">
                    <h5 className='text- leading-10 font-medium'>Calicut,Kerala,India</h5>
                    <h2 className='text-4xl leading-10 font-semibold'>SOFTWARE ENGINEER</h2>
                    <h5 className='text-xl leading-10 font-medium'>Calicut,Kerala,India</h5>
                    <p>"You are the average of 5 people you hang around"
                        <span>-irfan</span>
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Banner;