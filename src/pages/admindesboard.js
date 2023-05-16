import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
function admindesboard() {
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  return (
    <>
      {isLoggedIn && (
        <Container>
          <Row>
            <h2>admindesboard: hola admin</h2>
          </Row>
        </Container>
      )}
    </>
  );
}

export default admindesboard;
