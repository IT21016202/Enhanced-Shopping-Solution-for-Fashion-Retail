import React from "react";
import { useState } from "react";
import "../buyer/profile.css";

function BuyerProfile() {
  const [active, setActive] = useState("profile");

  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <div className="listcontainer">
        <div className="titles">
          <h2 style={{ color: "#003580", fontWeight: "bolder" }}>
            Welcome Back ,{user.user.firstname}{" "}
          </h2>
        </div>
        <div className="listingNav">
          <>
            {
              <button onClick={() => setActive("profile")}>
                <label className="addListBtn">My Profile</label>
              </button>
            }

            {
              <button onClick={() => setActive("reservation")}>
                <label className="addListBtn">View Order History</label>
              </button>
            }
          </>
        </div>
        <br />
        <br />
        <br />
        {/* {active === "profile" && <UserDetails />}
        {active === "reservation" && <UserBookings />} */}
      </div>
    </div>
  );
}

export default BuyerProfile;
