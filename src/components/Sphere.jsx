import React from 'react';
import { MeshReflectorMaterial, Sphere } from '@react-three/drei';

export default function AnimatedSphere({ model, color, scale }) {
    const { widthSegments, heightSegments, radius } = model;
    
    return (
        <Sphere visible args={[radius, widthSegments, heightSegments]} scale={scale}>
            <MeshReflectorMaterial
                color={color}
                attach="material"
                roughness={0}
            />
        </Sphere>
    );
}
