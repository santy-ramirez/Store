import React from "react";
import { useDispatch, useSelector } from "react-redux";

function SecundaryComponent() {
  const { test } = useSelector((state) => state.test);
  return <div>SecundaryComponent: {test} </div>
}

export default SecundaryComponent;
