import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addProduct } from "@/slices/product";
import { useRouter } from "next/router";
import Link from "next/link";

function AddProduct() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { product } = useSelector((state) => state.product);
  console.log(product);
  const onSubmit = (data) => {
    const { name, category, image, price, description } = data;
    console.log(data);
    dispatch(addProduct({ name, category, image, price, description }))
      .then((r) => console.log(r))
      .catch((ee) => {
        console.log(ee);
      });
  };
  return (
    <div className="col-md-4 ">
      <div> {product.name} </div>
      <div> {product.price} </div>
      <div className="card card-container p-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="form-group">
              <label htmlFor="username">name product</label>
              <input
                {...register("name")}
                type="text"
                className="form-control"
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">category</label>
              <input
                {...register("category", {
                  required: true,
                })}
                type="text"
                className="form-control"
                name="category"
              />
            </div>

            <div className="form-group">
              <label htmlFor="image">url image</label>
              <input
                {...register("image")}
                type="text"
                className="form-control"
                name="image"
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">price</label>
              <input
                {...register("price")}
                type="number"
                className="form-control"
                name="price"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">description</label>
              <input
                {...register("description")}
                type="text"
                className="form-control"
                name="description"
              />
            </div>

            <div className="form-group">
              <br />
              <button type="submit" className="btn btn-primary btn-block">
                save product
              </button>
            </div>
          </div>
        </form>
        <Link href="/login">login</Link>
      </div>
    </div>
  );
}

export default AddProduct;
