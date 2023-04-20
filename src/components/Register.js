import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { signUp } from "@/slices/auth";
import { useRouter } from "next/router";

const Register = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = (data) => {
    const { username, password, email } = data;
    const authoritie = 1;

    dispatch(signUp({ username, password, email, authoritie }))
      .then((r) => {
        console.log("---del respuesta----");
        console.log(r);
        router.push("./login");
      })
      .catch((ee) => {
        console.log(ee);
      });
  };

  console.log(watch());
  console.log(errors);

  return (
    <div className="col-md-4 ">
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
                defaultValue="user"
                {...register("username")}
                type="text"
                className="form-control"
                name="username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                {...register("email", {
                  required: true,
                })}
                type="text"
                className="form-control"
                name="email"
              />

              {errors.email && (
                <div className="alert alert-danger" role="alert">
                  este campo es requerido!
                </div>
              )}
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
              <br />
              <button type="submit" className="btn btn-primary btn-block">
                Registrarme
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
