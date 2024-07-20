import React, { useEffect, useState } from "react";
import OrderService from "../OrderService";
import "bootstrap/dist/css/bootstrap.min.css";

const OrderComponent = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    OrderService.getAllOrders().then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <h2>Orders</h2>
      <ul className="list-group">
        {orders.map((order) => (
          <li key={order.id} className="list-group-item">
            {order.product} - {order.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderComponent;
