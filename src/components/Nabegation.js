import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { logout } from "../slices/auth";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function Nabegation() {
  const { push } = useRouter();

  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const headleDeslogarse = () => {
    dispatch(logout());
    push("/login");
  };

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {isLoggedIn && (
            <>
              <Navbar.Text> Signed in as: {user.user} </Navbar.Text>
              <Navbar.Text onClick={headleDeslogarse}>Logout</Navbar.Text>
              {user.authorities.map((a) => {
                return (
                  <Navbar.Text key={a.authority}>
                    {a.authority == "ADMIN" ? "admin" : "user"}
                  </Navbar.Text>
                );
              })}
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nabegation;
