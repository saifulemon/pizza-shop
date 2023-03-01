import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const Pizza = ({ pizza }) => {
  const [variant, setVarient] = useState('small');
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pizza.image} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <hr />
          <Card.Text>
            <Row>
                <Col md={6}>
                    <h6>Varients</h6>
                    <select value={variant} onChange={e => setVarient(e.target.value)}>
                        {pizza.varients.map((variant) =>(
                            <option>{variant}</option>
                        ))}
                    </select>
                </Col>
                <Col md={6}>
                    <h6>Quantity</h6>
                    <select value={quantity} onChange={e => setQuantity(e.target.value)}>
                        {[...Array(10).keys()].map((v,i) =>(
                            <option value={i+1}>{i + 1}</option>
                        ))}
                    </select>
                </Col>
            </Row>
          </Card.Text>
              <Row>
                <Col md={6}>
                  <h6>Price: {pizza.prices[0][variant] * quantity}$</h6>
                </Col>
                <Col md={6}>
                  <Button className="bg-success text-white btn-sm">Buy Now</Button>
                </Col>
              </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Pizza;
