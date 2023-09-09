import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function OneProduct() {
  const user = JSON.parse(localStorage.getItem("user"));

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [selectedColour, setSelectedColour] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(1);

  const colors = ["red", "blue", "yellow"];
  const Sizes = ["Small", "Medium", "Large", "XL"];

  function addToCart() {
    const userID = user.user._id;
    const productID = product._id;
    const productName = product.name;
    const price = product.price * quantity;
    const image = product.imageLink;

    const cartItem = {
      userID,
      productID,
      productName,
      price,
      image,
      size,
      selectedColour,
      quantity,
    };

    console.log(cartItem);
    axios
      .post("http://localhost:8002/cart/add", cartItem)
      .then(() => {
        window.alert("Item Added To Cart !");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    function getOncCream() {
      axios
        .get(`http://localhost:8002/product/getOne/${id}`)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getOncCream();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCart();
  };

  return (
    <div>
      {/* <table
        style={{
          marginTop: "6%",
          fontSize: "16px",
          display: "inline-block",
          textAlign: "left",
          maxWidth: "50%",
        }}
      >
        <tr style={{ height: "50px" }}>
          <th style={{ width: "200px" }}>Name : </th>
          <td>{product.name}</td>
        </tr>
        <tr style={{ height: "50px" }}>
          <th>Description : </th>
          <td>{product.description}</td>
        </tr>
        <tr style={{ height: "50px" }}>
          <th>Price : </th>
          <td>Rs. {product.price}.00</td>
        </tr>
        <tr style={{ height: "50px" }}>
          <th>Quantity : </th>

          <input
            type="number"
            id="numericInput"
            //value={numberValue}
            max={product.quantity}
            min={0}
            //onChange={handleNumberChange}
          />
        </tr>
        <tr style={{ height: "50px" }}>
          <th>Cagetory : </th>
          <td>{product.category}</td>
        </tr>
        <tr style={{ height: "50px" }}>
          <th>Cagetory : </th>
          <td>{product.category}</td>
        </tr>

        <br />
        <div>
          {user1 && user1.user.type == "buyer" && (
            <div>
              <button className="btn btn-success">Add To Cart</button>
            </div>
          )}
        </div>
      </table> */}

      <form
        style={{
          marginTop: "6%",
          fontSize: "16px",
          display: "inline-block",
          textAlign: "left",
          maxWidth: "50%",
        }}
      >
        <center>
          <h2>{product.name}</h2>
          <br />
          <label htmlFor="">{product.description}</label>
          <br />
          <h4>Rs.{(product.price * quantity).toFixed(2)}</h4>
          <br />
          <label htmlFor="">Avaliable Colours</label>
          <div
            className="colours"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {colors.map((color, index) => (
              <label
                type="text"
                key={index} // Use the index as the key
                style={{
                  backgroundColor: color,
                  borderRadius: "20px",
                  padding: "15px",
                  margin: "5px",
                }}
                onClick={() => setSelectedColour(color)} // Pass a function to onClick
              ></label>
            ))}
          </div>
          <br />
          <label htmlFor="">Avaliable Sizes</label>
          {Sizes.map((size, index) => (
            <button
              type="button"
              key={index} // Use the index as the key
              style={{
                padding: "5px",
                margin: "5px",
                backgroundColor: "black",
                color: "white",
              }}
              onClick={(e) => setSize(size)}
            >
              {size}
            </button>
          ))}
          <br />
          <label htmlFor="">Select Quantity</label>
          <input
            type="number"
            id="numericInput"
            max={product.quantity}
            min={1}
            value={quantity}
            style={{ width: "200px" }}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <button
            type="button"
            style={{ backgroundColor: "black", width: "250px" }}
            onClick={handleSubmit}
          >
            Add To Cart
          </button>
        </center>

        <br />
      </form>

      <div
        style={{
          display: "inline-block",
          float: "left",
          marginLeft: "5%",
          marginTop: "10%",
          maxWidth: "30%",
          marginRight: "5%",
        }}
      >
        <img
          src={product.imageLink}
          style={{ width: "350px", height: "300px", borderRadius: "10px" }}
        />
      </div>

      <div></div>
    </div>
  );
}
