import React from "react";
export function Header({children}) {
  return (
    <div style={{ marginBottom: 10 }}>
      <h1> 
        {children}
      </h1>
    </div>
  );
};
