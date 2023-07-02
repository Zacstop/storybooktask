import * as React from "react";
import type { SVGProps } from "react";
const SvgLayerCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="m7 11 1.5 1.5L13 8m8-1v11a3 3 0 0 1-3 3H7m-1-4h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Z"
    />
  </svg>
);
export default SvgLayerCheck;
