import React from "react";

export const Mouth = (props) => {
  const mouthArc = props.arc()
    .innerRadius(props.mouthRadius)
    .outerRadius(props.mouthRadius + props.mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle((3 * Math.PI) / 2);
    return (
        <path d={mouthArc()}></path>
    )
};
