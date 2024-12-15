import React from 'react';
import Product from './Product';
import Message from './MsgBox';

function App() {
  const features = ["good", "not good", "very good"];

  return (
    <>
      <Product Title="Book" Price={6700} options={features} />
      <Message username="Hasnain" textColor="Green" />
      <Product Title="Table" Price={2000} options={features} />
      <Product Title="Laptop" Price={67090} options={features} />
    </>
  );
}

export default App;
