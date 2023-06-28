import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, deleteProduct } from "@/slices/product";
import { addCard } from "../slices/product";
import ProductSimple from "./ProductSimple";
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Select,
  Stack,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Pagination } from "react-bootstrap";
const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

function GetAllProducts() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { products } = useSelector((state) => state.product);
  const [pageNo, setPageNo] = useState("1");
  const [sortDir, setSorDir] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");
  const [deleted, setDeleted] = useState(false);

  const dispatch = useDispatch();

  const { cardPay } = useSelector((state) => state.product);
  const { productDeleted } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProducts({ sortDir, pageNo, orderBy }));
  }, [pageNo, sortDir, deleted]);
  console.log(products);
  console.log(cardPay);
  console.log(productDeleted);

  const onSubmit = (data) => {
    console.log(data);
    const { sortDir, orderBy } = data;
    dispatch(getAllProducts({ sortDir, orderBy }));
    setSorDir(setSorDir);
    setOrderBy(orderBy);
  };
  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct({ id })).then((r) => {
      setDeleted(true);
    });
    setDeleted(false);
  };
  const handleAddCard = (p) => {
    dispatch(addCard(p));
  };

  const totalpages = products ? products.totalPages : 0;

  let active = pageNo;
  let items = [];
  for (let number = 1; number <= totalpages; number++) {
    items.push(
      <Pagination.Item
        onClick={() => setPageNo(number)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <VStack>
        <FormControl onSubmit={handleSubmit(onSubmit)} as="form">
          <FormLabel as="legend">Filter and serach products</FormLabel>
          <Stack spacing="24px">
            <Select
              name="sortDir"
              {...register("sortDir")}
              placeholder="Ordenar de manera desc or asc"
            >
              <option value="asc">asc</option>
              <option value="desc">desc </option>
            </Select>
            <Select
              name="orderBy"
              {...register("orderBy")}
              placeholder="Order By"
            >
              <option value="name">name</option>
              <option value="id">id </option>
            </Select>
          </Stack>
          <Button type="submit" colorScheme="blue">
            Filtrar y buscar
          </Button>
        </FormControl>
        <Wrap>
          {products?.content.map((a, index) => {
            return (
              <div key={index}>
                <ProductSimple
                  name={a.name}
                  category={a.category}
                  IMAGE={a.image}
                  deleProduct={() => handleDeleteProduct(a.id)}
                  addCard={() => handleAddCard(a)}
                />
              </div>
            );
          })}
        </Wrap>
        <Pagination size="lg">
          <Pagination.First onClick={() => setPageNo(1)} />
          {pageNo != 1 ? (
            <Pagination.Prev onClick={() => setPageNo(pageNo - 1)} />
          ) : (
            <Pagination.Prev disabled />
          )}
          {items}
          {pageNo - totalpages != 0 ? (
            <Pagination.Next onClick={() => setPageNo(pageNo + 1)} />
          ) : (
            <Pagination.Next disabled />
          )}
          <Pagination.Last onClick={() => setPageNo(totalpages)} />
        </Pagination>
      </VStack>
    </>
  );
}

export default GetAllProducts;
