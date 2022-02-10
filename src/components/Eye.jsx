import React from "react";

const Eye = (props) => {
  return (
    <circle
      cx={props.eyeOffSetX}
      cy={props.eyeOffSetY}
      r={props.eyeRadius}
    ></circle>
  );
};

export default Eye;
