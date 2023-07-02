import * as React from "react";
import type { SVGProps } from "react";
const SvgAddLayer = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 7v11a3 3 0 0 1-3 3H7m3-11V7m0 3v3m0-3h3m-3 0H7m-1 7h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Z"
    />
  </svg>
);
export default SvgAddLayer;
