import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "@/slices/product";
import { Content } from "next/font/google";
import ProductSimple from "./ProductSimple";
import { Center, Wrap } from "@chakra-ui/react";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

function GetAllProducts() {
  const [datos, setDatos] = useState({});
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <Wrap>
      {products?.content.map((a, index) => (
        <div key={index}>
          <ProductSimple name={a.name} category={a.category} />
        </div>
      ))}
    </Wrap>
  );
}

export default GetAllProducts;
