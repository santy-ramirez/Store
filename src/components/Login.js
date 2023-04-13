import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { login, logout } from "../slices/auth";

const Login = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggedIn } = useSelector((state) => state.auth);
  if (isLoggedIn) {
    console.log(isLoggedIn);
  }

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const headleDeslogarse = () => {
    dispatch(logout());
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    dispatch(login({ username, password }))
      .then(() => {
        console.log("------- Login---------");
        console.log("se login");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <form onSubmit={handleLogin} ref={form}>
          <div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={onChangeUsername}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                login
              </button>
            </div>
          </div>
        </form>
        <button
          onClick={headleDeslogarse}
          className="btn btn-primary btn-block"
        >
          deslogarse
        </button>
      </div>
    </div>
  );
};

export default Login;
