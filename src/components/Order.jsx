import React from 'react';
import './Order.css';

const Order = () => {
  const order= JSON.parse(localStorage.getItem("order"));
  return (
    <div className="container">
    {order ?  <div className="orderContainer">
    <p>Lettuce: {order.lettuce}</p>
    <p>Bacon: {order.bacon}</p>
    <p>Meat: {order.meat}</p>
    <p>Cheese: {order.cheese}</p>
    <p>Total: {order.total}$</p>
    </div> : <h2>No Orders</h2>}


    </div>
  )
}

export default Order
