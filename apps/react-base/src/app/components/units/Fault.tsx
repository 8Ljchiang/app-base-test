import React from 'react';

export const FaultComponent = (props) => {
  throw new Error('Test error from Fault Component');
  return (
    <p>Fault Component</p>
  );
}
