import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addProduct } from "@/slices/product";
import { useRouter } from "next/router";
import Link from "next/link";

function AddProduct() {
  const [url, setUrl] = useState("");
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
    dispatch(addProduct({ name, category, image: url, price, description }))
      .then((r) => console.log(r))
      .catch((ee) => {
        console.log(ee);
      });
  };

  async function uploadFile(event) {
    console.log(event.target.files[0]);
    const selectedImage = event.target.files[0];

    const data = new FormData();
    data.append("image", selectedImage);
    const urlimg = `https://api.imgbb.com/1/upload?key=daa256a504894888d9f32fea731c2be8`;
    const upload = await fetch(urlimg, {
      method: "POST",
      body: data,
    })
      .then((r) => r.json())
      .then((r) => setUrl(r.data.url));

    return upload?.data?.url;
  }
  return (
    <div className="col-md-4 ">
      {url && <img width="50px" src={url} />}
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
              <label htmlFor="category">image</label>
              <input
                {...register("image")}
                type="file"
                name="myImage"
                onChange={uploadFile}
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
