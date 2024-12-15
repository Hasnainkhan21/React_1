import React from 'react';
import './Product.css';

export default function Product(props) {
  let styles = { backgroundColor: props.Price > 3000 ? "grey" : undefined };

  return (
    <div className="Product" style={styles}>
      <h3>{props.Title}</h3>
      <p>Price: {props.Price}</p>
      <ul>
        {props.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      {props.Price > 3000 && <p><b>Discount of 5%</b></p>}
    </div>
  );
}