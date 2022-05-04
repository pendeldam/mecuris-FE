import axios from 'axios';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import { Container, Label, Button, Form, Input } from 'reactstrap';
import { API_MODELS_URI } from '../const';

export default function MainCanvas() {
    const { id } = useParams();

    const [data, setData] = useState({ model: null });
    const [color, setColor] = useState({ color: null });

    const handleColorChange = (e, color) => {
        e.preventDefault();
        setColor(color);
        setData((data) => ({ ...data, color }));
    };

    useEffect(() => {
        axios.get(`${API_MODELS_URI}/${id}`)
            .then(({ data }) => {
                setData(data.model);
                setColor(data.model.color);
            });
    }, [id]);

    const Model = lazy(() => import(`./${data.name}`));

    return (
        <Container>
            <Form>
                <Label>color
                    <Input
                        type="color"
                        name="color"
                        value={color}
                        onChange={(e) => handleColorChange(e, e.target.value)}
                    />
                </Label>
                <Button style={{ marginLeft: '20px' }}
                    onClick={(e) => {
                        e.preventDefault();
                        axios.patch(`${API_MODELS_URI}/${data._id}`, data);
                    }}
                >save</Button>
            </Form>
            <Canvas style={{ height: '600px', marginTop: '100px' }}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.25} />
                <Suspense fallback={null}>
                    <Model color={color} model={data} />
                    <Environment preset="city" />
                    <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                </Suspense>
            </Canvas>
        </Container>
    );
}
