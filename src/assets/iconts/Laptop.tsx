import * as React from "react";
import type { SVGProps } from "react";
const SvgLaptop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9H5V7ZM3 16h18v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1Z"
    />
  </svg>
);
export default SvgLaptop;
