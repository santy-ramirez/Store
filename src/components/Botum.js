import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/auth";
function Botum() {
  const { push } = useRouter();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const headleDeslogarse = () => {
    dispatch(logout());
    push("/login");
  };
  return (
    <>
      {isLoggedIn && (
        <button
          onClick={headleDeslogarse}
          className="btn btn-primary btn-block"
        >
          Logout
        </button>
      )}
    </>
  );
}

export default Botum;
