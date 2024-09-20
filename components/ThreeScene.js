'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene = () => {
    const mountRef = useRef(null);
    const modelRef = useRef(null); // Ref for the model to apply rotation

    useEffect(() => {
        // Create scene, renderer, and camera
        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(150, 100);
        mountRef.current.appendChild(renderer.domElement);

        const camera = new THREE.PerspectiveCamera(50, 150 / 100, 0.1, 1000);
        camera.position.set(0, 1, 5); // Adjust camera position to properly view the model

        // Ambient light for overall scene lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Soft white light
        scene.add(ambientLight);

        // Directional light for the model
        const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // Strong white light
        directionalLight.position.set(5, 10, 5);
        directionalLight.castShadow = true; // Enable shadows if needed
        scene.add(directionalLight);

        // Point light for additional focus on the model
        const pointLight = new THREE.PointLight(0xffffff, 1.5); // Increase intensity for brightness
        pointLight.position.set(0, 5, 2); // Adjust the position of the light source
        scene.add(pointLight);

        // Orbit controls for mouse interactions
        // const controls = new OrbitControls(camera, renderer.domElement);
        // controls.enableDamping = true; // Smooth rotation and zoom
        // controls.dampingFactor = 0.05;
        // controls.screenSpacePanning = false; // Disable panning in screen space
        // controls.maxPolarAngle = Math.PI / 2; // Restrict vertical rotation
        // controls.minDistance = 2; // Minimum zoom distance
        // controls.maxDistance = 10; // Maximum zoom distance

        // Load the GLB model and set it to the modelRef
        const loader = new GLTFLoader();
        loader.load('/models/broko.glb', (gltf) => {
            const model = gltf.scene;
            modelRef.current = model; // Store the model for rotation
            model.position.set(0, 0, 0); // Adjust model position if needed
            // Scale down the model
            model.scale.set(1.1, 1.1, 1.1); // Adjust scale factor as needed
            scene.add(model);
        }, undefined, (error) => {
            console.error('Error loading model:', error);
        });

        // Animate the scene, including rotating the model
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the model around the y-axis
            if (modelRef.current) {
                modelRef.current.rotation.y += 0.01; // Adjust speed of rotation
            }

            // Update the controls
            // controls.update();

            renderer.render(scene, camera);
        };
        animate();

        // Handle window resizing
        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default ThreeScene;
