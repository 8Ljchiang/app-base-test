import React from 'react';

export const SignUp = () => {
  return (
    <div style={{ border: '1px solid blue', padding: '10px', display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
      <h3>Sign Up</h3>
      <input type="text" placeholder="username"/>
      <input type="text" placeholder="email"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="invite token"/>
      <button>Submit</button>
    </div>
  );
}
