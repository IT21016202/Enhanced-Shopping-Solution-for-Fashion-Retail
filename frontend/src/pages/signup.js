import React from "react";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";
import image from "../images/background/register.jpg";

const signup = () => {
  const [firstname, setfName] = useState("");
  // const [lastname, setlName] = useState("");
  // const [mobilenumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setCpassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const [type, setType] = useState("buyer");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //setType("buyer");

    await signup(firstname, type, email, password, confirmpassword);
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
                          Sign Up
                        </h3>
                        <br />

                        {error && <div className="error">{error}</div>}

                        <input
                          type="text"
                          name=""
                          onChange={(e) => setfName(e.target.value)}
                          value={firstname}
                          placeholder="Enter your name"
                        />

                        <input
                          type="email"
                          name=""
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          placeholder="Enter your email address"
                        />

                        <input
                          type="password"
                          name=""
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          placeholder="Enter your password"
                        />

                        <input
                          type="password"
                          name=""
                          onChange={(e) => setCpassword(e.target.value)}
                          value={confirmpassword}
                          placeholder="Re enter your password"
                        />

                        <button
                          disabled={isLoading}
                          style={{ backgroundColor: "#7367ef" }}
                        >
                          Register
                        </button>

                        <br></br>
                        <br></br>

                        <div>
                          <p style={{ color: "white" }}>
                            Already registered ?
                            <Link className="link" to="/login">
                              <span style={{ color: "#7367ef" }}> Sign In</span>
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

export default signup;
