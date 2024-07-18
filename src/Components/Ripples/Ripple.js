import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Earth from './Earth';

const Ripple = () => {
    return (
        <div className='h-full my-10 flex justify-center items-center'>
            <Canvas style={{ width: '50vw', height: '90vh' }} >
                <pointLight position={[50, 10, 10]} intensity={1.5} />
                <ambientLight intensity={2} />
                <Earth />
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
};

export default Ripple;