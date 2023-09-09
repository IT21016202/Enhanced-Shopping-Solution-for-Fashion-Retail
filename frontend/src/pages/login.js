import React from "react";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import image from "../images/background/subheader-dark.jpg";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
    //navigate('/home')
  };

  const divStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover", // Adjust this property as needed
    backgroundRepeat: "no-repeat", // Adjust this property as needed
  };

  return (
    <div class="no-bottom no-top" id="content">
      <div id="top"></div>

      <section
        class="full-height relative no-top no-bottom vertical-center"
        data-bgimage={image}
        data-stellar-background-ratio=".5"
      >
        <div class="overlay-gradient t50">
          <div class="center-y relative">
            <div class="container">
              <div class="row align-items-center">
                <div
                  class="col-lg-5 text-light wow fadeInRight"
                  data-wow-delay=".5s"
                >
                  <div class="spacer-10"></div>
                  <h1>Create, sell or collect digital items.</h1>
                  <p class="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua ut enim.
                  </p>
                </div>

                <div
                  class="col-lg-4 offset-lg-2 wow fadeIn"
                  data-wow-delay=".5s"
                >
                  <div
                    class="box-rounded padding40"
                    style={{ backgroundColor: "#21273e" }}
                  >
                    <h3 class="mb10">Sign In</h3>
                    <p>
                      Login using an existing account or create a new account{" "}
                      <a href="register.html">
                        here<span></span>
                      </a>
                      .
                    </p>
                    <form
                      className="login"
                      onSubmit={handleSubmit}
                      action=""
                      style={{ backgroundColor: "#21273e" }}
                    >
                      <h3>Login</h3>
                      {error && <div className="error">{error}</div>}
                      <label htmlFor="">Email</label>
                      <input
                        type="email"
                        name=""
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                      <label htmlFor="">Password</label>
                      <input
                        type="password"
                        name=""
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />

                      <button disabled={isLoading}>Login</button>

                      <br></br>
                      <br></br>

                      <div>
                        <Link className="link" to="/signup">
                          Don't have an account? <span>Sign Up</span>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default login;
