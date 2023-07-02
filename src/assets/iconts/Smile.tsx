import * as React from "react";
import type { SVGProps } from "react";
const SvgSmile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle
      cx={12}
      cy={12}
      r={9}
      stroke="#141C24"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      stroke="#141C24"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9.5 9.5h.01M14.5 9.5h.01"
    />
    <path
      stroke="#141C24"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.462 14.394a7 7 0 0 1-8.924 0"
    />
  </svg>
);
export default SvgSmile;
