import * as React from "react";
import type { SVGProps } from "react";
const SvgLayerOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#141C24"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4 4 16 16m-8-8L4 8l2.669-1.334M9 5.5 12 4l8 4-5.5 2.75M4 12l8 4 2.59-1.295M17 13.5l3-1.5M4 16l8 4 5.24-2.62m2.186-1.093L20 16"
    />
  </svg>
);
export default SvgLayerOff;
