import * as React from "react";
import type { SVGProps } from "react";
const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 17.178V6.822a1 1 0 0 1 1.537-.844l8.137 5.178a1 1 0 0 1 0 1.688l-8.137 5.178A1 1 0 0 1 8 17.178Z"
    />
  </svg>
);
export default SvgPlay;
