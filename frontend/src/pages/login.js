import React from "react";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import image from "../images/background/loginimage.jpg";

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
    <div id="wrapper">
      <div class="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          class="full-height relative no-top no-bottom vertical-center"
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
                    <div>
                      <img
                        src={image}
                        alt="My Image"
                        width={600}
                        height={600}
                      />
                    </div>
                  </div>

                  <div
                    class="col-lg-4 offset-lg-2 wow fadeIn"
                    data-wow-delay=".5s"
                  >
                    <div
                      class="box-rounded padding40"
                      style={{ backgroundColor: "#21273e" }}
                    >
                      <form
                        className="login"
                        onSubmit={handleSubmit}
                        action=""
                        style={{ backgroundColor: "#21273e" }}
                      >
                        <br />
                        <h3 class="mb10" style={{ color: "white" }}>
                          Sign In
                        </h3>
                        <br />

                        {error && <div className="error">{error}</div>}

                        <input
                          type="email"
                          name=""
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="username or email"
                          value={email}
                        />

                        <input
                          type="password"
                          name=""
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          placeholder="password"
                        />

                        <button
                          disabled={isLoading}
                          style={{ backgroundColor: "#7367ef" }}
                        >
                          Login
                        </button>

                        <br></br>
                        <br></br>

                        <div>
                          <p style={{ color: "white" }}>
                            Don't have an account?
                            <Link className="link" to="/signup">
                              <span style={{ color: "#7367ef" }}> Sign Up</span>
                            </Link>
                          </p>
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
    </div>
  );
};

export default login;
