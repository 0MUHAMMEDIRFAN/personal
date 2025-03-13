import React, { useEffect } from 'react';
import Scene3d from '../lib/Scene3d';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
const Banner: React.FC = () => {
    let screen: THREE.Object3D;
    useEffect(() => {
        const bannerScene = new Scene3d('Banner3dImage', 'Banner3dParent');
        bannerScene.initialize()
        bannerScene.animate()
        bannerScene.bounceAnimate()

        const loader = new GLTFLoader();
        loader.load('../../assets/models/MacBook10.glb', (gltf) => {
            bannerScene.loadedModel = gltf;
            // console.log(gltf)
            bannerScene.scene.add(gltf.scene);

            screen = gltf.scene.getObjectByName('Screen')
            // screen?.setRotationFromEuler(new THREE.Euler(0, 0, 0))

            const textureLoader = new THREE.TextureLoader();
            const screenTexture = textureLoader.load("../../assets/hexagon-bg.png")
            screen.material = new THREE.MeshBasicMaterial({ map: screenTexture });

        }, () => { console.log("onProgress") }, (err) => { console.log("Error Loading", err) })

        window.addEventListener('scroll', () => {
            let foldValue = Math.min(1.775, window.scrollY * 0.007);
            let RotateValue = Math.min(9.05, window.scrollY * 0.03);

            screen?.setRotationFromEuler(new THREE.Euler(-1.777 + foldValue, 0, 0))
            bannerScene.scene.setRotationFromEuler(new THREE.Euler(0, RotateValue, 0))
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