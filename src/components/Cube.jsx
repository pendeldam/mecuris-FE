import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshReflectorMaterial } from '@react-three/drei';

export default function Cube({ model, color, scale }) {
    const { width, height, depth } = model;
    const mesh = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        mesh.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
        mesh.current.rotation.x = Math.cos(t / 4) / 8
        mesh.current.rotation.y = Math.sin(t / 4) / 8
        mesh.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    });

    return (
        <mesh
            scale={scale}
            ref={mesh}
            rotation={[90, 0, 20]}
        >
            <boxBufferGeometry attach="geometry" args={[width, height, depth]} />
            <MeshReflectorMaterial color={color} />
        </mesh>
    );
}