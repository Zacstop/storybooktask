import * as React from "react";
import type { SVGProps } from "react";
const SvgKey1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 14.05a3.5 3.5 0 1 0-5 4.899 3.5 3.5 0 0 0 5-4.898Zm0 0 5.032-5.031M20.05 8l-1.292-1.293a1 1 0 0 0-1.415 0L15.032 9.02m0 0L17 10.987"
    />
  </svg>
);
export default SvgKey1;
