import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function EditProduct() {
  let navigate = useNavigate();

  const {id} = useParams();
  const [product, setProduct] = useState({
    name: "",
    price: "",
  });

  const { name, price } = product;

  const onInputChange = (e) => {
    console.log(e.target.name)
    setProduct({...product, [e.target.name]: e.target.value});
  };

  useEffect(()=>{
    loadProduct();
  },[])

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/products/edit?id=${id}`, product);
    navigate("/");
  };


  const loadProduct=async()=>{
    const result=await axios.get(`http://localhost:8080/products/findById?id=${id}`)

    console.log(result);
    setProduct(result.data)
  }

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-6 offset-md-3 border rounded p-2 mt-2 shadow"
          style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "aquamarine" }}
        >
          {" "}
          <h2 className="text-centre m-4">Edit PRODUCTS</h2>
        </div>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div>
              <label>
                <span style={{ fontSize: "200%" }}> ProductName</span>
              </label>
            </div>

            <div style={{ margin: "5px" }}>
              <input
                type={"text"}
                className="form-control"
                placeholder="enter the product name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
                style={{ width: "400px" }}
              />
            </div>

            <div style={{ margin: "5px" }}>
              <input
                type={"text"}
                className="form-control"
                placeholder="enter the product price"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
                style={{ width: "400px" }}
              />
            </div>
            <div>
              <button type="submit" style={{ margin: "5px" }} className="btn btn-outline-primary">
                Submit
              </button>
              <Link style={{ margin: "5px" }} className="btn btn-outline-danger mx-2" to="/">
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
