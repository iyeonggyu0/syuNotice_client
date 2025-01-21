import React from "react";
import LayOutHeader from "./header";

const MainLayOut = ({ children }) => {
  return (
    <div>
      <>
        <LayOutHeader />
        <div>{children}</div>
      </>
    </div>
  );
};
export default MainLayOut;
