import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 12H4m16 0-3.5 3.5M20 12l-3.5-3.5M4 12l3.5-3.5M4 12l3.5 3.5"
    />
  </svg>
);
export default SvgArrowHorizontal;
