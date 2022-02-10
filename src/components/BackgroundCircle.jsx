import React from "react";

const BackgroundCircle = (props) => {
    return(
        <circle
          r={props.radius}
          fill="yellow"
          stroke="black"
          stroke-width={props.strokeWidth}
        ></circle>
    )
}

export default BackgroundCircle;