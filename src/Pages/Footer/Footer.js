import { Canvas, useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three'

const RippleForFooter = () => {
    const meshRef = useRef();
    const clock = new THREE.Clock();

    useFrame(() => {
        if (!meshRef.current) return;

        const { geometry } = meshRef.current;
        const count = geometry.attributes.position.count;
        const time = clock.getElapsedTime();

        for (let i = 0; i < count; i++) {
            const y = geometry.attributes.position.getY(i);
            const x = geometry.attributes.position.getX(i);
            geometry.attributes.position.setY(i, y + Math.sin(time + x) * 0.02);
        }
        geometry.attributes.position.needsUpdate = true;
    });

    return (
        <mesh ref={meshRef} position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[10, 10, 32, 32]} />
            <meshStandardMaterial color={'#eb106f'} wireframe />
        </mesh>
    );
};

const Footer = () => {
    return (
        <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <RippleForFooter />
        </Canvas>
    );
};

export default Footer;