import LeftNavbar from "@/components/LeftNavbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import PerfilAdmin from "@/components/PerfilAdmin";

function admindesboard() {
  return (
    <Container>
      <Row>
        <h2>admindesboard</h2>
        <PerfilAdmin />
      </Row>
      <Row>
        <LeftNavbar />
        <h2>hola</h2>
      </Row>
    </Container>
  );
}

export default admindesboard;
