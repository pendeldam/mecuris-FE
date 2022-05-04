import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { API_MODELS_URI } from '../const';

function ModelList() {
    const [models, setModels] = useState([]);

    useEffect(() => {
        axios.get(`${API_MODELS_URI}`)
            .then(({ data }) => setModels(data.models))
    }, []);

    return (
        <Container>
            <ListGroup>
                <TransitionGroup className="model-list">
                    {models.map(({ _id: id, name }) => (
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem style={{ cursor: 'pointer' }}>
                                <Button
                                    onClick={() => {
                                        axios.delete(`${API_MODELS_URI}/${id}`);
                                        setModels((models) => (models.filter((model) => model._id !== id)))
                                    }}
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    style={{ marginRight: '20px' }}
                                >
                                    &times;
                                </Button>
                                <Link to={`models/${id}`}>{name}</Link>
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    );
}

export default ModelList;
