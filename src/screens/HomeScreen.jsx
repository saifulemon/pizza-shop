import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Pizza from '../components/Pizza';
import AllPizza from '../pizza-data';

const HomeScreen = () => {
    return (
        <>
            <Container>
                <Row>
                    {AllPizza.map(pizza => (
                        <Col md={4}>
                            <Pizza pizza={pizza} />
                        </Col>
                    )) }
                </Row>
            </Container>
        </>
    );
};

export default HomeScreen;