import React from "react";
import { Col, Container, Image, Row, Table } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Online Pizza Shop</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              amet, consequatur enim est, optio minima obcaecati delectus quo et
              asperiores nostrum mollitia modi expedita ex quas animi culpa
              facilis adipisci iusto praesentium similique dolore
              necessitatibus. Labore itaque alias, asperiores deleniti ad nisi
              minima accusamus animi est reprehenderit aspernatur eveniet eos
              molestias rem voluptates, id, culpa cupiditate earum reiciendis
              tempora quidem at deserunt! Voluptatem impedit praesentium, optio,
              eius, quam animi corporis voluptate dolor voluptates maiores
              voluptatum! Inventore ipsum voluptate minus sed, fugit non
              molestiae impedit nesciunt veniam doloribus tenetur tempore?
              Eveniet hic accusantium quidem, eligendi aut neque quisquam
              voluptatibus? Dolorum modi, ullam ex vitae atque autem qui sed
              aliquam necessitatibus quaerat reprehenderit eaque esse odit velit
              dignissimos maxime iste laborum vel assumenda neque possimus. Non
              ullam ipsum reprehenderit aspernatur eaque? Omnis quia optio
              architecto quod tenetur velit laudantium sunt officia dignissimos,
              quae doloribus quos libero, voluptatibus doloremque explicabo.
              Recusandae facilis veritatis iure accusantium tenetur officia
              molestiae quisquam alias ad. Incidunt sit consectetur ab. Magnam
              vel in a saepe incidunt voluptatum delectus praesentium, fugit
              natus et nemo animi doloribus adipisci asperiores nam quaerat.
              Unde aperiam quos eos minima aspernatur voluptates ipsa ad, quo
              optio atque necessitatibus eaque natus! Reiciendis quasi incidunt
              iure.
            </p>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning" colSpan={3}>
                    Contact Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>0185-6586-2</td>
                </tr>
                <tr>
                  <td>
                    <FaMobileAlt />
                  </td>
                  <td>Call</td>
                  <td>01988745-9+6</td>
                </tr>
                <tr>
                  <td>
                    <HiOutlineMail />
                  </td>
                  <td>E-mail</td>
                  <td>help@yourdomain.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col>
            <Image
              src="images/farmhouse.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
