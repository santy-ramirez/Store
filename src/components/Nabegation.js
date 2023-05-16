import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { logout } from "../slices/auth";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

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
        <Link href="/">
          <Navbar.Brand>Store</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {isLoggedIn && (
            <>
              {user.authorities.map((a) => {
                return (
                  <Link
                    key={a.authority}
                    href={
                      a.authority == "ADMIN"
                        ? "/admindesboard"
                        : "/userdesboard"
                    }
                  >
                    <Navbar.Text>ir al desboard </Navbar.Text>
                  </Link>
                );
              })}
              <Navbar.Text>
                Signed in as
                {user.authorities.map((a) => {
                  return (
                    <Navbar.Text key={a.authority}>
                      {a.authority == "ADMIN" ? " admin" : " user"}
                    </Navbar.Text>
                  );
                })}
                : {user.user}{" "}
              </Navbar.Text>
              <Navbar.Text onClick={headleDeslogarse}>Logout</Navbar.Text>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nabegation;
