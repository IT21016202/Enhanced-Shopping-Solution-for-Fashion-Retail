import React from "react";
import imageOne from "../images/giniraja.jpg";
import imageTwo from "../images/banyan.jpg";
import imageThree from "../images/brahmi.png";
import imageFour from "../images/disna.jpg";
import imageFive from "../images/women.jpg";

export default function HomeBottom() {
  return (
    <div>
      <h3 style={{ textAlign: "left", color: "#21273e", fontWeight: "bold" }}>
        Categories
      </h3>
      <hr />
      <br />
      <div style={{ display: "inline-flex" }}>
        <div class="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div class="nft__item">
            <div
              class="de_countdown"
              data-year="2023"
              data-month="2"
              data-day="16"
              data-hour="8"
            ></div>
            <div class="author_list_pp">
              <a
                href="author.html"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Creator: Monica Lucas"
              >
                <img class="lazy" src="images/author/author-1.jpg" alt="" />
                <i class="fa fa-check"></i>
              </a>
            </div>
            <div class="nft__item_wrap">
              <div class="nft__item_extra">
                <div class="nft__item_buttons">
                  <button onclick="location.href='item-details.html'">
                    Buy Now
                  </button>
                  <div class="nft__item_share">
                    <h4>Share</h4>
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
                      target="_blank"
                    >
                      <i class="fa fa-facebook fa-lg"></i>
                    </a>
                    <a
                      href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
                      target="_blank"
                    >
                      <i class="fa fa-twitter fa-lg"></i>
                    </a>
                    <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
                      <i class="fa fa-envelope fa-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <a href="item-details.html">
                <div class="d-placeholder"></div>
                <img
                  src="images/items/static-1.jpg"
                  class="lazy nft__item_preview"
                  alt=""
                />
              </a>
            </div>
            <div class="nft__item_info">
              <a href="item-details.html">
                <h4>Pinky Ocean</h4>
              </a>
              <div class="nft__item_click">
                <span></span>
              </div>
              <div class="nft__item_price">
                0.08 ETH<span>1/20</span>
              </div>
              <div class="nft__item_action">
                <a href="#">Place a bid</a>
              </div>
              <div class="nft__item_like">
                <i class="fa fa-heart"></i>
                <span>50</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "12rem",
            border: "1px solid black",
            borderRadius: "15px",
            marginRight: "15px",
            height: "250px",
          }}
        >
          <center>
            <img
              class="card-img-top"
              src={imageTwo}
              alt="giniraja"
              style={{ width: "130px" }}
            />
            <div class="card-body">
              <h6 class="card-title" style={{ color: "Green" }}>
                Banyan Body Cleanse
              </h6>
              <p>Rs 2000.00</p>
            </div>
          </center>
        </div>

        <div
          class="card"
          style={{
            width: "12rem",
            border: "1px solid black",
            borderRadius: "15px",
            marginRight: "15px",
            height: "250px",
          }}
        >
          <center>
            <img
              class="card-img-top"
              src={imageThree}
              alt="giniraja"
              style={{ width: "130px" }}
            />
            <div class="card-body">
              <h6 class="card-title" style={{ color: "Green" }}>
                Brahmi Memory Support
              </h6>
              <p>Rs 2500.00</p>
            </div>
          </center>
        </div>

        <div
          class="card"
          style={{
            width: "12rem",
            border: "1px solid black",
            borderRadius: "15px",
            marginRight: "15px",
            height: "250px",
          }}
        >
          <center>
            <img
              class="card-img-top"
              src={imageFour}
              alt="giniraja"
              style={{ width: "130px" }}
            />
            <div class="card-body">
              <h6 class="card-title" style={{ color: "Green" }}>
                Disna FacePack
              </h6>
              <p>Rs 1500.00</p>
            </div>
          </center>
        </div>

        <div
          class="card"
          style={{
            width: "12rem",
            border: "1px solid black",
            borderRadius: "15px",
            marginRight: "15px",
            height: "250px",
          }}
        >
          <center>
            <img
              class="card-img-top"
              src={imageFive}
              alt="giniraja"
              style={{ width: "130px" }}
            />
            <div class="card-body">
              <h6 class="card-title" style={{ color: "Green" }}>
                Brahmi Woman's Support
              </h6>
              <p>Rs 2000.00</p>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}
