import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function ViewProduct() {

    const [product,setProduct]=useState({
        name:"",
        price:""
    })

    const {id}=useParams();

    useEffect(()=>{
     loadProduct()
    },[])

    const loadProduct=async()=>{
        const result=await axios.get(`http://localhost:8080/products/findById?id=${id}`)
        setProduct(result.data)
    }

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-md-8 border rounded p-4 shadow-lg" style={{ backgroundColor: "whitesmoke" }}>
          <h2 className="text-center mb-4" style={{ color: "#333" }}>PRODUCT DETAILS</h2>

          <div className="card mb-3">
            <div className="card-header bg-primary text-white"  style={{fontSize:"20px"}} >
              Details of product:
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b style={{fontSize:"20px"}}>Name:  </b> 
                 <span style={{fontSize: "20px"}}>{product.name}</span>
              </li>
              <li className="list-group-item">
                <b style={{fontSize:"20px"}}>Price:  </b>
                 <span style={{fontSize: "20px"}}>{product.price}</span>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-center">
            <Link className="btn btn-primary" to="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct