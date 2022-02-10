import React from "react";

const Nose = (props) => {
    return(
        <line
            x1={props.x1}
            y1={props.y1}
            x2={props.x2}
            y2={props.y2}
            stroke="black"
            strokeWidth={props.strokeWidth}
          ></line>
    )
}

export default Nose;