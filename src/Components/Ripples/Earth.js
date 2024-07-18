import React, { useRef } from 'react';
import * as THREE from 'three';
import circleImg from '../../assets/earthRealTexture.jpg';
import { useFrame, useLoader } from '@react-three/fiber';

const Earth = () => {
    const imgTex = useLoader(THREE.TextureLoader, circleImg);

    const earthRef = useRef();

    // Rotate the Earth
    useFrame(({ clock }) => {
      earthRef.current.rotation.y = clock.getElapsedTime() / 3;
    });

    return (
        <mesh ref={earthRef}>
            <sphereGeometry args={[2.2, 32, 32]} />
            <meshStandardMaterial
                map={imgTex}
                normalMap={imgTex}
            />
        </mesh>
    );
};

export default Earth;