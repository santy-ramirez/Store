import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { login } from "../slices/auth";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const { push } = useRouter();

  const { isLoggedIn, user } = useSelector((state) => state.auth);
  if (isLoggedIn) {
    console.log(isLoggedIn);
    console.log(user);
  }
  useEffect(() => {
    if (isLoggedIn) {
      push("/admindesboard");
    }
  }, [isLoggedIn]);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    const { username, password } = data;
    dispatch(login({ username, password }))
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="col-md-4">
      {!isLoggedIn && (
        <div className="card card-container p-3">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  {...register("username")}
                  type="text"
                  className="form-control"
                  name="username"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  {...register("password")}
                  type="password"
                  className="form-control"
                  name="password"
                />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  login
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
