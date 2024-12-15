import React from 'react';
 
export default function Message({ username, textColor }) {
  let styles = { color: textColor };
  
  return (
    <h2 style={styles}>Hello, {username}</h2>
  );
}