import React from 'react';

const OrderPage = ({ orderItems }) => {
  return (
    <div>
      <h2>Order</h2>
      {orderItems.length === 0 ? (
        <p>Your order is empty</p>
      ) : (
        <ul>
          {orderItems.map((burger) => (
            <li key={burger.id}>{burger.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderPage;