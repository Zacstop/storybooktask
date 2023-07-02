import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationPoint = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <path
      stroke="#141C24"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 9.75C19 15.375 12 21 12 21S5 15.375 5 9.75C5 6.022 8.134 3 12 3s7 3.022 7 6.75Z"
    />
  </svg>
);
export default SvgLocationPoint;
