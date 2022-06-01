import React from 'react';

const ErrorMessage = ({ children }) => {
    return (
      <div style={{ background:'orange', color: 'Black', padding:"4px"}}>
          {children}
      </div>
    );
};

export default ErrorMessage;