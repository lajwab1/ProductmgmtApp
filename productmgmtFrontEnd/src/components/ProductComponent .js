import React, { useEffect, useState } from "react";
// import ProductService from "../ProductService ";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const ProductComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const  {id}=useParams()

  const loadProducts = async () => {
    try {
      const result = await axios.get("http://localhost:8080/products/getAllProducts");
      setProducts(result.data); // Update the state with fetched products
      console.log(result);
    } catch (error) {
      console.error("There was an error fetching the products!", error);
    }
  };
  const data = useParams();
function handleClick () {
  console.log(data)
}
   const deleteProduct=async (id)=>{
    await axios.post(`http://localhost:8080/products/delete?id=${id}`)
  
    loadProducts()
   }



  return (
    // <div className="container mt-5">
    //   <h2>Products</h2>
    //   <ul className="list-group">
    //     {products.map((product) => (
    //       <li key={product.id} classNameName="list-group-item">
    //         {product.name} - ${product.price}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
<>
    <table className="table">
      <thead>
        <tr>
          <th scope="col" style={{ fontSize: "20px" }}>
            No.
          </th>
          <th scope="col" style={{ fontSize: "20px" }}>
            ProductName
          </th>
          <th scope="col" style={{ fontSize: "20px" }}>
            ProductPrice
          </th>
          <th scope="col" style={{ fontSize: "20px" }}>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <th scope="row" style={{ fontSize: "20px" }}>
              {index + 1}
            </th>
            <td style={{ fontSize: "20px" }}>{product.name}</td>
            <td style={{ fontSize: "20px" }}>{product.price}</td>
            <td>
              <Link className="btn btn-primary mx-2" to={`/view/${product.id}`}>view</Link>
              <Link className="btn btn-outline-primary mx-2" to={`/edit/${product.id}`}> Edit</Link>
              <button className="btn btn-danger mx-2"
               
               onClick={()=>deleteProduct(product.id)}
              
              
              >delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
      <div style={{textAlign:"center"}}>
      <Link className="btn btn-primary mx-2" style={{ fontSize: "20px", }} to="/addProduct">AddProduct
      </Link>
      </div>
      </>
  );
};

export default ProductComponent;
