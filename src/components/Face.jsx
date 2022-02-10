import React from "react";
import BackgroundCircle from "./BackgroundCircle";
import Eye from "./Eye";
import { Mouth } from "./Mouth";
import Nose from "./Nose";

export const Face = (props) => {
    return(
        <svg width={props.width} height={props.height}>
        <g transform={`translate(${props.centerX}, ${props.centerY})`}>
          <BackgroundCircle
            radius={props.centerY - props.strokeWidth / 2}
            strokeWidth={props.strokeWidth}
          />
          <Eye
            eyeOffSetX={-props.eyeOffSetX}
            eyeOffSetY={-props.eyeOffSetY}
            eyeRadius={props.eyeRadius}
          />
          <Eye
            eyeOffSetX={props.eyeOffSetX}
            eyeOffSetY={-props.eyeOffSetY}
            eyeRadius={props.eyeRadius}
          />

          <Mouth arc = {props.arc} mouthWidth = {props.mouthWidth} mouthRadius = {props.mouthRadius} />
          <Nose x1={0} y1={0} x2={0} y2={30} strokeWidth={props.strokeWidth} />
        </g>
      </svg>
    )
}