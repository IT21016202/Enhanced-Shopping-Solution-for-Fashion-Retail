import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShirt,
  faShoppingCart,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "../components/seller/Navbar.css";

import { useNavigate } from "react-router-dom";
import Logo from "../images/NaturaLogo.png";

export default function NavBar() {
  const navigate = useNavigate();

  const user1 = JSON.parse(localStorage.getItem("user"));
  const { logout } = useLogout();

  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  function goToProfile() {
    if (user1) {
      navigate("/userprofile");
    } else {
      navigate("/login");
    }
  }

  return (
    // <div>
    //   <nav
    //     className="navbar navbar-expand-lg navbar-dark"
    //     style={{ backgroundColor: "#21273e" }}
    //   >
    //     <a
    //       className="navbar-brand"
    //       style={{ fontSize: "35px", color: "lightyellow" }}
    //     >
    //       Natura
    //     </a>
    //     <img src={Logo} style={{ width: "50px", marginRight: "60px" }} />
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav mr-auto">
    //         <li className="nav-item active">
    //           <Link to="/">
    //             {" "}
    //             <a
    //               className="nav-link"
    //               style={{ color: "white", fontSize: "20px" }}
    //             >
    //               Home <span className="sr-only">(current)</span>
    //             </a>
    //           </Link>
    //         </li>

    //         <li
    //           className="nav-item"
    //           style={{ padding: "0", marginTop: "32px" }}
    //         >
    //           <Link to="/viewFeedback">
    //             <a style={{ color: "white", fontSize: "20px" }}>Feedbacks</a>
    //           </Link>
    //         </li>
    //       </ul>
    //       <nav style={{ marginRight: "20px" }}>
    //         {user1 && user1.user.type == "buyer" && (
    //           <div>
    //             <Link to="/cartNew">
    //               <a className="btn btn-success" style={{ color: "white" }}>
    //                 My Cart
    //               </a>
    //             </Link>
    //           </div>
    //         )}
    //         <Link
    //           to="/userprofile"
    //           style={{ color: "white", textDecoration: "none" }}
    //         >
    //           <FontAwesomeIcon icon={faUser} />
    //           {user ? (
    //             <span className="listProperty"> {user.user.firstname}</span>
    //           ) : (
    //             <p>no user</p>
    //           )}
    //         </Link>
    //       </nav>

    //       {/* <Link to="/login"><button type="button" class="btn btn-info" style={{marginRight: "10px"}}>Login</button></Link>
    //       <form className="form-inline my-2 my-lg-0">
    //       </form> */}
    //       <nav>
    //         {user && (
    //           <div>
    //             <span style={{ color: "lightcyan" }}>{user.user.email}</span>
    //             <Link to="/">
    //               <button
    //                 className="btn btn-light"
    //                 style={{ marginLeft: "10px" }}
    //                 onClick={handleClick}
    //               >
    //                 {" "}
    //                 Logout
    //               </button>
    //             </Link>
    //           </div>
    //         )}
    //         {!user && (
    //           <div>
    //             <Link to="/login">
    //               <button
    //                 type="button"
    //                 class="btn btn-light"
    //                 style={{ marginRight: "10px" }}
    //               >
    //                 Login
    //               </button>
    //             </Link>
    //             <Link to="/signup">
    //               <button type="button" class="btn btn-light">
    //                 Signup
    //               </button>
    //             </Link>
    //           </div>
    //         )}
    //       </nav>
    //     </div>
    //   </nav>
    // </div>

    <div
      className="navbar"
      style={{ backgroundColor: "#21273e", height: "65px" }}
    >
      <div className="navContainer">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <span className="logo">
            {" "}
            <FontAwesomeIcon icon={faShirt} />
          </span>
        </Link>

        {user && user.user.type == "buyer" ? (
          <div className="navItems">
            <Link
              to="/cartnew"
              style={{
                color: "white",
                textDecoration: "none",
                marginright: "15px",
              }}
            >
              <span className="logo">
                {" "}
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                />
              </span>
            </Link>

            <Link
              to="/userprofile"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <span className="logo">
                {" "}
                <FontAwesomeIcon
                  icon={faUser}
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                />
              </span>
            </Link>

            {/* <button
              className="navButton"
              onClick={handleClick}
              style={{ marginleft: "10px" }}
            >
              Logout
            </button> */}
          </div>
        ) : user && user.user.type == "seller" ? (
          <div>
            <button
              className="navButton"
              onClick={handleClick}
              style={{ marginleft: "10px" }}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
            <Link to="/signup">
              <button className="navButton">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
