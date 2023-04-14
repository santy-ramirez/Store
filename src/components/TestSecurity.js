import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import UserService from "../services/test";
import { testfun } from "../slices/test";

function TestSecurity() {
  const [content, setContent] = useState("");
  const { test } = useSelector((state) => state.test);
  console.log("desde security");
  console.log(test);

  const dispach = useDispatch();
  /* useEffect(() => {
    
  }, []); */
  const handleClick = () => {
    dispach(testfun()).then(
      (response) => {
        console.log("correct");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div>
      <h2>TestSecurity</h2>
      <div className="container">
        <header className="jumbotron">
          <h3>{test}</h3>
          <button onClick={handleClick}>change state</button>
        </header>
      </div>
    </div>
  );
}

export default TestSecurity;
