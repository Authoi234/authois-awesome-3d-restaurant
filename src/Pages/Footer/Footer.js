import { Canvas, useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import '../../css/mainStyle.css';
import logo from '../../assets/logo.png';   

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
            geometry.attributes.position.setY(i, y + Math.sin(time + x) * 0.01);
        }
        geometry.attributes.position.needsUpdate = true;
    });

    return (
        <mesh ref={meshRef} position={[0, -2, 0]} rotation={[-Math.PI / 1.8, 0.1, 0.2]}>
            <planeGeometry args={[10, 10, 32, 32]} />
            <meshStandardMaterial color={'#eb106f'} wireframe />
        </mesh>
    );
};

const Footer = () => {
    return (
        <footer className="footer bg-transparent">
            <div className="absolute hiding">
                <Canvas style={{ width: '98.79208vw', margin: 0, padding: 0, height: '50vh', opacity: '70%' }}>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <RippleForFooter />
                </Canvas>
            </div>
            <aside className='mx-1'>
                <img className='md:w-3/4 w-full' src={logo} alt="" />
                <p className='text-xl font-medium'>
                    Authoi's Resturant
                    <br />
                    Providing servise from 2023
                </p>
                <div>
                    <p className='text-xl font-medium'>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </div>
            </aside>
            <nav>
                <h6 className="uppercase text-xl font-semibold">Services</h6>
                <a href='#' className="link text-lg hover:scale-105 cursor-pointer">Branding</a>
                <a href='#' className="link text-lg hover:scale-105 cursor-pointer">Design</a>
                <a href='#' className="link text-lg hover:scale-105 cursor-pointer">Marketing</a>
                <a href='#' className="link text-lg hover:scale-105 cursor-pointer">Advertisement</a>
            </nav>
            <nav>
                <h6 className="uppercase text-xl font-semibold">Company</h6>
                <a href='#' className="link text-lg hover:scale-105 cursor-pointer">About us</a>
                <a href='#' className="link text-lg hover:scale-105 cursor-pointer">Contact</a>
                <a href='#' className="link text-lg hover:scale-105 cursor-pointer">Jobs</a>
                <a href='#' className="link text-lg hover:scale-105 cursor-pointer">Press kit</a>
            </nav>
            <nav>
                <h6 className="uppercase text-xl font-semibold">Legal</h6>
                <a href='#' className="link text-lg hover:scale-105 cursor-pointer">Terms of use</a>
                <a href='#' className="link text-lg hover:scale-105 cursor-pointer">Privacy policy</a>
                <a href='#' className="link text-lg hover:scale-105 cursor-pointer">Cookie policy</a>
            </nav>
            <nav>
                <h6 className="ppercase text-xl font-semibold">Social</h6>
                <a className="link text-lg hover:scale-105 cursor-pointer">Twitter</a>
                <a className="link text-lg hover:scale-105 cursor-pointer">Instagram</a>
                <a className="link text-lg hover:scale-105 cursor-pointer">Facebook</a>
                <a className="link text-lg hover:scale-105 cursor-pointer">Github</a>
            </nav>
        </footer>

    );
};

export default Footer;